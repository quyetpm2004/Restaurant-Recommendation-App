import { Experience, TrendAnalysis } from '../types';

export function analyzeTrends(experiences: Experience[]): TrendAnalysis {
  const crowdDistribution = {
    empty: 0,
    normal: 0,
    crowded: 0,
    very_crowded: 0,
  };

  const waitTimeDistribution = {
    none: 0,
    short: 0,
    normal: 0,
    long: 0,
  };

  const priceDistribution = {
    cheaper: 0,
    accurate: 0,
    slightly_higher: 0,
    much_higher: 0,
  };

  const amenityDistribution = {
    matched: 0,
    not_matched: 0,
  };

  experiences.forEach((exp) => {
    crowdDistribution[exp.crowdLevel]++;
    waitTimeDistribution[exp.waitTime]++;
    priceDistribution[exp.priceAccuracy]++;
    amenityDistribution[exp.amenityMatch]++;
  });

  const total = experiences.length;

  // Analyze crowd trend
  let crowdTrend = '';
  const crowdedCount = crowdDistribution.crowded + crowdDistribution.very_crowded;
  const crowdedPercentage = (crowdedCount / total) * 100;

  if (crowdedPercentage > 60) {
    crowdTrend = 'Nhà hàng thường xuyên đông khách';
  } else if (crowdedPercentage > 30) {
    crowdTrend = 'Nhà hàng có mức độ đông vừa phải';
  } else {
    crowdTrend = 'Nhà hàng thường vắng khách';
  }

  // Analyze wait time trend
  let waitTimeTrend = '';
  const longWaitPercentage = (waitTimeDistribution.long / total) * 100;

  if (longWaitPercentage > 50) {
    waitTimeTrend = 'Có nhiều người cảm thấy thời gian chờ lâu';
  } else if (longWaitPercentage > 25) {
    waitTimeTrend = 'Thời gian chờ đôi khi hơi lâu';
  } else {
    waitTimeTrend = 'Thời gian chờ thường nhanh';
  }

  // Analyze price trend
  let priceTrend = '';
  const higherPriceCount =
    priceDistribution.slightly_higher + priceDistribution.much_higher;
  const higherPricePercentage = (higherPriceCount / total) * 100;

  if (higherPricePercentage > 50) {
    priceTrend = 'Tỷ lệ người cảm thấy giá cao hơn dự kiến khá cao';
  } else if (higherPricePercentage > 25) {
    priceTrend = 'Một số người cảm thấy giá cao hơn dự kiến';
  } else {
    priceTrend = 'Giá cả phù hợp với thông tin';
  }

  // Analyze amenity trend
  let amenityTrend = '';
  const notMatchedPercentage = (amenityDistribution.not_matched / total) * 100;

  if (notMatchedPercentage > 40) {
    amenityTrend = 'Nhiều người cảm thấy tiện ích không như kỳ vọng';
  } else if (notMatchedPercentage > 20) {
    amenityTrend = 'Một số người cảm thấy tiện ích khác với kỳ vọng';
  } else {
    amenityTrend = 'Tiện ích phù hợp với kỳ vọng';
  }

  // Calculate risks (thresholds for warnings)
  const budgetRisk = higherPricePercentage > 50; // Budget risk if >50% experienced higher prices
  const crowdRisk = crowdedPercentage > 60; // Crowd risk if >60% experienced crowds
  const waitTimeRisk = longWaitPercentage > 40; // Wait time risk if >40% experienced long waits
  const amenityRisk = notMatchedPercentage > 30; // Amenity risk if >30% didn't match expectations

  return {
    crowdTrend,
    waitTimeTrend,
    priceTrend,
    amenityTrend,
    totalExperiences: total,
    crowdDistribution,
    waitTimeDistribution,
    priceDistribution,
    amenityDistribution,
    risks: {
      budgetRisk,
      crowdRisk,
      waitTimeRisk,
      amenityRisk,
    },
  };
}
