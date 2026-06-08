import { useLocation, useNavigate, Link } from 'react-router'
import { ArrowLeft, MapPin, Users, Star, TrendingUp } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Progress } from '../components/ui/progress'
import { Badge } from '../components/ui/badge'
import { Card } from '../components/ui/card'
import { SearchCriteria } from '../types'
import { mockRestaurants } from '../data/mockData2'
import { rankRestaurants } from '../utils/matchCalculator'
import { loadSearchCriteriaDraft } from '../utils/searchCriteriaStorage'
import { useState } from 'react'

export default function Results() {
  const location = useLocation()
  const navigate = useNavigate()
  const [criteria] = useState<SearchCriteria>(loadSearchCriteriaDraft)

  if (!criteria) {
    navigate('/')
    return null
  }

  const rankedResults = rankRestaurants(mockRestaurants, criteria)
  const restaurantsWithScores = rankedResults.map((result) => ({
    restaurant: mockRestaurants.find((r) => r.id === result.restaurantId)!,
    score: result,
  }))

  const mandatoryLabels: string[] = []
  if (criteria.mandatory?.budget) mandatoryLabels.push('Ngân sách')
  if (criteria.mandatory?.capacity) mandatoryLabels.push('Sức chứa')
  if (criteria.mandatory?.dishes && criteria.preferredDishes.length > 0) {
    mandatoryLabels.push('Món ăn')
  }
  if (criteria.mandatory?.amenities && criteria.amenities.length > 0) {
    mandatoryLabels.push('Tiện ích')
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-orange-500'
    return 'text-red-500'
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-50 border-green-200'
    if (score >= 60) return 'bg-orange-50 border-orange-200'
    return 'bg-red-50 border-red-200'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4 hover:bg-white/50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tìm kiếm mới
          </Button>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h1 className="text-3xl mb-4 text-gray-900">Kết quả tìm kiếm</h1>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <Users className="w-4 h-4" />
                <span>{criteria.numberOfPeople} người</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <span>💰</span>
                <span>{criteria.budget.toLocaleString()}đ/người</span>
              </div>
              {criteria.preferredDishes.length > 0 && (
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <span>🍜</span>
                  <span>{criteria.preferredDishes.join(', ')}</span>
                </div>
              )}
              {criteria.amenities.length > 0 && (
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <span>✨</span>
                  <span>{criteria.amenities.join(', ')}</span>
                </div>
              )}
              {mandatoryLabels.length > 0 && (
                <div className="flex items-center gap-2 bg-orange-100 px-3 py-2 rounded-lg text-orange-800">
                  <span>⚠️</span>
                  <span>Bắt buộc: {mandatoryLabels.join(', ')}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {restaurantsWithScores.length === 0 ? (
            <Card className="p-8 text-center border-2 border-dashed border-orange-200 bg-white">
              <p className="text-lg text-gray-800 mb-2">
                Không có nhà hàng phù hợp
              </p>
              <p className="text-gray-600 mb-6">
                Không quán nào đáp ứng đủ các điều kiện bắt buộc. Hãy nới lỏng
                bộ lọc hoặc bỏ tick &quot;Bắt buộc&quot; rồi tìm lại.
              </p>
              <Button
                type="button"
                onClick={() => navigate('/')}
                className="bg-orange-500 hover:bg-orange-600 text-white">
                Chỉnh sửa điều kiện
              </Button>
            </Card>
          ) : (
            restaurantsWithScores.map(({ restaurant, score }, index) => (
              <Card
                key={restaurant.id}
                className={`p-6 border-2 ${getScoreBgColor(score.score)} transition-all hover:shadow-lg`}>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Restaurant Image */}
                  <div className="md:w-64 h-48 flex-shrink-0">
                    <img
                      src={restaurant.imageUrl}
                      alt={restaurant.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Restaurant Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          {index === 0 && (
                            <Badge className="bg-orange-500 text-white">
                              Đề xuất hàng đầu
                            </Badge>
                          )}
                        </div>
                        <h2 className="text-2xl mb-1 text-gray-900">
                          {restaurant.name}
                        </h2>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{restaurant.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span>{restaurant.rating}</span>
                        </div>
                      </div>

                      {/* Match Score */}
                      <div className="text-center bg-white rounded-lg p-4 shadow-sm border-2 border-gray-200">
                        <div
                          className={`text-4xl ${getScoreColor(score.score)}`}>
                          {score.score}%
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Độ phù hợp
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {restaurant.description}
                    </p>

                    {/* Match Details */}
                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">
                            Đáp ứng được:
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {score.matchedCriteria.map((criterion, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-green-100 text-green-800 border-green-200">
                              ✓ {criterion}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {score.unmatchedCriteria.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-gray-700">
                              Chưa đáp ứng:
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {score.unmatchedCriteria.map((criterion, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="bg-red-100 text-red-800 border-red-200">
                                ✗ {criterion}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <Progress value={score.score} className="h-2" />
                    </div>

                    {/* Action Button */}
                    <Link
                      to={`/restaurant/${restaurant.id}`}
                      state={{ criteria }}>
                      <Button
                        type="button"
                        className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white">
                        Xem chi tiết & trải nghiệm thực tế
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Info Footer */}
        <div className="mt-8 bg-white/70 rounded-xl p-6">
          <p className="text-gray-600 text-sm">
            <span className="text-orange-600">💡 Mẹo:</span> Độ phù hợp được
            tính dựa trên ngân sách, sức chứa, món ăn và tiện ích. Điều kiện bắt
            buộc sẽ loại quán không đáp ứng hoàn toàn tiêu chí đó. Nhà hàng có
            độ phù hợp cao nhất sẽ đáp ứng tốt nhất nhu cầu của bạn.
          </p>
        </div>
      </div>
    </div>
  )
}
