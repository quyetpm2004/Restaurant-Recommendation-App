import { useState, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import {
  ArrowLeft,
  MapPin,
  Star,
  Users,
  DollarSign,
  Utensils,
  Wifi,
  Clock,
  TrendingUp,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  ChefHat,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Checkbox } from "../components/ui/checkbox";
import { mockRestaurants } from "../data/mockData";
import { analyzeTrends } from "../utils/trendAnalyzer";
import { filterBySimilarUsers } from "../utils/similarUserFilter";
import {
  loadUserExperiences,
  saveUserExperiences,
} from "../utils/experienceStorage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { toast } from "sonner";
import { Experience, SearchCriteria, MenuCategory } from "../types";

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const restaurant = mockRestaurants.find((r) => r.id === id);
  const userCriteria =
    (location.state as { criteria?: SearchCriteria })?.criteria || null;

  const [visitTime, setVisitTime] = useState("");
  const [crowdLevel, setCrowdLevel] = useState("");
  const [waitTime, setWaitTime] = useState("");
  const [priceAccuracy, setPriceAccuracy] = useState("");
  const [amenityMatch, setAmenityMatch] = useState("");

  const [userExperiences, setUserExperiences] = useState<Experience[]>(() =>
    id ? loadUserExperiences(id) : [],
  );

  // Menu filter state
  const [selectedCategories, setSelectedCategories] = useState<MenuCategory[]>([
    "food",
    "drink",
    "extra",
    "dessert",
  ]);

  if (!restaurant) {
    navigate("/");
    return null;
  }

  const experiences = useMemo(
    () => [...restaurant.experiences, ...userExperiences],
    [restaurant.experiences, userExperiences],
  );

  const filteredExperiences = useMemo(
    () => filterBySimilarUsers(experiences, userCriteria),
    [experiences, userCriteria],
  );

  const allTrends = useMemo(() => analyzeTrends(experiences), [experiences]);

  const trends = useMemo(() => {
    if (filteredExperiences.length > 0) {
      return analyzeTrends(filteredExperiences);
    }
    return allTrends;
  }, [filteredExperiences, allTrends]);

  // Filter menu items by selected categories
  const filteredMenuItems = useMemo(() => {
    return restaurant.menu.filter((item) =>
      selectedCategories.includes(item.category),
    );
  }, [restaurant.menu, selectedCategories]);

  const handleCategoryToggle = (category: MenuCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const categoryLabels: Record<MenuCategory, string> = {
    food: "Đồ ăn",
    drink: "Đồ uống",
    extra: "Đồ thêm",
    dessert: "Tráng miệng",
  };

  const handleSubmitExperience = () => {
    if (
      !visitTime ||
      !crowdLevel ||
      !waitTime ||
      !priceAccuracy ||
      !amenityMatch
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin trải nghiệm");
      return;
    }

    const newExperience: Experience = {
      id: crypto.randomUUID(),
      restaurantId: restaurant.id,
      visitTime,
      crowdLevel: crowdLevel as Experience["crowdLevel"],
      waitTime: waitTime as Experience["waitTime"],
      priceAccuracy: priceAccuracy as Experience["priceAccuracy"],
      amenityMatch: amenityMatch as Experience["amenityMatch"],
      date: new Date().toISOString().slice(0, 10),
      userContext: {
        budget: userCriteria?.budget ?? restaurant.priceRange,
        numberOfPeople: userCriteria?.numberOfPeople ?? 2,
        amenities: userCriteria?.amenities ?? [],
      },
    };

    setUserExperiences((prev) => {
      const next = [...prev, newExperience];
      saveUserExperiences(restaurant.id, next);
      return next;
    });

    toast.success("Cảm ơn bạn đã chia sẻ trải nghiệm!");

    setVisitTime("");
    setCrowdLevel("");
    setWaitTime("");
    setPriceAccuracy("");
    setAmenityMatch("");
  };

  // Prepare chart data
  const crowdChartData = [
    {
      name: "Vắng",
      value: trends.crowdDistribution.empty,
      color: "#22c55e",
      percentage: (
        (trends.crowdDistribution.empty / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
    {
      name: "Bình thường",
      value: trends.crowdDistribution.normal,
      color: "#3b82f6",
      percentage: (
        (trends.crowdDistribution.normal / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
    {
      name: "Đông",
      value: trends.crowdDistribution.crowded,
      color: "#f59e0b",
      percentage: (
        (trends.crowdDistribution.crowded / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
    {
      name: "Rất đông",
      value: trends.crowdDistribution.very_crowded,
      color: "#ef4444",
      percentage: (
        (trends.crowdDistribution.very_crowded / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
  ];

  const waitTimeChartData = [
    {
      name: "Không có",
      value: trends.waitTimeDistribution.none,
      color: "#10b981",
      percentage: (
        (trends.waitTimeDistribution.none / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
    {
      name: "Ngắn",
      value: trends.waitTimeDistribution.short,
      color: "#22c55e",
      percentage: (
        (trends.waitTimeDistribution.short / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
    {
      name: "Bình thường",
      value: trends.waitTimeDistribution.normal,
      color: "#3b82f6",
      percentage: (
        (trends.waitTimeDistribution.normal / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
    {
      name: "Dài",
      value: trends.waitTimeDistribution.long,
      color: "#ef4444",
      percentage: (
        (trends.waitTimeDistribution.long / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
  ];

  const priceChartData = [
    {
      name: "Rẻ hơn",
      value: trends.priceDistribution.cheaper,
      color: "#10b981",
      percentage: (
        (trends.priceDistribution.cheaper / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
    {
      name: "Chính xác",
      value: trends.priceDistribution.accurate,
      color: "#22c55e",
      percentage: (
        (trends.priceDistribution.accurate / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
    {
      name: "Hơi cao",
      value: trends.priceDistribution.slightly_higher,
      color: "#f59e0b",
      percentage: (
        (trends.priceDistribution.slightly_higher / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
    {
      name: "Cao hơn nhiều",
      value: trends.priceDistribution.much_higher,
      color: "#ef4444",
      percentage: (
        (trends.priceDistribution.much_higher / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
  ];

  const amenityChartData = [
    {
      name: "Đúng kỳ vọng",
      value: trends.amenityDistribution.matched,
      color: "#22c55e",
      percentage: (
        (trends.amenityDistribution.matched / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
    {
      name: "Khác kỳ vọng",
      value: trends.amenityDistribution.not_matched,
      color: "#ef4444",
      percentage: (
        (trends.amenityDistribution.not_matched / trends.totalExperiences) *
        100
      ).toFixed(0),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          type="button"
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại kết quả
        </Button>

        {/* Restaurant Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="h-80 relative">
            <img
              src={restaurant.imageUrl}
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-xl">{restaurant.rating}</span>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-4xl mb-3 text-gray-900">{restaurant.name}</h1>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin className="w-5 h-5" />
              <span>{restaurant.address}</span>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              {restaurant.description}
            </p>

            {/* Restaurant Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <DollarSign className="w-8 h-8 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-500">Giá trung bình</div>
                  <div className="text-lg">
                    {restaurant.priceRange.toLocaleString()}đ
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <Users className="w-8 h-8 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-500">Sức chứa</div>
                  <div className="text-lg">
                    Tối đa {restaurant.maxCapacity} người
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <Utensils className="w-8 h-8 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-500">Món ăn</div>
                  <div className="text-lg">{restaurant.dishes.length} loại</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <Wifi className="w-8 h-8 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-500">Tiện ích</div>
                  <div className="text-lg">
                    {restaurant.amenities.length} loại
                  </div>
                </div>
              </div>
            </div>

            {/* Dishes */}
            <div className="mb-6">
              <h3 className="text-lg mb-3 text-gray-800">Món ăn</h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.dishes.map((dish) => (
                  <Badge
                    key={dish}
                    variant="secondary"
                    className="text-base py-2 px-4"
                  >
                    {dish}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-lg mb-3 text-gray-800">Tiện ích</h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.amenities.map((amenity) => (
                  <Badge
                    key={amenity}
                    variant="secondary"
                    className="text-base py-2 px-4 bg-green-100 text-green-800"
                  >
                    ✓ {amenity}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <div>
              <h2 className="text-3xl text-gray-900">Thực đơn</h2>
              <p className="text-gray-600">
                Khám phá các món ăn tại {restaurant.name}
              </p>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <Label className="mb-3 block text-gray-700">Phân loại</Label>
            <div className="flex flex-wrap gap-3">
              {(Object.keys(categoryLabels) as MenuCategory[]).map(
                (category) => (
                  <div
                    key={category}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-colors ${
                      selectedCategories.includes(category)
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryToggle(category);
                    }}
                  >
                    <Checkbox checked={selectedCategories.includes(category)} />
                    <label className="cursor-pointer">
                      {categoryLabels[category]}
                    </label>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Menu Items - Horizontal Scroll */}
          <div className="relative">
            {filteredMenuItems.length > 0 ? (
              <div className="overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: "max-content" }}>
                  {filteredMenuItems.map((item) => (
                    <Card
                      key={item.id}
                      className="flex-shrink-0 w-56 h-80 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer relative"
                    >
                      <div className="h-56 relative">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        {item.isPopular && (
                          <Badge className="absolute top-2 right-2 bg-orange-500 text-white">
                            ⭐ Phổ biến
                          </Badge>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="text-gray-900 mb-1 truncate">
                          {item.name}
                        </h4>
                        {item.description && (
                          <p className="text-sm text-gray-600 mb-2 line-clamp-1">
                            {item.description}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-orange-600 text-lg">
                            {item.price.toLocaleString()}đ
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {categoryLabels[item.category]}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Utensils className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Không có món nào trong danh mục đã chọn</p>
              </div>
            )}
          </div>

          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              <span className="text-blue-600">💡 Mẹo:</span> Cuộn ngang để xem
              thêm món ăn. Bỏ chọn các phân loại để lọc theo sở thích của bạn.
            </p>
          </div>
        </div>

        {/* Trend Analysis */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-orange-500" />
            <div>
              <h2 className="text-3xl text-gray-900">Phân tích xu hướng</h2>
              {filteredExperiences.length > 0 && userCriteria ? (
                <p className="text-gray-600">
                  Dựa trên {trends.totalExperiences} trải nghiệm từ người dùng
                  có hoàn cảnh tương tự bạn
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-blue-100 text-blue-800"
                  >
                    Cá nhân hóa
                  </Badge>
                </p>
              ) : (
                <p className="text-gray-600">
                  Dựa trên {trends.totalExperiences} trải nghiệm từ tất cả người
                  dùng
                </p>
              )}
            </div>
          </div>

          {/* Risk Warnings */}
          {(trends.risks.budgetRisk ||
            trends.risks.crowdRisk ||
            trends.risks.waitTimeRisk ||
            trends.risks.amenityRisk) && (
            <div className="mb-6 space-y-3">
              <h3 className="text-lg text-gray-800 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Cảnh báo rủi ro
              </h3>

              {trends.risks.budgetRisk && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-900">
                    <strong>Chú ý:</strong> Đây là quán có khả năng cao vượt quá
                    ngân sách dự kiến.
                  </AlertDescription>
                </Alert>
              )}

              {trends.risks.crowdRisk && (
                <Alert className="border-orange-200 bg-orange-50">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                  <AlertDescription className="text-orange-900">
                    <strong>Chú ý:</strong> Quán thường xuyên đông đúc, có thể
                    gây khó chịu.
                  </AlertDescription>
                </Alert>
              )}

              {trends.risks.waitTimeRisk && (
                <Alert className="border-amber-200 bg-amber-50">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-900">
                    <strong>Chú ý:</strong> Thời gian chờ có thể lâu hơn dự
                    kiến.
                  </AlertDescription>
                </Alert>
              )}

              {trends.risks.amenityRisk && (
                <Alert className="border-purple-200 bg-purple-50">
                  <AlertTriangle className="h-4 w-4 text-purple-600" />
                  <AlertDescription className="text-purple-900">
                    <strong>Chú ý:</strong> Tiện ích/không gian có thể khác với
                    kỳ vọng.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}

          {!trends.risks.budgetRisk &&
            !trends.risks.crowdRisk &&
            !trends.risks.waitTimeRisk &&
            !trends.risks.amenityRisk && (
              <Alert className="border-green-200 bg-green-50 mb-6">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-900">
                  <strong>Tốt:</strong> Nhà hàng này có đánh giá tích cực từ
                  người dùng, không có cảnh báo rủi ro nào.
                </AlertDescription>
              </Alert>
            )}

          {/* Trend Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm text-blue-800 mb-1">
                    Tình trạng đông đúc
                  </h4>
                  <p className="text-blue-900">{trends.crowdTrend}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-purple-50 border-purple-200">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm text-purple-800 mb-1">
                    Thời gian chờ
                  </h4>
                  <p className="text-purple-900">{trends.waitTimeTrend}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-amber-50 border-amber-200">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm text-amber-800 mb-1">
                    Độ chính xác giá
                  </h4>
                  <p className="text-amber-900">{trends.priceTrend}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <div className="flex items-start gap-3">
                <Wifi className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm text-green-800 mb-1">
                    Tiện ích / Không gian
                  </h4>
                  <p className="text-green-900">{trends.amenityTrend}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="text-center mb-4 text-gray-700">
                Tình trạng đông đúc
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={crowdChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload[0]) {
                        return (
                          <div className="bg-white p-3 border rounded shadow">
                            <p className="text-sm">{payload[0].payload.name}</p>
                            <p className="text-sm font-bold">
                              {payload[0].payload.percentage}%
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {crowdChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h4 className="text-center mb-4 text-gray-700">Thời gian chờ</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={waitTimeChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload[0]) {
                        return (
                          <div className="bg-white p-3 border rounded shadow">
                            <p className="text-sm">{payload[0].payload.name}</p>
                            <p className="text-sm font-bold">
                              {payload[0].payload.percentage}%
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {waitTimeChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h4 className="text-center mb-4 text-gray-700">
                Độ chính xác giá
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={priceChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload[0]) {
                        return (
                          <div className="bg-white p-3 border rounded shadow">
                            <p className="text-sm">{payload[0].payload.name}</p>
                            <p className="text-sm font-bold">
                              {payload[0].payload.percentage}%
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {priceChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h4 className="text-center mb-4 text-gray-700">
                Tiện ích / Không gian
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={amenityChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload[0]) {
                        return (
                          <div className="bg-white p-3 border rounded shadow">
                            <p className="text-sm">{payload[0].payload.name}</p>
                            <p className="text-sm font-bold">
                              {payload[0].payload.percentage}%
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {amenityChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Experience Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-orange-500" />
            <div>
              <h2 className="text-3xl text-gray-900">
                Chia sẻ trải nghiệm của bạn
              </h2>
              <p className="text-gray-600">
                Giúp người dùng khác có thông tin chính xác hơn
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Visit Time */}
            <div>
              <Label className="mb-3 block text-gray-700">
                Thời điểm đến quán
              </Label>
              <RadioGroup value={visitTime} onValueChange={setVisitTime}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "10:00-12:00",
                    "12:00-14:00",
                    "14:00-18:00",
                    "18:00-20:00",
                    "20:00-22:00",
                  ].map((time) => (
                    <div
                      key={time}
                      className={`flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer ${
                        visitTime === time
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setVisitTime(time)}
                    >
                      <RadioGroupItem value={time} id={`time-${time}`} />
                      <label
                        htmlFor={`time-${time}`}
                        className="cursor-pointer flex-1"
                      >
                        {time}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Crowd Level */}
            <div>
              <Label className="mb-3 block text-gray-700">
                Tình trạng đông đúc
              </Label>
              <RadioGroup value={crowdLevel} onValueChange={setCrowdLevel}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: "empty", label: "Vắng" },
                    { value: "normal", label: "Bình thường" },
                    { value: "crowded", label: "Đông" },
                    { value: "very_crowded", label: "Rất đông" },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer ${
                        crowdLevel === option.value
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setCrowdLevel(option.value)}
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`crowd-${option.value}`}
                      />
                      <label
                        htmlFor={`crowd-${option.value}`}
                        className="cursor-pointer flex-1"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Wait Time */}
            <div>
              <Label className="mb-3 block text-gray-700">Thời gian chờ</Label>
              <RadioGroup value={waitTime} onValueChange={setWaitTime}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: "none", label: "Không có" },
                    { value: "short", label: "Ngắn (< 10 phút)" },
                    { value: "normal", label: "Bình thường (10-20 phút)" },
                    { value: "long", label: "Dài (> 20 phút)" },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer ${
                        waitTime === option.value
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setWaitTime(option.value)}
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`wait-${option.value}`}
                      />
                      <label
                        htmlFor={`wait-${option.value}`}
                        className="cursor-pointer flex-1"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Price Accuracy */}
            <div>
              <Label className="mb-3 block text-gray-700">
                Mức chênh lệch giá so với thông tin
              </Label>
              <RadioGroup
                value={priceAccuracy}
                onValueChange={setPriceAccuracy}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: "cheaper", label: "Rẻ hơn dự kiến" },
                    { value: "accurate", label: "Đúng như dự kiến" },
                    { value: "slightly_higher", label: "Hơi cao hơn" },
                    { value: "much_higher", label: "Cao hơn nhiều" },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer ${
                        priceAccuracy === option.value
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setPriceAccuracy(option.value)}
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`price-${option.value}`}
                      />
                      <label
                        htmlFor={`price-${option.value}`}
                        className="cursor-pointer flex-1"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Amenity Match */}
            <div>
              <Label className="mb-3 block text-gray-700">
                Tiện ích / Không gian
              </Label>
              <RadioGroup value={amenityMatch} onValueChange={setAmenityMatch}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { value: "matched", label: "Đúng như kỳ vọng" },
                    { value: "not_matched", label: "Khác với kỳ vọng" },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer ${
                        amenityMatch === option.value
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setAmenityMatch(option.value)}
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`amenity-${option.value}`}
                      />
                      <label
                        htmlFor={`amenity-${option.value}`}
                        className="cursor-pointer flex-1"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <Button
              type="button"
              onClick={handleSubmitExperience}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6"
            >
              Gửi trải nghiệm
            </Button>
          </div>

          <div className="mt-6 space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <span className="text-blue-600">💡 Lưu ý:</span> Thông tin của
                bạn sẽ được tổng hợp cùng với trải nghiệm của nhiều người dùng
                khác để tạo ra xu hướng chung, giúp người dùng mới có cái nhìn
                khách quan hơn.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-900">
                <span className="text-green-600">✨ Tính năng mới:</span> Hệ
                thống sẽ ưu tiên hiển thị trải nghiệm từ những người dùng có
                hoàn cảnh tương tự với bạn (ngân sách, số người, tiện ích yêu
                cầu) để bạn có cái nhìn chính xác hơn về tình huống thực tế.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
