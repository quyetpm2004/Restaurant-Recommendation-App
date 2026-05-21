import { Restaurant, SearchCriteria, MatchScore } from '../types';

export function calculateMatchScore(
  restaurant: Restaurant,
  criteria: SearchCriteria
): MatchScore {
  const matchedCriteria: string[] = [];
  const unmatchedCriteria: string[] = [];
  let totalPoints = 0;
  let earnedPoints = 0;

  // Budget match (25 points)
  totalPoints += 25;
  const budgetMatch = restaurant.priceRange <= criteria.budget;
  if (budgetMatch) {
    earnedPoints += 25;
    matchedCriteria.push(`Trong ngân sách (${restaurant.priceRange.toLocaleString()}đ/người)`);
  } else {
    unmatchedCriteria.push(
      `Vượt ngân sách (${restaurant.priceRange.toLocaleString()}đ/người, cao hơn ${(
        restaurant.priceRange - criteria.budget
      ).toLocaleString()}đ)`
    );
  }

  // Capacity match (25 points)
  totalPoints += 25;
  const capacityMatch = restaurant.maxCapacity >= criteria.numberOfPeople;
  if (capacityMatch) {
    earnedPoints += 25;
    matchedCriteria.push(`Đủ chỗ cho ${criteria.numberOfPeople} người`);
  } else {
    unmatchedCriteria.push(
      `Thiếu chỗ ngồi (tối đa ${restaurant.maxCapacity} người, thiếu ${
        criteria.numberOfPeople - restaurant.maxCapacity
      } chỗ)`
    );
  }

  // Dishes match (25 points)
  totalPoints += 25;
  const matchedDishes = criteria.preferredDishes.filter((dish) =>
    restaurant.dishes.includes(dish)
  );
  if (criteria.preferredDishes.length > 0) {
    const dishScore = (matchedDishes.length / criteria.preferredDishes.length) * 25;
    earnedPoints += dishScore;

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
    // If no dishes specified, give full points
    earnedPoints += 25;
  }

  // Amenities match (25 points)
  totalPoints += 25;
  const matchedAmenities = criteria.amenities.filter((amenity) =>
    restaurant.amenities.includes(amenity)
  );
  if (criteria.amenities.length > 0) {
    const amenityScore = (matchedAmenities.length / criteria.amenities.length) * 25;
    earnedPoints += amenityScore;

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
    // If no amenities specified, give full points
    earnedPoints += 25;
  }

  const score = Math.round((earnedPoints / totalPoints) * 100);

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
  const scores = restaurants.map((restaurant) =>
    calculateMatchScore(restaurant, criteria)
  );
  return scores.sort((a, b) => b.score - a.score);
}
