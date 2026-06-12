import { Experience, MenuCategory, MenuItem, Restaurant } from '../types'
export interface DishOptionGroup {
  id: string
  label: string
  dishes: string[]
}

/** Chỉnh số lượng data tại đây */
export const SEED_CONFIG = {
  /** Số quán sinh thêm từ template (ngoài baseRestaurants) */
  extraRestaurantCount: 50,
  /** Mỗi quán có ít nhất bấy nhiêu món trong menu */
  minMenuItemsPerRestaurant: 10,
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

const IMG = {
  phoBo:
    'https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250313281452.jpg',
  phoGa:
    'https://www.huongnghiepaau.com/wp-content/uploads/2017/08/cach-nau-pho-ga-ngon.jpg',
  bun: 'https://cdn.tgdd.vn/2021/04/CookProduct/1-1200x676-21.jpg',
  noodles:
    'https://www.justspices.co.uk/media/recipe/Egg-Fried-Noodles_Just-Spices.webp',
  pasta:
    'https://www.cookwithkushi.com/wp-content/uploads/2016/07/best_white_sauce_pasta_bechamel_sauce-500x500.jpg',
  rice: 'https://sakos.vn/wp-content/uploads/2024/09/bia.jpg',
  xoi: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/News/News_expe_15168/15168.png?version=290412',
  hotpot:
    'https://static01.nyt.com/images/2024/02/05/multimedia/ND-hot-pot-ljmf/ND-hot-pot-ljmf-videoSixteenByNineJumbo1600.jpg',
  grill:
    'https://www.kikkoman.eu/fileadmin/_processed_/a/2/csm_Blog_onFIre-BBQ_Header_Desktop_046d278675.webp',
  seafood:
    'https://www.metropolitan-market.com/getmedia/6e86ea04-9010-4d44-852f-4a64f0b21b27/180919-004-R1920-Fruits%20De%20Mer%20Seafood%20Platter.jpg',
  nem: 'https://admin.vov.gov.vn/UploadFolder/KhoTin/Images/UploadFolder/VOVVN/Images/sites/default/files/styles/large/public/2025-10/db6eb92b1ef193afcae0.jpg',
  snack:
    'https://www.viethuong.com.vn/wp-content/uploads/2020/05/huong-lieu-cho-snack-huong-lieu-viet-huong.jpg',
  banhMi:
    'https://chefjob.vn/wp-content/uploads/2018/08/banh-mi-thit-sai-gon.jpg',
  gaQuay:
    'https://i-giadinh.vnecdn.net/2021/10/07/gaquay-1633577466-5313-1633577673.jpg',
  fish: 'https://booking.muongthanh.com/upload_images/images/H%60/canh-chua-ca-ngon.jpg',
  drink: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc',
  beer: 'https://images.unsplash.com/photo-1608270586620-248524c67de9',
  dessert:
    'https://image.bnews.vn/MediaUpload/Org/2023/01/19/panna-cotta-an-dam-cho-be-20230119091619.jpeg',
  soup: 'https://www.tasteofhome.com/wp-content/uploads/2025/03/EXPS_TOHVP24_132607_MF_08_27_1.jpg',
  tofu: 'https://www.tilda.com/wp-content/uploads/2022/01/Tofu@2440x1200px.jpg',
  default: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
} as const

const IMAGE_BY_GROUP: Record<string, string> = {
  'pho-bun': `${IMG.phoBo}?w=800`,
  rice: `${IMG.rice}?w=800`,
  'hotpot-grill-buffet': `${IMG.hotpot}?w=800`,
  'seafood-snacks': `${IMG.seafood}?w=800`,
  'vietnamese-specialty': `${IMG.gaQuay}?w=800`,
  'drinks-dessert': `${IMG.dessert}?w=800`,
}

/** Map chính xác theo tên món (ưu tiên cao nhất) */
const DISH_IMAGE_BY_NAME: Record<string, string> = {
  'Phở bò tái': IMG.phoBo,
  'Phở bò chín': IMG.phoBo,
  'Phở tái nạm': IMG.phoBo,
  'Phở bắp bò': IMG.phoBo,
  'Phở bò': IMG.phoBo,
  'Phở sốt vang': IMG.phoBo,
  'Phở bò gầu': IMG.phoBo,
  'Phở bò bắp': IMG.phoBo,
  'Phở gà chặt': IMG.phoGa,
  'Phở gà đùi': IMG.phoGa,
  'Miến lươn': IMG.noodles,
  'Bún cá chiên': IMG.bun,
  'Bánh đa cá': IMG.bun,
  'Bún cá dập': IMG.bun,
  'Bún bò giò heo': IMG.bun,
  'Bún bò tái nạm': IMG.bun,
  'Chả cua': IMG.seafood,
  'Mỳ vằn thắn nước': IMG.noodles,
  'Mỳ vằn thắn trộn': IMG.noodles,
  'Sủi cảo chiên': IMG.noodles,
  'Mỳ xào bò': IMG.noodles,
  Quẩy: IMG.phoBo,
  'Quẩy giòn': IMG.phoBo,
  'Cơm thố xá xíu': IMG.rice,
  'Cơm thố gà nướng': IMG.rice,
  'Cơm thố bò xào': IMG.rice,
  'Cơm thố sườn': IMG.rice,
  'Cơm thố gà': IMG.rice,
  'Cơm thố bò': IMG.rice,
  'Cơm tấm sườn nướng': IMG.rice,
  'Cơm tấm sườn bì': IMG.rice,
  'Cơm tấm chả trứng': IMG.rice,
  'Thịt kho tàu': IMG.rice,
  'Cá rán': IMG.fish,
  'Đậu sốt cà chua': IMG.tofu,
  'Xôi xéo': IMG.xoi,
  'Xôi ngô': IMG.xoi,
  'Xôi thịt kho trứng': IMG.xoi,
  'Xôi xíu mại': IMG.xoi,
  'Xôi gà xé': IMG.xoi,
  'Xôi gà': IMG.xoi,
  'Lẩu thái': IMG.hotpot,
  'Lẩu ếch măng cay': IMG.hotpot,
  'Lẩu riêu cua': IMG.hotpot,
  'Ếch xào sả ớt': IMG.hotpot,
  'Ếch rang muối': IMG.hotpot,
  'Ba chỉ bò mĩ': IMG.grill,
  'Bạch tuộc nướng': IMG.grill,
  'Hàu nướng phô mai': IMG.grill,
  'Mực nướng': IMG.grill,
  'Dồi sụn nướng': IMG.grill,
  'Ốc luộc mắm gừng': IMG.seafood,
  'Ốc xào me': IMG.seafood,
  'Ngao hấp sả': IMG.seafood,
  'Cút lộn xào me': IMG.seafood,
  'Nem chua rán': IMG.nem,
  'Mỳ Ý sốt bò băm': IMG.pasta,
  'Mỳ Ý phô mai': IMG.pasta,
  'Khoai tây chiên': IMG.snack,
  'Xúc xích': IMG.snack,
  'Ngô chiên': IMG.snack,
  'Đậu lướt ván': IMG.tofu,
  'Gà quay': IMG.gaQuay,
  'Cá chép om dưa': IMG.fish,
  'Bê thui': IMG.grill,
  'Bánh mì chảo đầy đủ': IMG.banhMi,
  'Bánh mì chảo thường': IMG.banhMi,
  'Bia hơi': IMG.beer,
  'Trà quất': IMG.drink,
  'Trà đá': IMG.drink,
  'Sữa đậu nành': IMG.drink,
  'Nước ngọt': IMG.drink,
  'Canh rong biển': IMG.soup,
  'Canh rau ngót': IMG.soup,
  'Canh khổ qua': IMG.soup,
  'Sữa chua trân châu cốt dừa': IMG.dessert,
  'Sữa chua matcha': IMG.dessert,
  'Hướng dương': IMG.snack,
}

/** Fallback theo từ khóa — rule đầu khớp sẽ được dùng */
const DISH_IMAGE_KEYWORD_RULES: Array<{ keywords: string[]; url: string }> = [
  { keywords: ['Phở gà'], url: IMG.phoGa },
  { keywords: ['Phở'], url: IMG.phoBo },
  { keywords: ['Bún', 'bún'], url: IMG.bun },
  { keywords: ['Mỳ Ý', 'Pasta'], url: IMG.pasta },
  { keywords: ['Mỳ', 'Miến', 'Sủi cảo'], url: IMG.noodles },
  { keywords: ['Xôi'], url: IMG.xoi },
  { keywords: ['Cơm'], url: IMG.rice },
  { keywords: ['Lẩu'], url: IMG.hotpot },
  { keywords: ['nướng', 'Nướng'], url: IMG.grill },
  { keywords: ['Ốc', 'Ngao', 'Cút lộn', 'hải sản'], url: IMG.seafood },
  { keywords: ['Nem'], url: IMG.nem },
  { keywords: ['Bánh mì'], url: IMG.banhMi },
  { keywords: ['Cá', 'cá'], url: IMG.fish },
  { keywords: ['Gà quay', 'Bê thui'], url: IMG.gaQuay },
  { keywords: ['Canh'], url: IMG.soup },
  { keywords: ['Trà', 'Sữa đậu', 'Nước'], url: IMG.drink },
  { keywords: ['Bia'], url: IMG.beer },
  { keywords: ['Sữa chua', 'Chè', 'matcha'], url: IMG.dessert },
  { keywords: ['Khoai', 'Xúc xích', 'Ngô chiên', 'Quẩy'], url: IMG.snack },
  { keywords: ['Đậu'], url: IMG.tofu },
  { keywords: ['Ếch'], url: IMG.hotpot },
]

function toMenuImageUrl(baseUrl: string): string {
  if (baseUrl.indexOf('w=') !== -1) {
    return baseUrl.replace(/w=\d+/, 'w=400')
  }
  return `${baseUrl}?w=400`
}

export function getDishImageUrl(
  dishName: string,
  fallback: string = IMG.default,
): string {
  if (DISH_IMAGE_BY_NAME[dishName]) {
    return toMenuImageUrl(DISH_IMAGE_BY_NAME[dishName])
  }

  for (const rule of DISH_IMAGE_KEYWORD_RULES) {
    for (const keyword of rule.keywords) {
      if (dishName.indexOf(keyword) !== -1) {
        return toMenuImageUrl(rule.url)
      }
    }
  }

  return toMenuImageUrl(fallback)
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
  index: number,
  isPopular = false,
  fallbackImage?: string,
): MenuItem {
  const category = dishCategory(name)
  return {
    id: `m_${restaurantId}_${index}`,
    name,
    price: roundPrice(price),
    category,
    description: `${name} tại quán — món ${category === 'food' ? 'đặc trưng' : category}`,
    imageUrl: getDishImageUrl(name, fallbackImage),
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
  const fallbackImage = restaurant.imageUrl || `${IMG.default}?w=800`

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
      menu.push({
        ...existing,
        imageUrl: getDishImageUrl(name, fallbackImage),
      })
    } else {
      const price = restaurant.priceRange * (0.7 + hashIndex(seed, i, 6) * 0.1)
      menu.push(
        createMenuItem(
          restaurant.id,
          name,
          price,
          menuIndex++,
          i === 0,
          fallbackImage,
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
          menuIndex++,
          false,
          fallbackImage,
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
          menuIndex++,
          false,
          fallbackImage,
        ),
      )
    }
  }

  const foodDishes = menu
    .filter((m) => m.category === 'food')
    .map((m) => m.name)

  const coverImage =
    menu.length > 0
      ? getDishImageUrl(menu[0].name, fallbackImage).replace('w=400', 'w=800')
      : fallbackImage

  return {
    ...restaurant,
    imageUrl: coverImage,
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
  const street = STREETS[hashIndex(seed, 7, STREETS.length)]
  const placeholderImage =
    IMAGE_BY_GROUP[template.groupIds[0]] || `${IMG.default}?w=800`

  const base: Restaurant = {
    id,
    name,
    description: template.description,
    priceRange,
    maxCapacity,
    dishes,
    amenities,
    rating,
    imageUrl: placeholderImage,
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
