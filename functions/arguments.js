// Tip calculator

let getTotalWithTip = function (total, tipPercent = 20) {
  return total + (total * tipPercent/100)
}

let finalBill = getTotalWithTip(95, 10)
console.log(finalBill)