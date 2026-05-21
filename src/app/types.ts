// Types for the restaurant app

export interface SearchCriteria {
  numberOfPeople: number;
  budget: number;
  preferredDishes: string[];
  amenities: string[];
}

export type MenuCategory = 'food' | 'drink' | 'extra' | 'dessert';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  description?: string;
  imageUrl: string;
  isPopular?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  priceRange: number; // Average price per person
  maxCapacity: number;
  dishes: string[];
  amenities: string[];
  rating: number;
  imageUrl: string;
  address: string;
  experiences: Experience[];
  menu: MenuItem[];
}

export interface MatchScore {
  restaurantId: string;
  score: number; // 0-100
  matchedCriteria: string[];
  unmatchedCriteria: string[];
  reasons: {
    budgetMatch: boolean;
    capacityMatch: boolean;
    dishesMatch: string[];
    amenitiesMatch: string[];
  };
}

export interface Experience {
  id: string;
  restaurantId: string;
  visitTime: string; // e.g., "18:00-20:00"
  crowdLevel: 'empty' | 'normal' | 'crowded' | 'very_crowded';
  waitTime: 'none' | 'short' | 'normal' | 'long';
  priceAccuracy: 'cheaper' | 'accurate' | 'slightly_higher' | 'much_higher';
  amenityMatch: 'matched' | 'not_matched';
  date: string;
  // User context to enable filtering by similar users
  userContext: {
    budget: number;
    numberOfPeople: number;
    amenities: string[];
  };
}

export interface TrendAnalysis {
  crowdTrend: string;
  waitTimeTrend: string;
  priceTrend: string;
  amenityTrend: string;
  totalExperiences: number;
  crowdDistribution: {
    empty: number;
    normal: number;
    crowded: number;
    very_crowded: number;
  };
  waitTimeDistribution: {
    none: number;
    short: number;
    normal: number;
    long: number;
  };
  priceDistribution: {
    cheaper: number;
    accurate: number;
    slightly_higher: number;
    much_higher: number;
  };
  amenityDistribution: {
    matched: number;
    not_matched: number;
  };
  // Risk warnings
  risks: {
    budgetRisk: boolean;
    crowdRisk: boolean;
    waitTimeRisk: boolean;
    amenityRisk: boolean;
  };
}
