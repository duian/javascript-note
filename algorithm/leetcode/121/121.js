/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  // min代表目前股票出現的最低價，一開始用MAX_SAFE_INTEGER表示無限大
  var min = Number.MAX_SAFE_INTEGER;

  // 目前獲利
  var profit = 0;

  for(var i = 0; i < prices.length ; i++){
      // 找出最低點買進
      if(prices[i] < min){
          min = prices[i];
      }

      // 計算現在的價錢可以獲利多少
      var calProfit = prices[i] - min;
      // 現在的價錢賣出是否可以獲得更高的獲利
      if(calProfit > profit ){
          profit = calProfit;
      }
  }
  return profit;
};
