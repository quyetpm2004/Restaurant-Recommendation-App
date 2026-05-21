import { Restaurant, Experience, MenuItem } from '../types';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Nhà Hàng Phố Cổ',
    description: 'Không gian truyền thống, đặc sản Hà Nội',
    priceRange: 150000,
    maxCapacity: 40,
    dishes: ['Phở', 'Bún chả', 'Nem rán', 'Chả cá'],
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
      { id: 'm1-10', name: 'Chè ba màu', price: 25000, category: 'dessert', description: 'Chè truyền thống', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '2',
    name: 'Quán Ăn Gia Đình',
    description: 'Món ăn gia đình đậm đà, giá cả phải chăng',
    priceRange: 80000,
    maxCapacity: 25,
    dishes: ['Cơm rang', 'Canh chua', 'Thịt kho', 'Rau xào'],
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
      { id: 'm2-9', name: 'Chè thập cẩm', price: 20000, category: 'dessert', description: 'Chè nhiều màu', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '3',
    name: 'Lẩu Thái Ngon',
    description: 'Lẩu Thái chuẩn vị, không gian hiện đại',
    priceRange: 200000,
    maxCapacity: 60,
    dishes: ['Lẩu Thái', 'Lẩu hải sản', 'Nướng Thái', 'Gỏi cuốn'],
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
      { id: 'm3-10', name: 'Chè bưởi', price: 30000, category: 'dessert', description: 'Chè bưởi Thái', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '4',
    name: 'Bún Đậu Mắm Tôm 36',
    description: 'Bún đậu mắm tôm truyền thống',
    priceRange: 70000,
    maxCapacity: 20,
    dishes: ['Bún đậu', 'Nem chua rán', 'Chả cốm', 'Giò'],
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
      { id: 'm4-9', name: 'Chè đậu đỏ', price: 15000, category: 'dessert', description: 'Chè đậu đỏ nóng', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '5',
    name: 'BBQ Garden Premium',
    description: 'Nướng Hàn Quốc cao cấp, buffet thịt tươi',
    priceRange: 300000,
    maxCapacity: 80,
    dishes: ['Nướng Hàn Quốc', 'Lẩu Hàn Quốc', 'Kimbap', 'Tokbokki'],
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
      { id: 'm5-9', name: 'Kem bingsu', price: 80000, category: 'dessert', description: 'Kem bingsu trái cây', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  },
  {
    id: '6',
    name: 'Cơm Niêu Sài Gòn',
    description: 'Cơm niêu và món ăn miền Nam',
    priceRange: 120000,
    maxCapacity: 35,
    dishes: ['Cơm niêu', 'Gà nướng', 'Cá kho tộ', 'Canh chua'],
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
      { id: 'm6-9', name: 'Chè thái', price: 25000, category: 'dessert', description: 'Chè thái trái cây', imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' }
    ]
  }
];

export const dishOptions = [
  'Phở',
  'Bún chả',
  'Cơm rang',
  'Lẩu Thái',
  'Lẩu hải sản',
  'Nướng Hàn Quốc',
  'Bún đậu',
  'Cơm niêu',
  'Nem rán',
  'Chả cá',
  'Gỏi cuốn',
  'Canh chua'
];

export const amenityOptions = [
  'Điều hòa',
  'Wifi',
  'Không gian yên tĩnh',
  'Bãi đỗ xe',
  'Phòng riêng'
];
