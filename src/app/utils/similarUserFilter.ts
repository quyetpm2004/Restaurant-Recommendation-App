import { Experience, SearchCriteria } from '../types';

/**
 * Filters experiences to show only those from users with similar context
 * based on budget, group size, and amenity preferences
 */
export function filterBySimilarUsers(
  experiences: Experience[],
  userCriteria: SearchCriteria | null
): Experience[] {
  if (!userCriteria) {
    return experiences;
  }

  return experiences.filter((exp) => {
    const budgetSimilarity = calculateBudgetSimilarity(
      exp.userContext.budget,
      userCriteria.budget
    );
    const groupSizeSimilarity = calculateGroupSizeSimilarity(
      exp.userContext.numberOfPeople,
      userCriteria.numberOfPeople
    );
    const amenitySimilarity = calculateAmenitySimilarity(
      exp.userContext.amenities,
      userCriteria.amenities
    );

    // Consider users similar if they match on at least 2 out of 3 criteria
    const matchCount = [budgetSimilarity, groupSizeSimilarity, amenitySimilarity].filter(
      Boolean
    ).length;

    return matchCount >= 2;
  });
}

/**
 * Budget is considered similar if within ±30%
 */
function calculateBudgetSimilarity(expBudget: number, userBudget: number): boolean {
  const lowerBound = userBudget * 0.7;
  const upperBound = userBudget * 1.3;
  return expBudget >= lowerBound && expBudget <= upperBound;
}

/**
 * Group size is similar if within ±2 people
 */
function calculateGroupSizeSimilarity(expPeople: number, userPeople: number): boolean {
  return Math.abs(expPeople - userPeople) <= 2;
}

/**
 * Amenities are similar if they have at least one amenity in common,
 * or both have no amenity requirements
 */
function calculateAmenitySimilarity(
  expAmenities: string[],
  userAmenities: string[]
): boolean {
  if (userAmenities.length === 0 && expAmenities.length === 0) {
    return true;
  }

  if (userAmenities.length === 0 || expAmenities.length === 0) {
    return false;
  }

  // Check if there's at least one common amenity
  return expAmenities.some((amenity) => userAmenities.includes(amenity));
}
