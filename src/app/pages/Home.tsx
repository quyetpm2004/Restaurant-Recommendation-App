import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Search, Users, DollarSign, Utensils, Wifi } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Checkbox } from '../components/ui/checkbox'
import { amenityOptions } from '../data/mockData2'
import { DishSelector } from '../components/DishSelector'
import { SearchCriteria, SearchCriteriaMandatory } from '../types'
import { toast } from 'sonner'
import {
  loadSearchCriteriaDraft,
  saveSearchCriteriaDraft,
} from '../utils/searchCriteriaStorage'

export default function Home() {
  const navigate = useNavigate()
  const [initialDraft] = useState(loadSearchCriteriaDraft)
  const [numberOfPeople, setNumberOfPeople] = useState(
    initialDraft.numberOfPeople,
  )
  const [budget, setBudget] = useState(initialDraft.budget)
  const [selectedDishes, setSelectedDishes] = useState<string[]>(
    initialDraft.preferredDishes,
  )
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    initialDraft.amenities,
  )
  const [mandatory, setMandatory] = useState<SearchCriteriaMandatory>(
    initialDraft.mandatory,
  )

  useEffect(() => {
    saveSearchCriteriaDraft({
      numberOfPeople,
      budget,
      preferredDishes: selectedDishes,
      amenities: selectedAmenities,
      mandatory,
    })
  }, [numberOfPeople, budget, selectedDishes, selectedAmenities, mandatory])

  const toggleMandatory = (key: keyof SearchCriteriaMandatory) => {
    setMandatory((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    )
  }

  const handleSearch = () => {
    if (numberOfPeople === 0) {
      toast.warning('Số người cần có ít nhất 1 người!')
      return
    }
    if (budget === 0) {
      toast.warning('Ngân sách cần lớn hơn 0!')
      return
    }
    const criteria: SearchCriteria = {
      numberOfPeople,
      budget,
      preferredDishes: selectedDishes,
      amenities: selectedAmenities,
      mandatory: {
        budget: mandatory.budget,
        capacity: mandatory.capacity,
        dishes: mandatory.dishes && selectedDishes.length > 0,
        amenities: mandatory.amenities && selectedAmenities.length > 0,
      },
    }
    navigate('/results', { state: { criteria } })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
            <Search className="w-8 h-8" />
          </div>
          <h1 className="text-4xl mb-3 text-gray-900">Tìm Nhà Hàng Phù Hợp</h1>
          <p className="text-gray-600 text-lg">
            Nhập điều kiện của bạn, chúng tôi sẽ tìm nhà hàng phù hợp nhất
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Number of People */}
          <div className="mb-8">
            <div className="flex items-center justify-between gap-4 mb-3">
              <Label className="flex items-center gap-2 text-gray-700">
                <Users className="w-5 h-5 text-orange-500" />
                <span>Số lượng người</span>
              </Label>
              <label
                className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer shrink-0"
                onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                  checked={mandatory.capacity}
                  onCheckedChange={() => toggleMandatory('capacity')}
                />
                <span>Bắt buộc</span>
              </label>
            </div>
            <Input
              type="number"
              min="1"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
              className="text-lg p-6"
            />
          </div>

          {/* Budget */}
          <div className="mb-8">
            <div className="flex items-center justify-between gap-4 mb-3">
              <Label className="flex items-center gap-2 text-gray-700">
                <DollarSign className="w-5 h-5 text-orange-500" />
                <span>Ngân sách mỗi người (VNĐ)</span>
              </Label>
              <label
                className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer shrink-0"
                onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                  checked={mandatory.budget}
                  onCheckedChange={() => toggleMandatory('budget')}
                />
                <span>Bắt buộc</span>
              </label>
            </div>
            <Input
              type="number"
              min="0"
              step="10000"
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="text-lg p-6"
            />
            <p className="text-sm text-gray-500 mt-2">
              Tổng ngân sách:{' '}
              {numberOfPeople > 0 && budget > 0
                ? Math.max(budget * numberOfPeople, 0).toLocaleString() + 'đ'
                : '0đ'}
            </p>
          </div>

          {/* Preferred Dishes */}
          <div className="mb-8">
            <div className="flex items-center justify-between gap-4 mb-3">
              <Label className="flex items-center gap-2 text-gray-700">
                <Utensils className="w-5 h-5 text-orange-500" />
                <span>Món ăn mong muốn (tùy chọn)</span>
              </Label>
              <label
                className={`flex items-center gap-2 text-sm shrink-0 ${
                  selectedDishes.length === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 cursor-pointer'
                }`}
                onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                  checked={mandatory.dishes}
                  disabled={selectedDishes.length === 0}
                  onCheckedChange={() => toggleMandatory('dishes')}
                />
                <span>Bắt buộc</span>
              </label>
            </div>
            <DishSelector
              selected={selectedDishes}
              onChange={setSelectedDishes}
            />
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <div className="flex items-center justify-between gap-4 mb-3">
              <Label className="flex items-center gap-2 text-gray-700">
                <Wifi className="w-5 h-5 text-orange-500" />
                <span>Tiện ích cần thiết (tùy chọn)</span>
              </Label>
              <label
                className={`flex items-center gap-2 text-sm shrink-0 ${
                  selectedAmenities.length === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 cursor-pointer'
                }`}
                onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                  checked={mandatory.amenities}
                  disabled={selectedAmenities.length === 0}
                  onCheckedChange={() => toggleMandatory('amenities')}
                />
                <span>Bắt buộc</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  ">
              {amenityOptions.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    handleAmenityToggle(amenity)
                  }}>
                  <Checkbox
                    className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                    checked={selectedAmenities.includes(amenity)}
                  />
                  <label className="cursor-pointer flex-1">{amenity}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Search Button */}
          <Button
            type="button"
            onClick={handleSearch}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6">
            <Search className="w-5 h-5 mr-2" />
            Tìm nhà hàng phù hợp
          </Button>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-white/70 rounded-xl p-6">
          <h3 className="text-lg mb-3 text-gray-800">Cách thức hoạt động</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">✓</span>
              <span>Nhập điều kiện tìm kiếm của bạn</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">✓</span>
              <span>
                Hệ thống tự động tính toán độ phù hợp cho từng nhà hàng
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">✓</span>
              <span>
                Xem danh sách nhà hàng được sắp xếp theo độ phù hợp kèm giải
                thích chi tiết
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">✓</span>
              <span>
                Tick &quot;Bắt buộc&quot; để loại nhà hàng không đáp ứng điều
                kiện đó
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">✓</span>
              <span>
                Đọc xu hướng và trải nghiệm thực tế từ những người dùng khác
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
