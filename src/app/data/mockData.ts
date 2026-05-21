import { Restaurant, Experience, MenuItem } from '../types';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Nhà Hàng Phố Cổ',
    description: 'Không gian truyền thống, đặc sản Hà Nội',
    priceRange: 150000,
    maxCapacity: 40,
    dishes: ['Phở', 'Phở bò', 'Phở gà', 'Bún chả', 'Nem rán', 'Chả cá', 'Bánh cuốn', 'Gỏi cuốn', 'Hủ tiếu'],
    amenities: ['Điều hòa', 'Wifi', 'Không gian yên tĩnh', 'Bãi đỗ xe'],
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    address: '45 Hàng Bạc, Hoàn Kiếm, Hà Nội',
    experiences: [
      {
        id: 'e1',
        restaurantId: '1',
        visitTime: '18:00-20:00',
        crowdLevel: 'crowded',
        waitTime: 'normal',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-04-15',
        userContext: { budget: 150000, numberOfPeople: 4, amenities: ['Điều hòa', 'Wifi'] }
      },
      {
        id: 'e2',
        restaurantId: '1',
        visitTime: '12:00-14:00',
        crowdLevel: 'very_crowded',
        waitTime: 'long',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-04-14',
        userContext: { budget: 140000, numberOfPeople: 6, amenities: ['Không gian yên tĩnh'] }
      },
      {
        id: 'e3',
        restaurantId: '1',
        visitTime: '18:00-20:00',
        crowdLevel: 'crowded',
        waitTime: 'normal',
        priceAccuracy: 'slightly_higher',
        amenityMatch: 'matched',
        date: '2026-04-13',
        userContext: { budget: 160000, numberOfPeople: 4, amenities: ['Wifi', 'Bãi đỗ xe'] }
      },
      {
        id: 'e4',
        restaurantId: '1',
        visitTime: '20:00-22:00',
        crowdLevel: 'normal',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-04-12',
        userContext: { budget: 150000, numberOfPeople: 2, amenities: ['Điều hòa'] }
      },
      {
        id: 'e5',
        restaurantId: '1',
        visitTime: '12:00-14:00',
        crowdLevel: 'very_crowded',
        waitTime: 'long',
        priceAccuracy: 'accurate',
        amenityMatch: 'not_matched',
        date: '2026-04-11',
        userContext: { budget: 180000, numberOfPeople: 8, amenities: ['Phòng riêng'] }
      }
    ],
    menu: [
      { id: 'm1-1', name: 'Phở bò tái', price: 60000, category: 'food', description: 'Phở bò tái nạm gầu', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', isPopular: true },
      { id: 'm1-2', name: 'Phở gà', price: 55000, category: 'food', description: 'Phở gà thơm ngon', imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400' },
      { id: 'm1-3', name: 'Bún chả Hà Nội', price: 50000, category: 'food', description: 'Bún chả truyền thống', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400', isPopular: true },
      { id: 'm1-4', name: 'Nem rán', price: 40000, category: 'food', description: '10 miếng nem rán giòn', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
      { id: 'm1-5', name: 'Chả cá Lã Vọng', price: 120000, category: 'food', description: 'Đặc sản Hà Nội', imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400' },
      { id: 'm1-6', name: 'Trà đá', price: 5000, category: 'drink', description: 'Trà đá truyền thống', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 'm1-7', name: 'Nước chanh', price: 15000, category: 'drink', description: 'Chanh tươi vắt', imageUrl: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe4eab?w=400' },
      { id: 'm1-8', name: 'Bia Hà Nội', price: 20000, category: 'drink', description: 'Bia tươi', imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400' },
      { id: 'm1-9', name: 'Rau sống', price: 10000, category: 'extra', description: 'Đĩa rau sống tươi', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm1-10', name: 'Chè ba màu', price: 25000, category: 'dessert', description: 'Chè truyền thống', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' },
      { id: 'm1-11', name: 'Bánh cuốn thịt', price: 45000, category: 'food', description: 'Bánh cuốn nóng', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' },
      { id: 'm1-12', name: 'Gỏi cuốn tôm', price: 40000, category: 'food', description: '4 cuốn tươi', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
      { id: 'm1-13', name: 'Hủ tiếu Nam Vang', price: 55000, category: 'food', description: 'Hủ tiếu đặc biệt', imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400' }
    ]
  },
  {
    id: '2',
    name: 'Quán Ăn Gia Đình',
    description: 'Món ăn gia đình đậm đà, giá cả phải chăng',
    priceRange: 80000,
    maxCapacity: 25,
    dishes: ['Cơm rang', 'Cơm tấm', 'Cơm gà', 'Canh chua', 'Canh chua cá', 'Thịt kho', 'Rau xào', 'Gà nướng'],
    amenities: ['Wifi', 'Không gian yên tĩnh'],
    rating: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    address: '12 Nguyễn Thái Học, Ba Đình, Hà Nội',
    experiences: [
      {
        id: 'e6',
        restaurantId: '2',
        visitTime: '12:00-14:00',
        crowdLevel: 'normal',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-04-15',
        userContext: { budget: 80000, numberOfPeople: 3, amenities: ['Wifi'] }
      },
      {
        id: 'e7',
        restaurantId: '2',
        visitTime: '18:00-20:00',
        crowdLevel: 'crowded',
        waitTime: 'normal',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-04-14',
        userContext: { budget: 75000, numberOfPeople: 4, amenities: ['Không gian yên tĩnh'] }
      },
      {
        id: 'e8',
        restaurantId: '2',
        visitTime: '12:00-14:00',
        crowdLevel: 'normal',
        waitTime: 'short',
        priceAccuracy: 'slightly_higher',
        amenityMatch: 'not_matched',
        date: '2026-04-13',
        userContext: { budget: 90000, numberOfPeople: 2, amenities: ['Điều hòa'] }
      }
    ],
    menu: [
      { id: 'm2-1', name: 'Cơm rang dương châu', price: 50000, category: 'food', description: 'Cơm rang hải sản', imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400', isPopular: true },
      { id: 'm2-2', name: 'Canh chua cá', price: 60000, category: 'food', description: 'Canh chua cá lóc', imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400' },
      { id: 'm2-3', name: 'Thịt kho tàu', price: 55000, category: 'food', description: 'Thịt kho trứng', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', isPopular: true },
      { id: 'm2-4', name: 'Rau muống xào', price: 30000, category: 'food', description: 'Rau muống xào tỏi', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm2-5', name: 'Gà xào sả ớt', price: 70000, category: 'food', description: 'Gà ta xào sả', imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400' },
      { id: 'm2-6', name: 'Nước mía', price: 10000, category: 'drink', description: 'Nước mía tươi', imageUrl: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400' },
      { id: 'm2-7', name: 'Trà đá', price: 5000, category: 'drink', description: 'Trà đá chanh', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 'm2-8', name: 'Cơm trắng', price: 10000, category: 'extra', description: 'Bát cơm trắng', imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400' },
      { id: 'm2-9', name: 'Chè thập cẩm', price: 20000, category: 'dessert', description: 'Chè nhiều màu', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' },
      { id: 'm2-10', name: 'Cơm tấm sườn bì', price: 55000, category: 'food', description: 'Cơm tấm đầy đủ', imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400', isPopular: true },
      { id: 'm2-11', name: 'Cơm gà xối mỡ', price: 60000, category: 'food', description: 'Cơm gà Hải Nam', imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400' },
      { id: 'm2-12', name: 'Canh chua cá bông lau', price: 65000, category: 'food', description: 'Canh chua miền Tây', imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400' }
    ]
  },
  {
    id: '3',
    name: 'Lẩu Thái Ngon',
    description: 'Lẩu Thái chuẩn vị, không gian hiện đại',
    priceRange: 200000,
    maxCapacity: 60,
    dishes: ['Lẩu Thái', 'Lẩu hải sản', 'Lẩu bò', 'Nướng Thái', 'Gỏi cuốn', 'Gỏi đu đủ', 'Pad Thái'],
    amenities: ['Điều hòa', 'Wifi', 'Bãi đỗ xe', 'Phòng riêng'],
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    address: '88 Láng Hạ, Đống Đa, Hà Nội',
    experiences: [
      {
        id: 'e9',
        restaurantId: '3',
        visitTime: '18:00-20:00',
        crowdLevel: 'very_crowded',
        waitTime: 'long',
        priceAccuracy: 'slightly_higher',
        amenityMatch: 'matched',
        date: '2026-04-15',
        userContext: { budget: 200000, numberOfPeople: 6, amenities: ['Điều hòa', 'Wifi'] }
      },
      {
        id: 'e10',
        restaurantId: '3',
        visitTime: '18:00-20:00',
        crowdLevel: 'crowded',
        waitTime: 'normal',
        priceAccuracy: 'much_higher',
        amenityMatch: 'matched',
        date: '2026-04-14',
        userContext: { budget: 180000, numberOfPeople: 4, amenities: ['Bãi đỗ xe'] }
      },
      {
        id: 'e11',
        restaurantId: '3',
        visitTime: '12:00-14:00',
        crowdLevel: 'normal',
        waitTime: 'short',
        priceAccuracy: 'slightly_higher',
        amenityMatch: 'not_matched',
        date: '2026-04-13',
        userContext: { budget: 220000, numberOfPeople: 2, amenities: ['Phòng riêng'] }
      },
      {
        id: 'e12',
        restaurantId: '3',
        visitTime: '18:00-20:00',
        crowdLevel: 'very_crowded',
        waitTime: 'long',
        priceAccuracy: 'slightly_higher',
        amenityMatch: 'matched',
        date: '2026-04-12',
        userContext: { budget: 195000, numberOfPeople: 5, amenities: ['Điều hòa', 'Bãi đỗ xe'] }
      }
    ],
    menu: [
      { id: 'm3-1', name: 'Lẩu Thái tôm', price: 250000, category: 'food', description: 'Lẩu Thái hải sản', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', isPopular: true },
      { id: 'm3-2', name: 'Lẩu Thái gà', price: 220000, category: 'food', description: 'Lẩu Thái gà ngon', imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400', isPopular: true },
      { id: 'm3-3', name: 'Nướng sườn Thái', price: 180000, category: 'food', description: 'Sườn heo nướng', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
      { id: 'm3-4', name: 'Gỏi cuốn', price: 40000, category: 'food', description: '5 cuốn tươi', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
      { id: 'm3-5', name: 'Cơm lam', price: 50000, category: 'food', description: 'Cơm lam truyền thống', imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400' },
      { id: 'm3-6', name: 'Nước dừa', price: 25000, category: 'drink', description: 'Nước dừa tươi', imageUrl: 'https://images.unsplash.com/photo-1585385872665-a40d33c88d46?w=400' },
      { id: 'm3-7', name: 'Trà Thái', price: 20000, category: 'drink', description: 'Trà Thái truyền thống', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 'm3-8', name: 'Bia Tiger', price: 25000, category: 'drink', description: 'Bia Tiger lon', imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400' },
      { id: 'm3-9', name: 'Rau nướng', price: 60000, category: 'extra', description: 'Rau củ nướng', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm3-10', name: 'Chè bưởi', price: 30000, category: 'dessert', description: 'Chè bưởi Thái', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' },
      { id: 'm3-11', name: 'Lẩu bò Thái', price: 280000, category: 'food', description: 'Lẩu bò cay', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' },
      { id: 'm3-12', name: 'Pad Thái tôm', price: 95000, category: 'food', description: 'Pad Thái chuẩn vị', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400', isPopular: true },
      { id: 'm3-13', name: 'Gỏi đu đủ', price: 55000, category: 'food', description: 'Som tam cay', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm3-14', name: 'Tom yum hải sản', price: 120000, category: 'food', description: 'Súp Thái chua cay', imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400' }
    ]
  },
  {
    id: '4',
    name: 'Bún Đậu Mắm Tôm 36',
    description: 'Bún đậu mắm tôm truyền thống',
    priceRange: 70000,
    maxCapacity: 20,
    dishes: ['Bún đậu', 'Bún riêu', 'Bún thịt nướng', 'Nem chua rán', 'Nem rán', 'Chả cốm', 'Giò', 'Bánh cuốn'],
    amenities: ['Wifi'],
    rating: 4.0,
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    address: '36 Hàng Tre, Hoàn Kiếm, Hà Nội',
    experiences: [
      {
        id: 'e13',
        restaurantId: '4',
        visitTime: '12:00-14:00',
        crowdLevel: 'crowded',
        waitTime: 'normal',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-04-15',
        userContext: { budget: 70000, numberOfPeople: 3, amenities: ['Wifi'] }
      },
      {
        id: 'e14',
        restaurantId: '4',
        visitTime: '18:00-20:00',
        crowdLevel: 'normal',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'not_matched',
        date: '2026-04-14',
        userContext: { budget: 65000, numberOfPeople: 2, amenities: ['Điều hòa'] }
      }
    ],
    menu: [
      { id: 'm4-1', name: 'Bún đậu mắm tôm', price: 50000, category: 'food', description: 'Bún đậu đầy đủ', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400', isPopular: true },
      { id: 'm4-2', name: 'Nem chua rán', price: 30000, category: 'food', description: '10 que nem chua rán', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400', isPopular: true },
      { id: 'm4-3', name: 'Chả cốm', price: 40000, category: 'food', description: 'Chả cốm Hà Nội', imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400' },
      { id: 'm4-4', name: 'Giò lụa', price: 35000, category: 'food', description: 'Giò lụa truyền thống', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' },
      { id: 'm4-5', name: 'Bún riêu', price: 45000, category: 'food', description: 'Bún riêu cua', imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400' },
      { id: 'm4-6', name: 'Trà đá', price: 5000, category: 'drink', description: 'Trà đá', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 'm4-7', name: 'Nước mía', price: 10000, category: 'drink', description: 'Nước mía tươi', imageUrl: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400' },
      { id: 'm4-8', name: 'Mắm tôm thêm', price: 10000, category: 'extra', description: 'Chén mắm tôm', imageUrl: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400' },
      { id: 'm4-9', name: 'Chè đậu đỏ', price: 15000, category: 'dessert', description: 'Chè đậu đỏ nóng', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' },
      { id: 'm4-10', name: 'Bún thịt nướng', price: 50000, category: 'food', description: 'Bún thịt nướng chả', imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400' },
      { id: 'm4-11', name: 'Nem rán Hà Nội', price: 35000, category: 'food', description: '8 miếng nem rán', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
      { id: 'm4-12', name: 'Bánh cuốn chả', price: 40000, category: 'food', description: 'Bánh cuốn nóng', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' }
    ]
  },
  {
    id: '5',
    name: 'BBQ Garden Premium',
    description: 'Nướng Hàn Quốc cao cấp, buffet thịt tươi',
    priceRange: 300000,
    maxCapacity: 80,
    dishes: ['Nướng Hàn Quốc', 'Nướng BBQ', 'Lẩu Hàn Quốc', 'Kimbap', 'Tokbokki', 'Mì xào', 'Dim sum', 'Salad'],
    amenities: ['Điều hòa', 'Wifi', 'Bãi đỗ xe', 'Phòng riêng', 'Không gian yên tĩnh'],
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800',
    address: '25 Trần Duy Hưng, Cầu Giấy, Hà Nội',
    experiences: [
      {
        id: 'e15',
        restaurantId: '5',
        visitTime: '18:00-20:00',
        crowdLevel: 'crowded',
        waitTime: 'normal',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-04-15',
        userContext: { budget: 300000, numberOfPeople: 4, amenities: ['Điều hòa', 'Wifi', 'Bãi đỗ xe'] }
      },
      {
        id: 'e16',
        restaurantId: '5',
        visitTime: '12:00-14:00',
        crowdLevel: 'normal',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-04-14',
        userContext: { budget: 280000, numberOfPeople: 3, amenities: ['Không gian yên tĩnh'] }
      },
      {
        id: 'e17',
        restaurantId: '5',
        visitTime: '18:00-20:00',
        crowdLevel: 'crowded',
        waitTime: 'normal',
        priceAccuracy: 'slightly_higher',
        amenityMatch: 'matched',
        date: '2026-04-13',
        userContext: { budget: 320000, numberOfPeople: 6, amenities: ['Phòng riêng', 'Điều hòa'] }
      }
    ],
    menu: [
      { id: 'm5-1', name: 'Buffet nướng Hàn Quốc', price: 350000, category: 'food', description: 'Buffet thịt tươi', imageUrl: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400', isPopular: true },
      { id: 'm5-2', name: 'Lẩu Hàn Quốc', price: 300000, category: 'food', description: 'Lẩu Kim chi', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', isPopular: true },
      { id: 'm5-3', name: 'Kimbap', price: 80000, category: 'food', description: 'Kimbap truyền thống', imageUrl: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400' },
      { id: 'm5-4', name: 'Tokbokki', price: 90000, category: 'food', description: 'Bánh gạo cay', imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400' },
      { id: 'm5-5', name: 'Gà rán Hàn Quốc', price: 180000, category: 'food', description: 'Gà rán sốt cay', imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400' },
      { id: 'm5-6', name: 'Trà gạo rang', price: 15000, category: 'drink', description: 'Trá gạo Hàn Quốc', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 'm5-7', name: 'Soju', price: 150000, category: 'drink', description: 'Soju truyền thống', imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400' },
      { id: 'm5-8', name: 'Kimchi', price: 40000, category: 'extra', description: 'Đĩa kimchi', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm5-9', name: 'Kem bingsu', price: 80000, category: 'dessert', description: 'Kem bingsu trái cây', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' },
      { id: 'm5-10', name: 'Nướng BBQ bò Mỹ', price: 320000, category: 'food', description: 'Set nướng bò', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', isPopular: true },
      { id: 'm5-11', name: 'Mì xào Hàn', price: 85000, category: 'food', description: 'Japchae', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
      { id: 'm5-12', name: 'Dim sum hải sản', price: 120000, category: 'food', description: '6 viên dim sum', imageUrl: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400' },
      { id: 'm5-13', name: 'Salad rong biển', price: 65000, category: 'food', description: 'Salad Hàn', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' }
    ]
  },
  {
    id: '6',
    name: 'Cơm Niêu Sài Gòn',
    description: 'Cơm niêu và món ăn miền Nam',
    priceRange: 120000,
    maxCapacity: 35,
    dishes: ['Cơm niêu', 'Cơm tấm', 'Gà nướng', 'Cá kho tộ', 'Canh chua', 'Bánh xèo', 'Gỏi cuốn', 'Thịt kho'],
    amenities: ['Điều hòa', 'Wifi', 'Không gian yên tĩnh'],
    rating: 4.3,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    address: '15 Tôn Đức Thắng, Đống Đa, Hà Nội',
    experiences: [
      {
        id: 'e18',
        restaurantId: '6',
        visitTime: '12:00-14:00',
        crowdLevel: 'crowded',
        waitTime: 'normal',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-04-15',
        userContext: { budget: 120000, numberOfPeople: 4, amenities: ['Điều hòa', 'Wifi'] }
      },
      {
        id: 'e19',
        restaurantId: '6',
        visitTime: '18:00-20:00',
        crowdLevel: 'normal',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-04-14',
        userContext: { budget: 110000, numberOfPeople: 3, amenities: ['Không gian yên tĩnh'] }
      },
      {
        id: 'e20',
        restaurantId: '6',
        visitTime: '12:00-14:00',
        crowdLevel: 'crowded',
        waitTime: 'long',
        priceAccuracy: 'slightly_higher',
        amenityMatch: 'not_matched',
        date: '2026-04-13',
        userContext: { budget: 130000, numberOfPeople: 5, amenities: ['Bãi đỗ xe'] }
      }
    ],
    menu: [
      { id: 'm6-1', name: 'Cơm niêu', price: 80000, category: 'food', description: 'Cơm niêu truyền thống', imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400', isPopular: true },
      { id: 'm6-2', name: 'Gà nướng mật ong', price: 150000, category: 'food', description: 'Gà nướng nguyên con', imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400', isPopular: true },
      { id: 'm6-3', name: 'Cá kho tộ', price: 100000, category: 'food', description: 'Cá kho tộ Sài Gòn', imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400' },
      { id: 'm6-4', name: 'Canh chua cá lóc', price: 90000, category: 'food', description: 'Canh chua miền Nam', imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400' },
      { id: 'm6-5', name: 'Gỏi cuốn tôm thịt', price: 50000, category: 'food', description: '5 cuốn tươi', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
      { id: 'm6-6', name: 'Nước chanh muối', price: 20000, category: 'drink', description: 'Chanh muối tươi', imageUrl: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe4eab?w=400' },
      { id: 'm6-7', name: 'Nước mía đá me', price: 15000, category: 'drink', description: 'Nước mía me', imageUrl: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400' },
      { id: 'm6-8', name: 'Dưa chua', price: 10000, category: 'extra', description: 'Dưa chua miền Nam', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm6-9', name: 'Chè thái', price: 25000, category: 'dessert', description: 'Chè thái trái cây', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' },
      { id: 'm6-10', name: 'Cơm tấm đặc biệt', price: 65000, category: 'food', description: 'Sườn bì chả', imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400', isPopular: true },
      { id: 'm6-11', name: 'Bánh xèo miền Tây', price: 70000, category: 'food', description: 'Bánh xèo giòn', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
      { id: 'm6-12', name: 'Thịt kho trứng', price: 75000, category: 'food', description: 'Thịt kho tộ', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' }
    ]
  },
  {
    id: '7',
    name: 'Bún Bò Huế O Xuân',
    description: 'Bún bò Huế đậm vị, nước dùng ninh kỹ',
    priceRange: 90000,
    maxCapacity: 30,
    dishes: ['Bún bò Huế', 'Bún riêu', 'Bún thịt nướng', 'Nem rán', 'Chả cá', 'Hủ tiếu'],
    amenities: ['Wifi', 'Không gian yên tĩnh'],
    rating: 4.4,
    imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800',
    address: '22 Lò Đúc, Hai Bà Trưng, Hà Nội',
    experiences: [
      { id: 'e21', restaurantId: '7', visitTime: '12:00-14:00', crowdLevel: 'crowded', waitTime: 'normal', priceAccuracy: 'accurate', amenityMatch: 'matched', date: '2026-04-15', userContext: { budget: 90000, numberOfPeople: 2, amenities: ['Wifi'] } },
      { id: 'e22', restaurantId: '7', visitTime: '18:00-20:00', crowdLevel: 'very_crowded', waitTime: 'long', priceAccuracy: 'accurate', amenityMatch: 'matched', date: '2026-04-14', userContext: { budget: 85000, numberOfPeople: 4, amenities: ['Không gian yên tĩnh'] } }
    ],
    menu: [
      { id: 'm7-1', name: 'Bún bò Huế đặc biệt', price: 65000, category: 'food', description: 'Bún bò đầy đủ', imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400', isPopular: true },
      { id: 'm7-2', name: 'Bún riêu cua', price: 55000, category: 'food', description: 'Bún riêu Huế', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
      { id: 'm7-3', name: 'Bún thịt nướng', price: 50000, category: 'food', description: 'Bún thịt nướng chả', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' },
      { id: 'm7-4', name: 'Nem lụi Huế', price: 45000, category: 'food', description: '5 que nem lụi', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
      { id: 'm7-5', name: 'Chả cá Huế', price: 60000, category: 'food', description: 'Chả cá chiên', imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400' },
      { id: 'm7-6', name: 'Hủ tiếu bò', price: 55000, category: 'food', description: 'Hủ tiếu Nam Vang', imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400' },
      { id: 'm7-7', name: 'Trà đá', price: 5000, category: 'drink', description: 'Trà đá', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 'm7-8', name: 'Nước mía', price: 12000, category: 'drink', description: 'Nước mía tươi', imageUrl: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400' },
      { id: 'm7-9', name: 'Rau thêm', price: 8000, category: 'extra', description: 'Rau sống thêm', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm7-10', name: 'Chè đậu xanh', price: 18000, category: 'dessert', description: 'Chè nóng', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '8',
    name: 'Lẩu Nấm Thiên Nhiên',
    description: 'Lẩu nấm thanh đạm, phù hợp ăn chay và healthy',
    priceRange: 180000,
    maxCapacity: 50,
    dishes: ['Lẩu nấm', 'Lẩu bò', 'Lẩu hải sản', 'Rau xào', 'Gỏi cuốn', 'Salad'],
    amenities: ['Điều hòa', 'Wifi', 'Bãi đỗ xe', 'Không gian yên tĩnh'],
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800',
    address: '5 Hoàng Cầu, Đống Đa, Hà Nội',
    experiences: [
      { id: 'e23', restaurantId: '8', visitTime: '18:00-20:00', crowdLevel: 'normal', waitTime: 'short', priceAccuracy: 'accurate', amenityMatch: 'matched', date: '2026-04-15', userContext: { budget: 180000, numberOfPeople: 4, amenities: ['Điều hòa', 'Wifi'] } },
      { id: 'e24', restaurantId: '8', visitTime: '12:00-14:00', crowdLevel: 'crowded', waitTime: 'normal', priceAccuracy: 'slightly_higher', amenityMatch: 'matched', date: '2026-04-13', userContext: { budget: 170000, numberOfPeople: 6, amenities: ['Bãi đỗ xe'] } }
    ],
    menu: [
      { id: 'm8-1', name: 'Lẩu nấm thập cẩm', price: 220000, category: 'food', description: '5 loại nấm', imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', isPopular: true },
      { id: 'm8-2', name: 'Lẩu bò nấm', price: 280000, category: 'food', description: 'Lẩu bò nấm', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', isPopular: true },
      { id: 'm8-3', name: 'Lẩu hải sản nấm', price: 320000, category: 'food', description: 'Tôm cua nấm', imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400' },
      { id: 'm8-4', name: 'Rau xào thập cẩm', price: 55000, category: 'food', description: 'Rau củ xào', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm8-5', name: 'Gỏi cuốn chay', price: 45000, category: 'food', description: '4 cuốn chay', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
      { id: 'm8-6', name: 'Salad nấm', price: 65000, category: 'food', description: 'Salad healthy', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm8-7', name: 'Trà atiso', price: 25000, category: 'drink', description: 'Trà thanh nhiệt', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 'm8-8', name: 'Nước ép dưa hấu', price: 30000, category: 'drink', description: 'Ép tươi', imageUrl: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe4eab?w=400' },
      { id: 'm8-9', name: 'Mì nấm', price: 40000, category: 'extra', description: 'Mì thêm', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
      { id: 'm8-10', name: 'Chè sen long nhãn', price: 28000, category: 'dessert', description: 'Chè mát', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '9',
    name: 'Tokyo Sushi & Ramen',
    description: 'Sushi tươi sống, ramen và dim sum Nhật',
    priceRange: 250000,
    maxCapacity: 45,
    dishes: ['Sushi', 'Dim sum', 'Mì xào', 'Gỏi cuốn', 'Salad', 'Kem'],
    amenities: ['Điều hòa', 'Wifi', 'Phòng riêng'],
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    address: '102 Kim Mã, Ba Đình, Hà Nội',
    experiences: [
      { id: 'e25', restaurantId: '9', visitTime: '18:00-20:00', crowdLevel: 'crowded', waitTime: 'normal', priceAccuracy: 'accurate', amenityMatch: 'matched', date: '2026-04-15', userContext: { budget: 250000, numberOfPeople: 2, amenities: ['Điều hòa'] } },
      { id: 'e26', restaurantId: '9', visitTime: '12:00-14:00', crowdLevel: 'normal', waitTime: 'short', priceAccuracy: 'slightly_higher', amenityMatch: 'matched', date: '2026-04-12', userContext: { budget: 240000, numberOfPeople: 4, amenities: ['Wifi', 'Phòng riêng'] } }
    ],
    menu: [
      { id: 'm9-1', name: 'Set sushi 12 miếng', price: 280000, category: 'food', description: 'Sushi tươi', imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400', isPopular: true },
      { id: 'm9-2', name: 'Sashimi cá hồi', price: 320000, category: 'food', description: 'Sashimi premium', imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400', isPopular: true },
      { id: 'm9-3', name: 'Dim sum hấp', price: 150000, category: 'food', description: '8 viên dim sum', imageUrl: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400' },
      { id: 'm9-4', name: 'Mì xào hải sản', price: 120000, category: 'food', description: 'Yakisoba', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
      { id: 'm9-5', name: 'Gỏi cuốn cá hồi', price: 85000, category: 'food', description: '4 cuốn', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
      { id: 'm9-6', name: 'Salad rong biển', price: 70000, category: 'food', description: 'Wakame salad', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm9-7', name: 'Trà xanh', price: 20000, category: 'drink', description: 'Trà Nhật', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 'm9-8', name: 'Sake', price: 180000, category: 'drink', description: 'Sake ấm', imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400' },
      { id: 'm9-9', name: 'Wasabi thêm', price: 15000, category: 'extra', description: 'Wasabi', imageUrl: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400' },
      { id: 'm9-10', name: 'Kem mochi', price: 55000, category: 'dessert', description: '3 viên mochi', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '10',
    name: 'Italia Piazza',
    description: 'Ẩm thực Ý — pizza lò đốt, pasta tươi',
    priceRange: 220000,
    maxCapacity: 55,
    dishes: ['Pizza', 'Pasta', 'Salad', 'Steak', 'Kem', 'Bánh flan'],
    amenities: ['Điều hòa', 'Wifi', 'Bãi đỗ xe', 'Phòng riêng'],
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    address: '8 Phan Chu Trinh, Hoàn Kiếm, Hà Nội',
    experiences: [
      { id: 'e27', restaurantId: '10', visitTime: '18:00-20:00', crowdLevel: 'crowded', waitTime: 'normal', priceAccuracy: 'accurate', amenityMatch: 'matched', date: '2026-04-15', userContext: { budget: 220000, numberOfPeople: 4, amenities: ['Điều hòa', 'Bãi đỗ xe'] } },
      { id: 'e28', restaurantId: '10', visitTime: '20:00-22:00', crowdLevel: 'normal', waitTime: 'short', priceAccuracy: 'slightly_higher', amenityMatch: 'matched', date: '2026-04-14', userContext: { budget: 200000, numberOfPeople: 2, amenities: ['Wifi'] } }
    ],
    menu: [
      { id: 'm10-1', name: 'Pizza Margherita', price: 180000, category: 'food', description: 'Pizza Ý cổ điển', imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400', isPopular: true },
      { id: 'm10-2', name: 'Pizza hải sản', price: 220000, category: 'food', description: 'Pizza tôm mực', imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400', isPopular: true },
      { id: 'm10-3', name: 'Pasta carbonara', price: 165000, category: 'food', description: 'Mì Ý kem', imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400' },
      { id: 'm10-4', name: 'Pasta bò bằm', price: 175000, category: 'food', description: 'Bolognese', imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400' },
      { id: 'm10-5', name: 'Salad Caesar', price: 95000, category: 'food', description: 'Salad gà', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm10-6', name: 'Steak bò Úc', price: 380000, category: 'food', description: '200g steak', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
      { id: 'm10-7', name: 'Vang đỏ ly', price: 120000, category: 'drink', description: 'House wine', imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400' },
      { id: 'm10-8', name: 'Nước suối', price: 15000, category: 'drink', description: '500ml', imageUrl: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe4eab?w=400' },
      { id: 'm10-9', name: 'Bánh mì garlic', price: 35000, category: 'extra', description: 'Garlic bread', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' },
      { id: 'm10-10', name: 'Tiramisu', price: 75000, category: 'dessert', description: 'Bánh flan Ý', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' },
      { id: 'm10-11', name: 'Kem Ý', price: 65000, category: 'dessert', description: 'Gelato 2 viên', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '11',
    name: 'Burger & Grill Station',
    description: 'Burger Mỹ, steak và BBQ ngoài trời',
    priceRange: 190000,
    maxCapacity: 70,
    dishes: ['Burger', 'Steak', 'Nướng BBQ', 'Salad', 'Kem', 'Pizza'],
    amenities: ['Điều hòa', 'Wifi', 'Bãi đỗ xe'],
    rating: 4.4,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    address: '67 Xã Đàn, Đống Đa, Hà Nội',
    experiences: [
      { id: 'e29', restaurantId: '11', visitTime: '18:00-20:00', crowdLevel: 'very_crowded', waitTime: 'long', priceAccuracy: 'accurate', amenityMatch: 'matched', date: '2026-04-15', userContext: { budget: 190000, numberOfPeople: 5, amenities: ['Bãi đỗ xe'] } },
      { id: 'e30', restaurantId: '11', visitTime: '12:00-14:00', crowdLevel: 'normal', waitTime: 'short', priceAccuracy: 'accurate', amenityMatch: 'not_matched', date: '2026-04-13', userContext: { budget: 200000, numberOfPeople: 3, amenities: ['Phòng riêng'] } }
    ],
    menu: [
      { id: 'm11-1', name: 'Classic Cheese Burger', price: 120000, category: 'food', description: 'Burger bò Mỹ', imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', isPopular: true },
      { id: 'm11-2', name: 'BBQ Bacon Burger', price: 145000, category: 'food', description: 'Burger bacon', imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', isPopular: true },
      { id: 'm11-3', name: 'Steak ribeye', price: 350000, category: 'food', description: '300g ribeye', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
      { id: 'm11-4', name: 'Set nướng BBQ', price: 280000, category: 'food', description: 'Sườn + xúc xích', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
      { id: 'm11-5', name: 'Salad Caesar', price: 85000, category: 'food', description: 'Salad gà', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm11-6', name: 'Pizza pepperoni', price: 195000, category: 'food', description: 'Pizza Mỹ', imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' },
      { id: 'm11-7', name: 'Coca-Cola', price: 20000, category: 'drink', description: 'Lon 330ml', imageUrl: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe4eab?w=400' },
      { id: 'm11-8', name: 'Bia craft', price: 65000, category: 'drink', description: 'Bia thủ công', imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400' },
      { id: 'm11-9', name: 'Khoai tây chiên', price: 45000, category: 'extra', description: 'Large fries', imageUrl: 'https://images.unsplash.com/photo-1573080496216-bf94097f1d40?w=400' },
      { id: 'm11-10', name: 'Kem vani', price: 40000, category: 'dessert', description: 'Soft serve', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '12',
    name: 'Cơm Tấm Cali Sài Gòn',
    description: 'Cơm tấm Sài Gòn chuẩn vị, suất ăn trưa đông khách',
    priceRange: 95000,
    maxCapacity: 40,
    dishes: ['Cơm tấm', 'Cơm gà', 'Thịt kho', 'Canh chua', 'Gỏi đu đủ', 'Chả cốm'],
    amenities: ['Wifi', 'Không gian yên tĩnh', 'Bãi đỗ xe'],
    rating: 4.3,
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800',
    address: '33 Nguyễn Văn Huyên, Cầu Giấy, Hà Nội',
    experiences: [
      { id: 'e31', restaurantId: '12', visitTime: '12:00-14:00', crowdLevel: 'very_crowded', waitTime: 'long', priceAccuracy: 'accurate', amenityMatch: 'matched', date: '2026-04-15', userContext: { budget: 95000, numberOfPeople: 3, amenities: ['Wifi'] } },
      { id: 'e32', restaurantId: '12', visitTime: '18:00-20:00', crowdLevel: 'normal', waitTime: 'short', priceAccuracy: 'accurate', amenityMatch: 'matched', date: '2026-04-14', userContext: { budget: 100000, numberOfPeople: 2, amenities: ['Bãi đỗ xe'] } }
    ],
    menu: [
      { id: 'm12-1', name: 'Cơm tấm sườn bì chả', price: 65000, category: 'food', description: 'Suất đặc biệt', imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400', isPopular: true },
      { id: 'm12-2', name: 'Cơm tấm sườn nướng', price: 55000, category: 'food', description: 'Sườn nướng mật ong', imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400', isPopular: true },
      { id: 'm12-3', name: 'Cơm gà roti', price: 60000, category: 'food', description: 'Cơm gà Sài Gòn', imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400' },
      { id: 'm12-4', name: 'Thịt kho tàu', price: 55000, category: 'food', description: 'Thịt kho trứng', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' },
      { id: 'm12-5', name: 'Canh chua cá', price: 50000, category: 'food', description: 'Canh chua', imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400' },
      { id: 'm12-6', name: 'Gỏi đu đủ khô bò', price: 45000, category: 'food', description: 'Gỏi đu đủ', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm12-7', name: 'Chả trứng', price: 15000, category: 'food', description: 'Chả cốm trứng', imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400' },
      { id: 'm12-8', name: 'Trà đá', price: 5000, category: 'drink', description: 'Trà đá', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 'm12-9', name: 'Nước sấu', price: 15000, category: 'drink', description: 'Nước sấu riêng', imageUrl: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe4eab?w=400' },
      { id: 'm12-10', name: 'Chè bưởi', price: 20000, category: 'dessert', description: 'Chè mát', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '13',
    name: 'Bánh Xèo Cần Thơ',
    description: 'Bánh xèo giòn rụm, đặc sản miền Tây',
    priceRange: 85000,
    maxCapacity: 28,
    dishes: ['Bánh xèo', 'Gỏi cuốn', 'Bún thịt nướng', 'Nem rán', 'Gỏi đu đủ', 'Canh chua'],
    amenities: ['Wifi'],
    rating: 4.1,
    imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
    address: '9 Phạm Ngũ Lão, Hoàn Kiếm, Hà Nội',
    experiences: [
      { id: 'e33', restaurantId: '13', visitTime: '12:00-14:00', crowdLevel: 'crowded', waitTime: 'normal', priceAccuracy: 'accurate', amenityMatch: 'matched', date: '2026-04-15', userContext: { budget: 85000, numberOfPeople: 4, amenities: ['Wifi'] } },
      { id: 'e34', restaurantId: '13', visitTime: '18:00-20:00', crowdLevel: 'normal', waitTime: 'short', priceAccuracy: 'cheaper', amenityMatch: 'matched', date: '2026-04-11', userContext: { budget: 90000, numberOfPeople: 2, amenities: [] } }
    ],
    menu: [
      { id: 'm13-1', name: 'Bánh xèo tôm thịt', price: 55000, category: 'food', description: 'Bánh xèo lớn', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400', isPopular: true },
      { id: 'm13-2', name: 'Bánh xèo chay', price: 45000, category: 'food', description: 'Bánh xèo rau', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
      { id: 'm13-3', name: 'Gỏi cuốn tôm thịt', price: 40000, category: 'food', description: '5 cuốn', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
      { id: 'm13-4', name: 'Bún thịt nướng', price: 50000, category: 'food', description: 'Bún thịt nướng', imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400', isPopular: true },
      { id: 'm13-5', name: 'Nem rán', price: 35000, category: 'food', description: '8 miếng', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
      { id: 'm13-6', name: 'Gỏi đu đủ', price: 35000, category: 'food', description: 'Gỏi đu đủ tôm khô', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm13-7', name: 'Canh chua cá', price: 55000, category: 'food', description: 'Canh chua miền Tây', imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400' },
      { id: 'm13-8', name: 'Trà đá', price: 5000, category: 'drink', description: 'Trà đá', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 'm13-9', name: 'Rau sống', price: 10000, category: 'extra', description: 'Rau ăn kèm', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 'm13-10', name: 'Chè đậu xanh', price: 15000, category: 'dessert', description: 'Chè nóng', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '14',
    name: 'Mì Quảng & Hội An',
    description: 'Mì Quảng, bánh tráng và đặc sản miền Trung',
    priceRange: 75000,
    maxCapacity: 32,
    dishes: ['Mì Quảng', 'Bánh xèo', 'Gỏi cuốn', 'Nem rán', 'Bánh canh', 'Hủ tiếu'],
    amenities: ['Wifi', 'Không gian yên tĩnh'],
    rating: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800',
    address: '41 Đinh Tiên Hoàng, Hoàn Kiếm, Hà Nội',
    experiences: [
      { id: 'e35', restaurantId: '14', visitTime: '12:00-14:00', crowdLevel: 'crowded', waitTime: 'normal', priceAccuracy: 'accurate', amenityMatch: 'matched', date: '2026-04-15', userContext: { budget: 75000, numberOfPeople: 3, amenities: ['Wifi'] } },
      { id: 'e36', restaurantId: '14', visitTime: '18:00-20:00', crowdLevel: 'normal', waitTime: 'short', priceAccuracy: 'accurate', amenityMatch: 'matched', date: '2026-04-13', userContext: { budget: 80000, numberOfPeople: 2, amenities: ['Không gian yên tĩnh'] } }
    ],
    menu: [
      { id: 'm14-1', name: 'Mì Quảng gà', price: 50000, category: 'food', description: 'Mì Quảng truyền thống', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400', isPopular: true },
      { id: 'm14-2', name: 'Mì Quảng tôm thịt', price: 55000, category: 'food', description: 'Mì Quảng đặc biệt', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400', isPopular: true },
      { id: 'm14-3', name: 'Bánh xèo Quảng Nam', price: 50000, category: 'food', description: 'Bánh xèo nhỏ', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
      { id: 'm14-4', name: 'Gỏi cuốn', price: 35000, category: 'food', description: '4 cuốn', imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400' },
      { id: 'm14-5', name: 'Nem lụi', price: 40000, category: 'food', description: '5 que nem lụi', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
      { id: 'm14-6', name: 'Bánh canh ghẹ', price: 60000, category: 'food', description: 'Bánh canh', imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400' },
      { id: 'm14-7', name: 'Hủ tiếu Nam Vang', price: 50000, category: 'food', description: 'Hủ tiếu', imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400' },
      { id: 'm14-8', name: 'Trà đá', price: 5000, category: 'drink', description: 'Trà đá', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 'm14-9', name: 'Bánh tráng thêm', price: 8000, category: 'extra', description: 'Bánh tráng', imageUrl: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400' },
      { id: 'm14-10', name: 'Chè bắp', price: 18000, category: 'dessert', description: 'Chè bắp Quảng', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  }
];

export interface DishOptionGroup {
  id: string;
  label: string;
  dishes: string[];
}

export const dishOptionGroups: DishOptionGroup[] = [
  {
    id: 'noodles',
    label: 'Phở & bún',
    dishes: [
      'Phở',
      'Phở bò',
      'Phở gà',
      'Bún chả',
      'Bún bò Huế',
      'Bún riêu',
      'Bún thịt nướng',
      'Bún đậu',
      'Mì Quảng',
      'Hủ tiếu',
      'Bánh canh',
    ],
  },
  {
    id: 'rice',
    label: 'Cơm & món mặn',
    dishes: [
      'Cơm rang',
      'Cơm niêu',
      'Cơm tấm',
      'Cơm gà',
      'Thịt kho',
      'Cá kho tộ',
      'Gà nướng',
      'Rau xào',
      'Canh chua',
      'Canh chua cá',
    ],
  },
  {
    id: 'hotpot-grill',
    label: 'Lẩu & nướng',
    dishes: [
      'Lẩu Thái',
      'Lẩu hải sản',
      'Lẩu Hàn Quốc',
      'Lẩu bò',
      'Nướng Thái',
      'Nướng Hàn Quốc',
      'Nướng BBQ',
      'Lẩu nấm',
    ],
  },
  {
    id: 'snacks',
    label: 'Khai vị & gỏi',
    dishes: [
      'Nem rán',
      'Nem chua rán',
      'Gỏi cuốn',
      'Gỏi đu đủ',
      'Chả cá',
      'Chả cốm',
      'Giò',
      'Bánh xèo',
      'Bánh cuốn',
    ],
  },
  {
    id: 'asian',
    label: 'Món Á',
    dishes: ['Kimbap', 'Tokbokki', 'Sushi', 'Dim sum', 'Mì xào', 'Pad Thái'],
  },
  {
    id: 'western-dessert',
    label: 'Tây & tráng miệng',
    dishes: ['Pizza', 'Pasta', 'Burger', 'Steak', 'Salad', 'Chè', 'Bánh flan', 'Kem'],
  },
];

export const dishOptions = dishOptionGroups.flatMap((group) => group.dishes);

export const amenityOptions = [
  'Điều hòa',
  'Wifi',
  'Không gian yên tĩnh',
  'Bãi đỗ xe',
  'Phòng riêng'
];
