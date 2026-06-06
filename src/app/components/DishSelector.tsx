import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { dishOptionGroups } from '../data/mockData2'

interface DishSelectorProps {
  selected: string[]
  onChange: (selected: string[]) => void
}

export function DishSelector({ selected, onChange }: DishSelectorProps) {
  const [query, setQuery] = useState('')

  const normalizedQuery = query.trim().toLowerCase()

  const filteredGroups = useMemo(() => {
    if (!normalizedQuery) return dishOptionGroups

    return dishOptionGroups
      .map((group) => ({
        ...group,
        dishes: group.dishes.filter(
          (dish) =>
            dish.toLowerCase().indexOf(normalizedQuery) !== -1 ||
            group.label.toLowerCase().indexOf(normalizedQuery) !== -1,
        ),
      }))
      .filter((group) => group.dishes.length > 0)
  }, [normalizedQuery])

  const visibleCount = filteredGroups.reduce(
    (sum, g) => sum + g.dishes.length,
    0,
  )
  const totalCount = dishOptionGroups.reduce(
    (sum, g) => sum + g.dishes.length,
    0,
  )

  const toggleDish = (dish: string) => {
    onChange(
      selected.indexOf(dish) !== -1
        ? selected.filter((d) => d !== dish)
        : [...selected, dish],
    )
  }

  const clearAll = () => onChange([])

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          type="search"
          placeholder="Tìm món ăn (vd: phở, lẩu, cơm...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {selected.length > 0 && (
        <div className="rounded-lg border border-orange-200 bg-orange-50/50 p-3">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-sm font-medium text-gray-700">
              Đã chọn ({selected.length})
            </span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearAll}
              className="h-7 text-xs text-gray-500 hover:text-gray-800">
              Xóa tất cả
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selected.map((dish) => (
              <Badge
                key={dish}
                variant="secondary"
                className="bg-white border-orange-200 text-gray-800 pr-1 gap-1">
                {dish}
                <button
                  type="button"
                  onClick={() => toggleDish(dish)}
                  className="rounded-full p-0.5 hover:bg-orange-100"
                  aria-label={`Bỏ chọn ${dish}`}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      <p className="text-xs text-gray-500">
        {normalizedQuery
          ? `Tìm thấy ${visibleCount} món`
          : `${totalCount} món — cuộn hoặc tìm kiếm để chọn nhanh`}
      </p>

      <div className="rounded-lg border border-gray-200 bg-gray-50/50">
        <ScrollArea className="h-64 md:h-72">
          <div className="p-3 space-y-4">
            {filteredGroups.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-8">
                Không tìm thấy món phù hợp với &quot;{query}&quot;
              </p>
            ) : (
              filteredGroups.map((group) => (
                <div key={group.id}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-600 mb-2 sticky top-0 bg-gray-50/95 py-1 z-10">
                    {group.label}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {group.dishes.map((dish) => {
                      const isSelected = selected.indexOf(dish) !== -1
                      return (
                        <div
                          key={dish}
                          role="button"
                          tabIndex={0}
                          className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                            isSelected
                              ? 'border-orange-400 bg-orange-50'
                              : 'border-gray-200 bg-white hover:border-orange-300'
                          }`}
                          onClick={() => toggleDish(dish)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              toggleDish(dish)
                            }
                          }}>
                          <Checkbox
                            checked={isSelected}
                            className="pointer-events-none data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                          />
                          <span className="text-sm text-gray-800 leading-tight">
                            {dish}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
