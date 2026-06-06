// Sử dụng sessionStorage để lưu trữ dữ liệu filter tạm thời
import { SearchCriteria, SearchCriteriaMandatory } from '../types'

const STORAGE_KEY = 'search-criteria-draft'

const DEFAULT_MANDATORY = {
  budget: false,
  capacity: false,
  dishes: false,
  amenities: false,
}

const DEFAULT: SearchCriteria = {
  numberOfPeople: 4,
  budget: 50000,
  preferredDishes: [],
  amenities: [],
  mandatory: { ...DEFAULT_MANDATORY },
}

function parseMandatory(
  value: Partial<SearchCriteriaMandatory> | undefined,
): SearchCriteriaMandatory {
  return {
    budget: value?.budget === true,
    capacity: value?.capacity === true,
    dishes: value?.dishes === true,
    amenities: value?.amenities === true,
  }
}

export function loadSearchCriteriaDraft(): SearchCriteria {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT, mandatory: { ...DEFAULT_MANDATORY } }

    const parsed = JSON.parse(raw) as Partial<SearchCriteria>
    return {
      numberOfPeople:
        typeof parsed.numberOfPeople === 'number'
          ? parsed.numberOfPeople
          : DEFAULT.numberOfPeople,
      budget:
        typeof parsed.budget === 'number' ? parsed.budget : DEFAULT.budget,
      preferredDishes: Array.isArray(parsed.preferredDishes)
        ? parsed.preferredDishes
        : DEFAULT.preferredDishes,
      amenities: Array.isArray(parsed.amenities)
        ? parsed.amenities
        : DEFAULT.amenities,
      mandatory: parseMandatory(parsed.mandatory),
    }
  } catch {
    return { ...DEFAULT, mandatory: { ...DEFAULT_MANDATORY } }
  }
}

export function saveSearchCriteriaDraft(criteria: SearchCriteria): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(criteria))
  } catch {
    // Quota exceeded or private browsing — ignore silently
  }
}
