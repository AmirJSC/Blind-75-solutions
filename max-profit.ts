type MaxProfit = (prices: number[]) => number;

// Brute force
const maxProfit1: MaxProfit = (prices) => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

const maxProfit2: MaxProfit = (prices) => {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    let price = prices[i];
    if (price < min) {
      min = price;
    } else {
      let profit = price - min;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};
