import { Restaurant, SearchCriteria, MatchScore } from '../types';

const WEIGHTS = {
  budget: 0.3,
  capacity: 0.2,
  dishes: 0.35,
  amenities: 0.15,
} as const;

/** Quán phải thỏa mãn toàn bộ filter đang bật "bắt buộc". */
function meetsAllMandatoryFilters(
  criteria: SearchCriteria,
  match: MatchScore
): boolean {
  const mandatory = criteria.mandatory;
  if (!mandatory) return true;

  if (mandatory.budget && !match.reasons.budgetMatch) return false;
  if (mandatory.capacity && !match.reasons.capacityMatch) return false;

  if (
    mandatory.dishes &&
    criteria.preferredDishes.length > 0 &&
    match.reasons.dishesMatch.length !== criteria.preferredDishes.length
  ) {
    return false;
  }

  if (
    mandatory.amenities &&
    criteria.amenities.length > 0 &&
    match.reasons.amenitiesMatch.length !== criteria.amenities.length
  ) {
    return false;
  }

  return true;
}

export function calculateMatchScore(
  restaurant: Restaurant,
  criteria: SearchCriteria
): MatchScore {
  const matchedCriteria: string[] = [];
  const unmatchedCriteria: string[] = [];

  const budgetMatch = restaurant.priceRange <= criteria.budget;
  const budgetScore = budgetMatch ? 1 : 0;
  if (budgetMatch) {
    matchedCriteria.push(`Trong ngân sách (${restaurant.priceRange.toLocaleString()}đ/người)`);
  } else {
    unmatchedCriteria.push(
      `Vượt ngân sách (${restaurant.priceRange.toLocaleString()}đ/người, cao hơn ${(
        restaurant.priceRange - criteria.budget
      ).toLocaleString()}đ)`
    );
  }

  const capacityMatch = restaurant.maxCapacity >= criteria.numberOfPeople;
  const capacityScore = capacityMatch ? 1 : 0;
  if (capacityMatch) {
    matchedCriteria.push(`Đủ chỗ cho ${criteria.numberOfPeople} người`);
  } else {
    unmatchedCriteria.push(
      `Thiếu chỗ ngồi (tối đa ${restaurant.maxCapacity} người, thiếu ${
        criteria.numberOfPeople - restaurant.maxCapacity
      } chỗ)`
    );
  }

  const matchedDishes = criteria.preferredDishes.filter((dish) =>
    restaurant.dishes.includes(dish)
  );
  let dishesScore: number;
  if (criteria.preferredDishes.length > 0) {
    dishesScore = matchedDishes.length / criteria.preferredDishes.length;
    if (matchedDishes.length > 0) {
      matchedCriteria.push(`Có món: ${matchedDishes.join(', ')}`);
    }
    const unmatchedDishes = criteria.preferredDishes.filter(
      (dish) => !restaurant.dishes.includes(dish)
    );
    if (unmatchedDishes.length > 0) {
      unmatchedCriteria.push(`Không có: ${unmatchedDishes.join(', ')}`);
    }
  } else {
    dishesScore = 1;
  }

  const matchedAmenities = criteria.amenities.filter((amenity) =>
    restaurant.amenities.includes(amenity)
  );
  let amenitiesScore: number;
  if (criteria.amenities.length > 0) {
    amenitiesScore = matchedAmenities.length / criteria.amenities.length;
    if (matchedAmenities.length > 0) {
      matchedCriteria.push(`Có tiện ích: ${matchedAmenities.join(', ')}`);
    }
    const unmatchedAmenities = criteria.amenities.filter(
      (amenity) => !restaurant.amenities.includes(amenity)
    );
    if (unmatchedAmenities.length > 0) {
      unmatchedCriteria.push(`Thiếu: ${unmatchedAmenities.join(', ')}`);
    }
  } else {
    amenitiesScore = 1;
  }

  const weightedScore =
    budgetScore * WEIGHTS.budget +
    capacityScore * WEIGHTS.capacity +
    dishesScore * WEIGHTS.dishes +
    amenitiesScore * WEIGHTS.amenities;

  const score = Math.round(weightedScore * 100);

  return {
    restaurantId: restaurant.id,
    score,
    matchedCriteria,
    unmatchedCriteria,
    reasons: {
      budgetMatch,
      capacityMatch,
      dishesMatch: matchedDishes,
      amenitiesMatch: matchedAmenities,
    },
  };
}

export function rankRestaurants(
  restaurants: Restaurant[],
  criteria: SearchCriteria
): MatchScore[] {
  const scores = restaurants
    .map((restaurant) => calculateMatchScore(restaurant, criteria))
    .filter((score) => meetsAllMandatoryFilters(criteria, score));
  return scores.sort((a, b) => b.score - a.score);
}
