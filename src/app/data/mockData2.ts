import { Restaurant, Experience, MenuItem } from '../types'

export const mockRestaurants: Restaurant[] = [
  {
    id: 'ChIJmb5ht3ytNTERuHi6wJRiT-4',
    name: 'Quán Ăn Quý Mỳ Ý Và Đồ Ăn Vặt',
    description:
      'Quán ăn sinh viên quen thuộc khu Bách Khoa, chuyên mỳ Ý và đồ ăn vặt giá rẻ.',
    priceRange: 35000,
    maxCapacity: 30,
    dishes: [
      'Mỳ Ý sốt bò băm',
      'Mỳ Ý phô mai',
      'Nem chua rán',
      'Khoai tây chiên',
      'Xúc xích',
    ],
    amenities: ['Wifi', 'Gửi xe miễn phí', 'Quạt mát'],
    rating: 4.7,
    imageUrl:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800',
    address: 'P. Lê Thanh Nghị, Khu tập thể Bách Khoa, Bạch Mai, Hà Nội',
    experiences: [
      {
        id: 'e_quy_1',
        restaurantId: 'ChIJmb5ht3ytNTERuHi6wJRiT-4',
        visitTime: '11:30-13:00',
        crowdLevel: 'very_crowded',
        waitTime: 'normal',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-01',
        userContext: {
          budget: 50000,
          numberOfPeople: 2,
          amenities: ['Wifi'],
        },
      },
    ],
    menu: [
      {
        id: 'm_quy_1',
        name: 'Mỳ Ý sốt bò băm',
        price: 35000,
        category: 'food',
        description: 'Mỳ Ý truyền thống sốt cà chua thịt bò',
        imageUrl:
          'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400',
        isPopular: true,
      },
      {
        id: 'm_quy_2',
        name: 'Nem chua rán',
        price: 5000,
        category: 'food',
        description: 'Nem chua tẩm bột chiên xù',
        imageUrl:
          'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400',
        isPopular: false,
      },
    ],
  },
  {
    id: 'ChIJkTqlg3OsNTERQ25LoUYcytg',
    name: 'Cơm thố Bách Khoa',
    description:
      'Cơm thố nóng hổi, đa dạng topping, phù hợp ăn trưa và tối cho sinh viên.',
    priceRange: 45000,
    maxCapacity: 50,
    dishes: [
      'Cơm thố xá xíu',
      'Cơm thố gà nướng',
      'Cơm thố bò xào',
      'Cơm thố sườn',
      'Canh rong biển',
    ],
    amenities: ['Điều hòa', 'Wifi', 'Thanh toán thẻ', 'Bãi đỗ xe'],
    rating: 3.7,
    imageUrl:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
    address:
      '111 K2, Ng. 48 P. Tạ Quang Bửu, Khu tập thể Bách Khoa, Bạch Mai, Hà Nội',
    experiences: [
      {
        id: 'e_comtho_1',
        restaurantId: 'ChIJkTqlg3OsNTERQ25LoUYcytg',
        visitTime: '12:00-13:00',
        crowdLevel: 'crowded',
        waitTime: 'long',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-05-28',
        userContext: {
          budget: 60000,
          numberOfPeople: 4,
          amenities: ['Điều hòa'],
        },
      },
    ],
    menu: [
      {
        id: 'm_comtho_1',
        name: 'Cơm thố xá xíu',
        price: 45000,
        category: 'food',
        description: 'Cơm thố giòn với thịt lợn xá xíu đậm đà',
        imageUrl:
          'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJbe1qruOtNTERPXsnP7-8UP0',
    name: 'Ốc Mèo Mun',
    description:
      'Quán ốc nhậu đêm quen thuộc của sinh viên, giá cả phải chăng, không gian vỉa hè thoáng mát.',
    priceRange: 80000,
    maxCapacity: 80,
    dishes: [
      'Ốc luộc mắm gừng',
      'Ốc xào me',
      'Ngao hấp sả',
      'Cút lộn xào me',
      'Nem chua rán',
    ],
    amenities: [
      'Không gian ngoài trời',
      'Gửi xe miễn phí',
      'Cho phép hút thuốc',
    ],
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800',
    address: 'K6B - Bách Khoa/108 Ng. 48 P. Tạ Quang Bửu, Bạch Mai, Hà Nội',
    experiences: [
      {
        id: 'e_oc_1',
        restaurantId: 'ChIJbe1qruOtNTERPXsnP7-8UP0',
        visitTime: '20:00-22:00',
        crowdLevel: 'very_crowded',
        waitTime: 'normal',
        priceAccuracy: 'slightly_higher',
        amenityMatch: 'matched',
        date: '2026-06-05',
        userContext: {
          budget: 100000,
          numberOfPeople: 6,
          amenities: ['Không gian ngoài trời'],
        },
      },
    ],
    menu: [
      {
        id: 'm_oc_1',
        name: 'Ốc hương xào bơ tỏi',
        price: 80000,
        category: 'food',
        description: 'Ốc hương to, sốt bơ tỏi thơm ngậy béo',
        imageUrl:
          'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJvbzGXFmtNTERT_qVgbCHpY8',
    name: 'Phở Bích Thủy',
    description:
      'Quán phở bò lâu năm, nước dùng thanh ngọt tự nhiên, thịt bò tươi ngon.',
    priceRange: 40000,
    maxCapacity: 40,
    dishes: ['Phở bò tái', 'Phở bò chín', 'Phở tái nạm', 'Phở bắp bò', 'Quẩy'],
    amenities: ['Quạt mát', 'Phục vụ nhanh', 'Giao hàng'],
    rating: 4.3,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    address: 'Ô9 Nhà, A17 P. Tạ Quang Bửu, Bạch Mai, Hà Nội',
    experiences: [
      {
        id: 'e_pho_1',
        restaurantId: 'ChIJvbzGXFmtNTERT_qVgbCHpY8',
        visitTime: '07:00-08:30',
        crowdLevel: 'crowded',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-02',
        userContext: {
          budget: 45000,
          numberOfPeople: 1,
          amenities: ['Phục vụ nhanh'],
        },
      },
    ],
    menu: [
      {
        id: 'm_pho_1',
        name: 'Phở tái nạm',
        price: 45000,
        category: 'food',
        description: 'Phở bò tái nạm gầu giòn',
        imageUrl:
          'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJNcwEIgCtNTERNuRNt-dCizQ',
    name: 'Xôi Lá Bách Khoa',
    description:
      'Xôi gói lá chuối dẻo thơm, cực kỳ nổi tiếng khu Bách Khoa với nhiều loại topping.',
    priceRange: 20000,
    maxCapacity: 20,
    dishes: [
      'Xôi xéo',
      'Xôi ngô',
      'Xôi thịt kho trứng',
      'Xôi xíu mại',
      'Xôi gà xé',
    ],
    amenities: ['Takeaway', 'Giá rẻ'],
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1543826173-70651703c5a4?w=800',
    address: 'K1B P. Nguyễn Hiền, Đối diện cổng B ĐH Mở, Bạch Mai, Hà Nội',
    experiences: [
      {
        id: 'e_xoi_1',
        restaurantId: 'ChIJNcwEIgCtNTERNuRNt-dCizQ',
        visitTime: '06:30-08:00',
        crowdLevel: 'very_crowded',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-06',
        userContext: {
          budget: 20000,
          numberOfPeople: 1,
          amenities: ['Takeaway'],
        },
      },
    ],
    menu: [
      {
        id: 'm_xoi_1',
        name: 'Xôi xéo đầy đủ',
        price: 25000,
        category: 'food',
        description: 'Xôi xéo đậu xanh hành phi, chả lụa, thịt kho',
        imageUrl:
          'https://images.unsplash.com/photo-1543826173-70651703c5a4?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJV0iMG4mrNTERb8O3Io7NUDM',
    name: 'Nhà hàng Ẩm thực Vân Hồ',
    description:
      'Nhà hàng rộng rãi, phù hợp liên hoan lớp, sinh nhật với thực đơn món Việt đa dạng.',
    priceRange: 200000,
    maxCapacity: 150,
    dishes: ['Gà quay', 'Cá chép om dưa', 'Lẩu thái', 'Bê thui'],
    amenities: ['Phòng riêng', 'Điều hòa', 'Bãi đỗ xe ô tô', 'Wifi'],
    rating: 4.8,
    imageUrl:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
    address: '2B P. Hoa Lư, Lê Đại Hành, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_vanho_1',
        restaurantId: 'ChIJV0iMG4mrNTERb8O3Io7NUDM',
        visitTime: '18:00-20:00',
        crowdLevel: 'crowded',
        waitTime: 'normal',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-05-15',
        userContext: {
          budget: 250000,
          numberOfPeople: 10,
          amenities: ['Phòng riêng', 'Bãi đỗ xe ô tô'],
        },
      },
    ],
    menu: [
      {
        id: 'm_vanho_1',
        name: 'Cá chép om dưa',
        price: 250000,
        category: 'food',
        description: 'Cá chép tươi om dưa chua, ăn kèm bún',
        imageUrl:
          'https://images.unsplash.com/photo-1544025162-811114215b2e?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJnbsgetmtNTERfmBPgzdpqBs',
    name: 'Lẩu Làng Ếch',
    description: 'Chuyên các món về ếch, đặc biệt là lẩu ếch măng cay đậm đà.',
    priceRange: 150000,
    maxCapacity: 60,
    dishes: ['Lẩu ếch măng cay', 'Ếch xào sả ớt', 'Ếch rang muối', 'Ngô chiên'],
    amenities: ['Điều hòa', 'Wifi', 'Bàn ngoài trời'],
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    address: '107-K11A Nguyễn Hiền, Bách Khoa, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_ech_1',
        restaurantId: 'ChIJnbsgetmtNTERfmBPgzdpqBs',
        visitTime: '19:00-21:00',
        crowdLevel: 'very_crowded',
        waitTime: 'long',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-05-20',
        userContext: {
          budget: 150000,
          numberOfPeople: 4,
          amenities: ['Điều hòa'],
        },
      },
    ],
    menu: [
      {
        id: 'm_ech_1',
        name: 'Lẩu ếch măng cay (Nồi lớn)',
        price: 350000,
        category: 'food',
        description: 'Lẩu ếch măng cay phù hợp cho 4 người ăn',
        imageUrl:
          'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJoRmB4XWsNTER2zTd9o_vf7w',
    name: 'Cơm Ngon Gia Đình',
    description:
      'Cơm bình dân với thực đơn thay đổi theo ngày, nấu chuẩn vị cơm nhà.',
    priceRange: 35000,
    maxCapacity: 40,
    dishes: ['Thịt kho tàu', 'Cá rán', 'Đậu sốt cà chua', 'Canh rau ngót'],
    amenities: ['Wifi', 'Quạt mát', 'Trà đá miễn phí'],
    rating: 4.2,
    imageUrl:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
    address: 'Ngõ 30 P. Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_giadinh_1',
        restaurantId: 'ChIJoRmB4XWsNTER2zTd9o_vf7w',
        visitTime: '11:30-13:00',
        crowdLevel: 'crowded',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-03',
        userContext: {
          budget: 40000,
          numberOfPeople: 1,
          amenities: [],
        },
      },
    ],
    menu: [
      {
        id: 'm_giadinh_1',
        name: 'Suất cơm tự chọn 3 món',
        price: 35000,
        category: 'food',
        description: 'Chọn 3 món mặn tùy ý, kèm canh và rau',
        imageUrl:
          'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJt7hAzuutNTERultJ5Yc1uSI',
    name: 'Cơm tấm Sài Gòn Nam Phương',
    description:
      'Cơm tấm sườn bì chả chuẩn vị miền Nam ngay giữa lòng khu Bách Khoa.',
    priceRange: 50000,
    maxCapacity: 50,
    dishes: [
      'Cơm tấm sườn nướng',
      'Cơm tấm sườn bì',
      'Cơm tấm chả trứng',
      'Canh khổ qua',
    ],
    amenities: ['Điều hòa', 'Giao hàng', 'Wifi'],
    rating: 3.7,
    imageUrl:
      'https://images.unsplash.com/photo-1626804475297-4160bbfb8eb8?w=800',
    address: '111E5 P. Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_comtam_1',
        restaurantId: 'ChIJt7hAzuutNTERultJ5Yc1uSI',
        visitTime: '12:00-13:30',
        crowdLevel: 'normal',
        waitTime: 'normal',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-02',
        userContext: {
          budget: 60000,
          numberOfPeople: 2,
          amenities: ['Điều hòa'],
        },
      },
    ],
    menu: [
      {
        id: 'm_comtam_1',
        name: 'Cơm tấm sườn bì chả',
        price: 55000,
        category: 'food',
        description: 'Cơm tấm đầy đủ topping sườn nướng, bì heo và chả trứng',
        imageUrl:
          'https://images.unsplash.com/photo-1626804475297-4160bbfb8eb8?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJ57bAVKitNTERuwBKKCHtdkc',
    name: 'Cơm thố BÁCH KHOA - Trần Đại Nghĩa',
    description:
      'Cơ sở cơm thố lớn trên đường Trần Đại Nghĩa, không gian rộng rãi.',
    priceRange: 45000,
    maxCapacity: 70,
    dishes: ['Cơm thố xá xíu', 'Cơm thố gà', 'Cơm thố bò', 'Trà quất'],
    amenities: ['Điều hòa', 'Wifi', 'Bãi đỗ xe', 'Thanh toán QR'],
    rating: 3.2,
    imageUrl:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
    address: '157 Trần Đại Nghĩa, Bách Khoa, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_comtho2_1',
        restaurantId: 'ChIJ57bAVKitNTERuwBKKCHtdkc',
        visitTime: '18:00-19:00',
        crowdLevel: 'crowded',
        waitTime: 'long',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-04',
        userContext: {
          budget: 50000,
          numberOfPeople: 1,
          amenities: ['Wifi'],
        },
      },
    ],
    menu: [
      {
        id: 'm_comtho2_1',
        name: 'Cơm thố bò xào',
        price: 50000,
        category: 'food',
        description: 'Cơm thố bò xào hành tây đẫm sốt',
        imageUrl:
          'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJ7WRv5nOsNTERjgMD6UyXGA4',
    name: 'Quán Phở Long Bách Khoa',
    description:
      'Quán phở truyền thống phục vụ bữa sáng nhanh gọn cho sinh viên.',
    priceRange: 35000,
    maxCapacity: 30,
    dishes: ['Phở bò', 'Phở sốt vang', 'Mỳ xào bò'],
    amenities: ['Quạt mát', 'Gửi xe miễn phí'],
    rating: 3.8,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    address: 'Nhà K9, 105 P. Nguyễn Hiền, Bách Khoa, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_pholong_1',
        restaurantId: 'ChIJ7WRv5nOsNTERjgMD6UyXGA4',
        visitTime: '07:00-08:00',
        crowdLevel: 'crowded',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-05',
        userContext: {
          budget: 40000,
          numberOfPeople: 2,
          amenities: [],
        },
      },
    ],
    menu: [
      {
        id: 'm_pholong_1',
        name: 'Phở sốt vang',
        price: 40000,
        category: 'food',
        description: 'Phở bò sốt vang đậm đà',
        imageUrl:
          'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJgeFqyC2tNTERr-YM0-6I_DE',
    name: 'PHỞ BÒ X5',
    description: 'Phở bò chất lượng cao, nước dùng ninh xương 24h.',
    priceRange: 45000,
    maxCapacity: 40,
    dishes: ['Phở bò gầu', 'Phở bò bắp', 'Quẩy giòn', 'Trà đá'],
    amenities: ['Điều hòa', 'Chỗ để xe rộng'],
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    address: 'Đối Diện 106K1 Nguyễn Hiền, Bách Khoa, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_phox5_1',
        restaurantId: 'ChIJgeFqyC2tNTERr-YM0-6I_DE',
        visitTime: '08:00-09:00',
        crowdLevel: 'normal',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-06',
        userContext: {
          budget: 50000,
          numberOfPeople: 1,
          amenities: ['Điều hòa'],
        },
      },
    ],
    menu: [
      {
        id: 'm_phox5_1',
        name: 'Phở lõi rùa',
        price: 60000,
        category: 'food',
        description: 'Phở lõi rùa bò giòn sần sật',
        imageUrl:
          'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJ53LJmIyrNTERctgdnWJWOP4',
    name: 'Phở Gà Bà Lộc',
    description: 'Chuyên các món phở gà, miến gà măng mọc.',
    priceRange: 40000,
    maxCapacity: 35,
    dishes: ['Phở gà chặt', 'Miến lươn', 'Phở gà đùi', 'Xôi gà'],
    amenities: ['Quạt mát', 'Wifi'],
    rating: 4.1,
    imageUrl:
      'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800',
    address: '24 P. Tô Hiến Thành, Lê Đại Hành, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_phoga_1',
        restaurantId: 'ChIJ53LJmIyrNTERctgdnWJWOP4',
        visitTime: '12:00-13:00',
        crowdLevel: 'crowded',
        waitTime: 'normal',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-01',
        userContext: {
          budget: 45000,
          numberOfPeople: 2,
          amenities: [],
        },
      },
    ],
    menu: [
      {
        id: 'm_phoga_1',
        name: 'Phở gà đùi',
        price: 50000,
        category: 'food',
        description: 'Phở gà sử dụng 100% thịt đùi chắc ngọt',
        imageUrl:
          'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJT1qfznasNTEROJXJ662Ziig',
    name: 'BÚN CÁ CÔ TUYẾT',
    description: 'Bún cá rô đồng chiên giòn, nước dùng chua thanh.',
    priceRange: 35000,
    maxCapacity: 40,
    dishes: ['Bún cá chiên', 'Bánh đa cá', 'Bún cá dập', 'Trà đá'],
    amenities: ['Quạt mát', 'Chỗ để xe'],
    rating: 3.3,
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800',
    address: '117 Trần Đại Nghĩa, Bách Khoa, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_bunca_1',
        restaurantId: 'ChIJT1qfznasNTEROJXJ662Ziig',
        visitTime: '11:30-12:30',
        crowdLevel: 'normal',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-05-25',
        userContext: {
          budget: 40000,
          numberOfPeople: 1,
          amenities: [],
        },
      },
    ],
    menu: [
      {
        id: 'm_bunca_1',
        name: 'Bún cá thập cẩm',
        price: 40000,
        category: 'food',
        description: 'Bún cá chiên giòn và chả cá',
        imageUrl:
          'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJk57InQmrNTERDapJNVMp600',
    name: 'Quán Nhậu Tự Do',
    description:
      'Không gian vỉa hè thoáng mát, bia hơi mồi bén phù hợp cho sinh viên nhậu nhẹt.',
    priceRange: 120000,
    maxCapacity: 100,
    dishes: [
      'Bia hơi',
      'Đậu lướt ván',
      'Mực nướng',
      'Dồi sụn nướng',
      'Lẩu riêu cua',
    ],
    amenities: ['Bàn ngoài trời', 'Hút thuốc', 'Màn hình xem bóng đá'],
    rating: 4.3,
    imageUrl:
      'https://images.unsplash.com/photo-1538964173425-93884d739596?w=800',
    address: '8 P. Lê Đại Hành, Lê Đại Hành, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_nhau_1',
        restaurantId: 'ChIJk57InQmrNTERDapJNVMp600',
        visitTime: '19:00-22:00',
        crowdLevel: 'very_crowded',
        waitTime: 'normal',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-05-30',
        userContext: {
          budget: 150000,
          numberOfPeople: 5,
          amenities: ['Bàn ngoài trời', 'Màn hình xem bóng đá'],
        },
      },
    ],
    menu: [
      {
        id: 'm_nhau_1',
        name: 'Dồi sụn nướng',
        price: 65000,
        category: 'food',
        description: 'Dồi sụn nướng than hoa thơm lừng',
        imageUrl:
          'https://images.unsplash.com/photo-1544025162-811114215b2e?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'ChIJ6WntLO6tNTERb1oqF0_j0QM',
    name: 'Buffet Lẩu Nướng Kingkong',
    description: 'Buffet lẩu nướng sinh viên giá rẻ, đồ ăn lên liên tục.',
    priceRange: 139000,
    maxCapacity: 120,
    dishes: [
      'Ba chỉ bò mĩ',
      'Bạch tuộc nướng',
      'Hàu nướng phô mai',
      'Lẩu thái',
    ],
    amenities: ['Điều hòa', 'Wifi', 'Bãi đỗ xe', 'Thanh toán thẻ'],
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-811114215b2e?w=800',
    address: '2 Ng. 33 P. Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_kingkong_1',
        restaurantId: 'ChIJ6WntLO6tNTERb1oqF0_j0QM',
        visitTime: '19:00-21:00',
        crowdLevel: 'very_crowded',
        waitTime: 'long',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-04',
        userContext: {
          budget: 150000,
          numberOfPeople: 6,
          amenities: ['Điều hòa', 'Bãi đỗ xe'],
        },
      },
    ],
    menu: [
      {
        id: 'm_kingkong_1',
        name: 'Vé Buffet Nướng Lẩu Tiêu Chuẩn',
        price: 139000,
        category: 'food',
        description: 'Ăn thỏa thích các món thịt nướng và 1 nồi lẩu',
        imageUrl:
          'https://images.unsplash.com/photo-1544025162-811114215b2e?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'random_mock_1',
    name: 'Mỳ Vằn Thắn Hàng Bồ',
    description: 'Mỳ vằn thắn đậm chất phố cổ chi nhánh Bách Khoa.',
    priceRange: 45000,
    maxCapacity: 40,
    dishes: ['Mỳ vằn thắn nước', 'Mỳ vằn thắn trộn', 'Sủi cảo chiên'],
    amenities: ['Quạt mát', 'Wifi'],
    rating: 4.0,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    address: 'P. Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_myvanthan_1',
        restaurantId: 'random_mock_1',
        visitTime: '08:00-09:00',
        crowdLevel: 'normal',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-03',
        userContext: {
          budget: 50000,
          numberOfPeople: 1,
          amenities: [],
        },
      },
    ],
    menu: [
      {
        id: 'm_myvanthan_1',
        name: 'Mỳ vằn thắn trộn',
        price: 45000,
        category: 'food',
        description: 'Mỳ trộn với sốt đặc biệt, xá xíu và sủi cảo luộc',
        imageUrl:
          'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'random_mock_2',
    name: 'Bánh Mì Chảo Cột Điện',
    description: 'Bánh mì chảo sinh viên nổi tiếng với nước sốt siêu dính.',
    priceRange: 40000,
    maxCapacity: 50,
    dishes: ['Bánh mì chảo đầy đủ', 'Bánh mì chảo thường', 'Sữa đậu nành'],
    amenities: ['Wifi', 'Giao hàng', 'Thanh toán Momo'],
    rating: 4.5,
    imageUrl:
      'https://images.unsplash.com/photo-1626804475297-4160bbfb8eb8?w=800',
    address: 'Khu tập thể Bách Khoa, Bạch Mai, Hà Nội',
    experiences: [
      {
        id: 'e_banhmi_1',
        restaurantId: 'random_mock_2',
        visitTime: '12:00-13:00',
        crowdLevel: 'crowded',
        waitTime: 'normal',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-01',
        userContext: {
          budget: 50000,
          numberOfPeople: 2,
          amenities: ['Thanh toán Momo'],
        },
      },
    ],
    menu: [
      {
        id: 'm_banhmi_1',
        name: 'Bánh mì chảo đầy đủ',
        price: 45000,
        category: 'food',
        description: 'Pate, trứng ốp, xúc xích, khoai tây nghiền và bánh mì',
        imageUrl:
          'https://images.unsplash.com/photo-1626804475297-4160bbfb8eb8?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'random_mock_3',
    name: 'Bún Bò Huế O Xuân',
    description: 'Bún bò chuẩn vị Huế, nước dùng thơm mùi ruốc và sả.',
    priceRange: 45000,
    maxCapacity: 40,
    dishes: ['Bún bò giò heo', 'Bún bò tái nạm', 'Chả cua'],
    amenities: ['Quạt mát', 'Chỗ để xe'],
    rating: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800',
    address: 'Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_bunbo_1',
        restaurantId: 'random_mock_3',
        visitTime: '18:00-19:00',
        crowdLevel: 'normal',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-02',
        userContext: {
          budget: 50000,
          numberOfPeople: 1,
          amenities: [],
        },
      },
    ],
    menu: [
      {
        id: 'm_bunbo_1',
        name: 'Bún bò huế đầy đủ',
        price: 50000,
        category: 'food',
        description: 'Bún bò kèm tiết, giò heo, bò nạm và chả cua',
        imageUrl:
          'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400',
        isPopular: true,
      },
    ],
  },
  {
    id: 'random_mock_4',
    name: 'Sữa Chua Trân Châu Hạ Long',
    description: 'Tráng miệng thanh mát giải nhiệt mùa hè.',
    priceRange: 25000,
    maxCapacity: 30,
    dishes: ['Sữa chua trân châu cốt dừa', 'Sữa chua matcha', 'Hướng dương'],
    amenities: ['Điều hòa', 'Wifi', 'Chỗ ngồi vỉa hè'],
    rating: 4.4,
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
    address: 'Trần Đại Nghĩa, Bách Khoa, Hai Bà Trưng, Hà Nội',
    experiences: [
      {
        id: 'e_suachua_1',
        restaurantId: 'random_mock_4',
        visitTime: '20:00-22:00',
        crowdLevel: 'crowded',
        waitTime: 'short',
        priceAccuracy: 'accurate',
        amenityMatch: 'matched',
        date: '2026-06-05',
        userContext: {
          budget: 30000,
          numberOfPeople: 3,
          amenities: ['Điều hòa', 'Wifi'],
        },
      },
    ],
    menu: [
      {
        id: 'm_suachua_1',
        name: 'Sữa chua trân châu cốt dừa',
        price: 25000,
        category: 'dessert',
        description: 'Sữa chua dẻo ăn kèm trân châu trắng ngập nước cốt dừa ấm',
        imageUrl:
          'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
        isPopular: true,
      },
    ],
  },
]

export interface DishOptionGroup {
  id: string
  label: string
  dishes: string[]
}

export const dishOptionGroups: DishOptionGroup[] = [
  {
    id: 'pho-bun',
    label: 'Phở & bún',
    dishes: [
      'Phở bò tái',
      'Phở bò chín',
      'Phở tái nạm',
      'Phở bắp bò',
      'Phở bò',
      'Phở sốt vang',
      'Phở bò gầu',
      'Phở bò bắp',
      'Phở gà chặt',
      'Phở gà đùi',
      'Miến lươn',
      'Bún cá chiên',
      'Bánh đa cá',
      'Bún cá dập',
      'Bún bò giò heo',
      'Bún bò tái nạm',
      'Chả cua',
      'Mỳ vằn thắn nước',
      'Mỳ vằn thắn trộn',
      'Sủi cảo chiên',
      'Mỳ xào bò',
      'Quẩy',
      'Quẩy giòn',
    ],
  },
  {
    id: 'rice',
    label: 'Cơm & xôi',
    dishes: [
      'Cơm thố xá xíu',
      'Cơm thố gà nướng',
      'Cơm thố bò xào',
      'Cơm thố sườn',
      'Cơm thố gà',
      'Cơm thố bò',
      'Cơm tấm sườn nướng',
      'Cơm tấm sườn bì',
      'Cơm tấm chả trứng',
      'Thịt kho tàu',
      'Cá rán',
      'Đậu sốt cà chua',
      'Xôi xéo',
      'Xôi ngô',
      'Xôi thịt kho trứng',
      'Xôi xíu mại',
      'Xôi gà xé',
      'Xôi gà',
    ],
  },
  {
    id: 'hotpot-grill-buffet',
    label: 'Lẩu, nướng & buffet',
    dishes: [
      'Lẩu thái',
      'Lẩu ếch măng cay',
      'Lẩu riêu cua',
      'Ếch xào sả ớt',
      'Ếch rang muối',
      'Ba chỉ bò mĩ',
      'Bạch tuộc nướng',
      'Hàu nướng phô mai',
      'Mực nướng',
      'Dồi sụn nướng',
    ],
  },
  {
    id: 'seafood-snacks',
    label: 'Ốc, hải sản & ăn vặt',
    dishes: [
      'Ốc luộc mắm gừng',
      'Ốc xào me',
      'Ngao hấp sả',
      'Cút lộn xào me',
      'Nem chua rán',
      'Mỳ Ý sốt bò băm',
      'Mỳ Ý phô mai',
      'Khoai tây chiên',
      'Xúc xích',
      'Ngô chiên',
      'Đậu lướt ván',
    ],
  },
  {
    id: 'vietnamese-specialty',
    label: 'Món Việt đặc sản',
    dishes: [
      'Gà quay',
      'Cá chép om dưa',
      'Bê thui',
      'Bánh mì chảo đầy đủ',
      'Bánh mì chảo thường',
    ],
  },
  {
    id: 'drinks-dessert',
    label: 'Đồ uống & tráng miệng',
    dishes: [
      'Bia hơi',
      'Trà quất',
      'Trà đá',
      'Sữa đậu nành',
      'Canh rong biển',
      'Canh rau ngót',
      'Canh khổ qua',
      'Sữa chua trân châu cốt dừa',
      'Sữa chua matcha',
      'Hướng dương',
    ],
  },
]

export const dishOptions = dishOptionGroups.reduce(
  (acc, group) => [...acc, ...group.dishes],
  [],
)

export function getAmenityOptions(restaurants: Restaurant[]): string[] {
  const options: string[] = []

  for (const restaurant of restaurants) {
    for (const amenity of restaurant.amenities) {
      if (options.indexOf(amenity) === -1) {
        options.push(amenity)
      }
    }
  }

  return options
}

export const amenityOptions = getAmenityOptions(mockRestaurants)
