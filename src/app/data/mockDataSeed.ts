import { Experience, MenuCategory, MenuItem, Restaurant } from '../types'
export interface DishOptionGroup {
  id: string
  label: string
  dishes: string[]
}

/** Chỉnh số lượng data tại đây */
export const SEED_CONFIG = {
  /** Số quán sinh thêm từ template (ngoài baseRestaurants) */
  extraRestaurantCount: 30,
  /** Mỗi quán có ít nhất bấy nhiêu món trong menu */
  minMenuItemsPerRestaurant: 5,
  /** Thêm đồ uống / món phụ vào menu */
  addDrinkAndExtraItems: true,
  /** Số experience mỗi quán sinh thêm */
  experiencesPerRestaurant: 2,
}

const AMENITY_POOL = [
  'Wifi',
  'Điều hòa',
  'Quạt mát',
  'Gửi xe miễn phí',
  'Bãi đỗ xe',
  'Không gian ngoài trời',
  'Phục vụ nhanh',
  'Giao hàng',
  'Takeaway',
  'Phòng riêng',
  'Bãi đỗ xe ô tô',
  'Bàn ngoài trời',
]

const STREETS = [
  'P. Tạ Quang Bửu',
  'P. Nguyễn Hiền',
  'Trần Đại Nghĩa',
  'P. Lê Thanh Nghị',
  'Lê Thanh Nghị',
  'P. Hoa Lư',
  'P. Lê Đại Hành',
]

const IMAGE_BY_GROUP: Record<string, string> = {
  'pho-bun': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
  rice: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
  'hotpot-grill-buffet':
    'https://images.unsplash.com/photo-1544025162-811114215b2e?w=800',
  'seafood-snacks':
    'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800',
  'vietnamese-specialty':
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
  'drinks-dessert':
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
}

const DRINK_MENU: Array<{ name: string; price: number }> = [
  { name: 'Trà đá', price: 5000 },
  { name: 'Trà quất', price: 12000 },
  { name: 'Sữa đậu nành', price: 10000 },
  { name: 'Nước ngọt', price: 15000 },
]

const EXTRA_MENU: Array<{ name: string; price: number }> = [
  { name: 'Quẩy', price: 8000 },
  { name: 'Canh rong biển', price: 10000 },
  { name: 'Canh rau ngót', price: 10000 },
]

interface RestaurantTemplate {
  id: string
  groupIds: string[]
  namePrefixes: string[]
  nameSuffixes: string[]
  description: string
  priceRange: [number, number]
  capacityRange: [number, number]
  ratingRange: [number, number]
}

const RESTAURANT_TEMPLATES: RestaurantTemplate[] = [
  {
    id: 'pho',
    groupIds: ['pho-bun'],
    namePrefixes: ['Phở', 'Quán Phở', 'Phở Bò'],
    nameSuffixes: [
      'Bách Khoa',
      'Tạ Quang Bửu',
      'Nguyễn Hiền',
      'Trần Đại Nghĩa',
    ],
    description: 'Phở truyền thống, nước dùng ninh xương, phục vụ nhanh.',
    priceRange: [35000, 55000],
    capacityRange: [25, 50],
    ratingRange: [3.5, 4.8],
  },
  {
    id: 'com',
    groupIds: ['rice'],
    namePrefixes: ['Cơm', 'Cơm tấm', 'Cơm thố'],
    nameSuffixes: ['Sài Gòn', 'Gia Đình', 'Bách Khoa', 'sinh viên'],
    description: 'Cơm bình dân đầy đặn, topping đa dạng, giá sinh viên.',
    priceRange: [30000, 60000],
    capacityRange: [30, 70],
    ratingRange: [3.2, 4.5],
  },
  {
    id: 'lau',
    groupIds: ['hotpot-grill-buffet', 'seafood-snacks'],
    namePrefixes: ['Lẩu', 'Nhậu', 'Nướng'],
    nameSuffixes: ['Tự Do', 'Bách Khoa', 'Khu tập thể', 'Hai Bà Trưng'],
    description: 'Không gian nhậu thoáng, lẩu nướng đậm vị.',
    priceRange: [80000, 200000],
    capacityRange: [50, 120],
    ratingRange: [3.8, 4.9],
  },
  {
    id: 'anvat',
    groupIds: ['seafood-snacks', 'vietnamese-specialty'],
    namePrefixes: ['Ăn vặt', 'Quán', 'Bánh mì'],
    nameSuffixes: ['Cột Điện', 'Bách Khoa', 'Ngõ nhỏ', 'đêm khuya'],
    description: 'Đồ ăn vặt, ốc và món nhanh phù hợp tụ tập.',
    priceRange: [25000, 80000],
    capacityRange: [20, 60],
    ratingRange: [3.5, 4.6],
  },
  {
    id: 'che',
    groupIds: ['drinks-dessert'],
    namePrefixes: ['Sữa chua', 'Trà sữa', 'Chè'],
    nameSuffixes: ['Hạ Long', 'Bách Khoa', 'mát lạnh', 'trân châu'],
    description: 'Giải khát, tráng miệng mát lạnh cho sinh viên.',
    priceRange: [15000, 35000],
    capacityRange: [15, 40],
    ratingRange: [3.8, 4.7],
  },
]

function hashIndex(seed: number, salt: number, mod: number): number {
  return Math.abs((seed * 31 + salt * 17) % mod)
}

function pickMany<T>(items: T[], count: number, seed: number): T[] {
  if (items.length === 0 || count <= 0) return []
  const result: T[] = []
  const used: number[] = []
  for (let i = 0; i < count && result.length < items.length; i++) {
    let idx = hashIndex(seed, i, items.length)
    let guard = 0
    while (used.indexOf(idx) !== -1 && guard < items.length) {
      idx = (idx + 1) % items.length
      guard++
    }
    if (used.indexOf(idx) === -1) {
      used.push(idx)
      result.push(items[idx])
    }
  }
  return result
}

function rangeValue(
  [min, max]: [number, number],
  seed: number,
  salt: number,
): number {
  const span = max - min
  if (span <= 0) return min
  return min + hashIndex(seed, salt, span + 1)
}

function roundPrice(price: number): number {
  return Math.round(price / 1000) * 1000
}

function dishCategory(name: string): MenuCategory {
  const drinks = ['Trà', 'Sữa', 'Bia', 'Nước', 'Hướng dương']
  const desserts = ['Sữa chua', 'Chè', 'Kem', 'matcha']
  if (drinks.some((k) => name.indexOf(k) !== -1)) return 'drink'
  if (desserts.some((k) => name.indexOf(k) !== -1)) return 'dessert'
  if (name.indexOf('Canh') !== -1 || name.indexOf('Quẩy') !== -1) return 'extra'
  return 'food'
}

function createMenuItem(
  restaurantId: string,
  name: string,
  price: number,
  imageUrl: string,
  index: number,
  isPopular = false,
): MenuItem {
  const category = dishCategory(name)
  return {
    id: `m_${restaurantId}_${index}`,
    name,
    price: roundPrice(price),
    category,
    description: `${name} tại quán — món ${category === 'food' ? 'đặc trưng' : category}`,
    imageUrl: imageUrl.replace('w=800', 'w=400'),
    isPopular,
  }
}

function dishesFromGroups(
  groupIds: string[],
  dishGroups: DishOptionGroup[],
  count: number,
  seed: number,
): string[] {
  const pool: string[] = []
  for (const groupId of groupIds) {
    const group = dishGroups.filter((g) => g.id === groupId)[0]
    if (group) pool.push(...group.dishes)
  }
  const unique: string[] = []
  for (const dish of pool) {
    if (unique.indexOf(dish) === -1) unique.push(dish)
  }
  return pickMany(unique, count, seed)
}

function buildExperiences(
  restaurant: Restaurant,
  count: number,
  seed: number,
): Experience[] {
  const times = ['07:00-08:30', '11:30-13:00', '18:00-20:00', '19:00-22:00']
  const crowds: Experience['crowdLevel'][] = [
    'normal',
    'crowded',
    'very_crowded',
  ]
  const waits: Experience['waitTime'][] = ['short', 'normal', 'long']
  const prices: Experience['priceAccuracy'][] = [
    'accurate',
    'slightly_higher',
    'cheaper',
  ]

  const experiences: Experience[] = [...restaurant.experiences]
  for (let i = experiences.length; i < count; i++) {
    experiences.push({
      id: `e_${restaurant.id}_${i}`,
      restaurantId: restaurant.id,
      visitTime: times[hashIndex(seed, i, times.length)],
      crowdLevel: crowds[hashIndex(seed, i + 1, crowds.length)],
      waitTime: waits[hashIndex(seed, i + 2, waits.length)],
      priceAccuracy: prices[hashIndex(seed, i + 3, prices.length)],
      amenityMatch: hashIndex(seed, i, 2) === 0 ? 'matched' : 'not_matched',
      date: `2026-0${1 + hashIndex(seed, i, 6)}-${10 + hashIndex(seed, i + 5, 18)}`,
      userContext: {
        budget: restaurant.priceRange + hashIndex(seed, i, 20000),
        numberOfPeople: 1 + hashIndex(seed, i + 4, 6),
        amenities: pickMany(restaurant.amenities, 2, seed + i),
      },
    })
  }
  return experiences
}

/** Bổ sung menu từ `dishes` + đồ uống/món phụ nếu thiếu */
export function enrichRestaurantMenu(
  restaurant: Restaurant,
  config: typeof SEED_CONFIG,
  dishPool: string[],
  seed: number,
): Restaurant {
  const imageUrl =
    restaurant.imageUrl ||
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'

  const dishNames = [...restaurant.dishes]
  if (dishNames.length < config.minMenuItemsPerRestaurant) {
    const extra = pickMany(
      dishPool,
      config.minMenuItemsPerRestaurant - dishNames.length,
      seed,
    )
    for (const name of extra) {
      if (dishNames.indexOf(name) === -1) dishNames.push(name)
    }
  }

  const menu: MenuItem[] = []
  let menuIndex = 0

  dishNames.forEach((name, i) => {
    const existing = restaurant.menu.filter((m) => m.name === name)[0]
    if (existing) {
      menu.push(existing)
    } else {
      const price = restaurant.priceRange * (0.7 + hashIndex(seed, i, 6) * 0.1)
      menu.push(
        createMenuItem(
          restaurant.id,
          name,
          price,
          imageUrl,
          menuIndex++,
          i === 0,
        ),
      )
    }
  })

  if (config.addDrinkAndExtraItems) {
    for (const drink of DRINK_MENU) {
      if (menu.filter((m) => m.name === drink.name).length > 0) continue
      menu.push(
        createMenuItem(
          restaurant.id,
          drink.name,
          drink.price,
          imageUrl,
          menuIndex++,
        ),
      )
    }
    const extraCount = 1 + hashIndex(seed, 9, EXTRA_MENU.length)
    for (let i = 0; i < extraCount; i++) {
      const extra = EXTRA_MENU[i]
      if (!extra || menu.filter((m) => m.name === extra.name).length > 0)
        continue
      menu.push(
        createMenuItem(
          restaurant.id,
          extra.name,
          extra.price,
          imageUrl,
          menuIndex++,
        ),
      )
    }
  }

  const foodDishes = menu
    .filter((m) => m.category === 'food')
    .map((m) => m.name)

  return {
    ...restaurant,
    dishes: foodDishes.length > 0 ? foodDishes : dishNames,
    menu,
    experiences: buildExperiences(
      restaurant,
      Math.max(config.experiencesPerRestaurant, restaurant.experiences.length),
      seed,
    ),
  }
}

export function generateRestaurant(
  template: RestaurantTemplate,
  index: number,
  dishGroups: DishOptionGroup[],
  config: typeof SEED_CONFIG,
): Restaurant {
  const seed = index + 1
  const id = `seed_${template.id}_${index}`
  const name = `${template.namePrefixes[hashIndex(seed, 0, template.namePrefixes.length)]} ${template.nameSuffixes[hashIndex(seed, 1, template.nameSuffixes.length)]}`
  const dishCount = rangeValue(
    [config.minMenuItemsPerRestaurant, config.minMenuItemsPerRestaurant + 4],
    seed,
    2,
  )
  const dishes = dishesFromGroups(
    template.groupIds,
    dishGroups,
    dishCount,
    seed,
  )
  const amenities = pickMany(AMENITY_POOL, 2 + hashIndex(seed, 3, 3), seed)
  const priceRange = rangeValue(template.priceRange, seed, 4)
  const maxCapacity = rangeValue(template.capacityRange, seed, 5)
  const rating = Math.round(rangeValue(template.ratingRange, seed, 6) * 10) / 10
  const imageUrl =
    IMAGE_BY_GROUP[template.groupIds[0]] ||
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'
  const street = STREETS[hashIndex(seed, 7, STREETS.length)]

  const base: Restaurant = {
    id,
    name,
    description: template.description,
    priceRange,
    maxCapacity,
    dishes,
    amenities,
    rating,
    imageUrl,
    address: `${street}, Bách Khoa, Hai Bà Trưng, Hà Nội`,
    experiences: [],
    menu: [],
  }

  const dishPool = dishGroups.reduce(
    (acc, g) => acc.concat(g.dishes),
    [] as string[],
  )

  return enrichRestaurantMenu(base, config, dishPool, seed)
}

export function buildMockRestaurants(
  baseRestaurants: Restaurant[],
  dishGroups: DishOptionGroup[],
  config: typeof SEED_CONFIG = SEED_CONFIG,
): Restaurant[] {
  const dishPool = dishGroups.reduce(
    (acc, g) => acc.concat(g.dishes),
    [] as string[],
  )

  const enrichedBase = baseRestaurants.map((r, i) =>
    enrichRestaurantMenu(r, config, dishPool, i * 100),
  )

  const generated: Restaurant[] = []
  for (let i = 0; i < config.extraRestaurantCount; i++) {
    const template = RESTAURANT_TEMPLATES[i % RESTAURANT_TEMPLATES.length]
    generated.push(generateRestaurant(template, i, dishGroups, config))
  }

  return [...enrichedBase, ...generated]
}
