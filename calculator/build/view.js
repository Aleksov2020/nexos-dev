/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
var myChart;
var totalValue;
var profit;
var profitPercent;
var maxYearsCount = 0;
var selectedYearsCount = 0;
document.addEventListener("DOMContentLoaded", function () {
  onChangeRangeInput();
  loadSliderProgress();
  let prices = getPrices();
  loadData(prices, true);
  document.getElementById('initial-range').addEventListener('input', function () {
    loadData(prices, false);
  });
  document.getElementById('monthly-range').addEventListener('input', function () {
    loadData(prices, false);
  });
  document.getElementById('years-range').addEventListener('input', function () {
    loadData(prices, false);
  });
});
function onChangeRangeInput() {
  var initialInput = document.getElementById('initial-range');
  var inititalValueDisplay = document.getElementById('initial-out');
  initialInput.addEventListener('input', function () {
    inititalValueDisplay.textContent = initialInput.value;
  });
  var monthlyInput = document.getElementById('monthly-range');
  var monthlyValueDisplay = document.getElementById('monthly-out');
  monthlyInput.addEventListener('input', function () {
    monthlyValueDisplay.textContent = monthlyInput.value;
  });
  var yearsInput = document.getElementById('years-range');
  var yearsValueDisplay = document.getElementById('year-out');
  yearsInput.addEventListener('input', function () {
    yearsValueDisplay.textContent = yearsInput.value;
  });
}
function loadSliderProgress() {
  for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }
}
function createTotal(prices, initial) {
  let balance = parseInt(initial);
  let totalCoinsCount = 0;
  let totalSummCount = 0;
  let lastPrice = 0;
  let totalResult = {};
  let moneyResult = {};
  console.log(-(selectedYearsCount * 12));
  const pricesSliceKeys = Object.keys(prices).slice(-(selectedYearsCount * 12));
  const pricesSlice = pricesSliceKeys.reduce((acc, key) => {
    acc[key] = prices[key];
    return acc;
  }, {});
  console.log(prices);
  console.log(pricesSlice);
  for (let monthData in pricesSlice) {
    let countCoins = balance / prices[monthData];
    totalCoinsCount += countCoins;
    totalSummCount += balance;
    lastPrice = pricesSlice[monthData];
    totalResult[monthData] = totalCoinsCount * pricesSlice[monthData];
    moneyResult[monthData] = totalSummCount;
    balance = parseInt(document.getElementById('monthly-range').value);
  }
  document.getElementById('total-val').textContent = totalSummCount;
  document.getElementById('profit-val').textContent = parseInt(totalCoinsCount * lastPrice - totalSummCount);
  document.getElementById('percent-val').textContent = parseInt(totalCoinsCount * lastPrice / totalSummCount * 100);
  return [totalResult, moneyResult];
}
function loadData(prices, firstLaunch) {
  let max_years_count = parseInt(Object.keys(prices).length / 12);
  document.getElementById('year-max').textContent = max_years_count;
  document.getElementById('years-range').max = max_years_count;
  maxYearsCount = max_years_count;
  selectedYearsCount = document.getElementById('years-range').value;
  let initial = document.getElementById('initial-range').value;
  let generatedData = createTotal(prices, initial);
  let labels = Object.keys(generatedData[0]);
  let data1 = Object.values(generatedData[0]);
  let data2 = Object.values(generatedData[1]);
  if (firstLaunch) {
    myChart = createChart(data1, data2, labels);
  } else {
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = Object.values(generatedData[1]);
    myChart.data.datasets[1].data = Object.values(generatedData[0]);
    myChart.update();
  }
}
function createChart(data1, data2, labels) {
  let ctx = document.getElementById('myChart').getContext('2d');
  const CHART_AREA = true;
  const TICKS = true;
  let screenWidth = window.innerWidth;
  if (screenWidth < 1024) {
    // Если ширина экрана меньше 768px (например, это мобильное устройство)
    chartWidth = 300; // Устанавливаем ширину графика для мобильных устройств
    chartHeight = 400; // Устанавливаем высоту графика для мобильных устройств
  } else {
    chartWidth = 600; // Устанавливаем ширину графика для десктопных устройств
    chartHeight = 400; // Устанавливаем высоту графика для десктопных устройств
  }
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Investment Amount',
        data: data2,
        borderColor: '#003399',
        backgroundColor: 'rgba(0, 51, 153, 0.5)',
        borderWidth: 2,
        fill: true
      }, {
        label: 'Profit',
        data: data1,
        borderColor: 'rgba(118, 156, 232, 1)',
        backgroundColor: 'rgba(118, 156, 232, 0.5)',
        borderWidth: 2,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      width: chartWidth,
      height: chartHeight,
      scales: {
        x: {
          border: {
            display: false
          },
          grid: {
            display: false,
            drawOnChartArea: CHART_AREA,
            drawTicks: TICKS
          },
          ticks: {
            maxRotation: 45,
            // Максимальный угол поворота меток
            minRotation: 45,
            // Минимальный угол поворота меток
            stepSize: 5,
            // Шаг между метками (пример: каждая вторая метка
            min: 0,
            max: 5
          }
        },
        y: {
          min: 0,
          border: {
            display: true
          },
          grid: {
            color: function () {
              return 'rgba(231, 231, 231, 1)';
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      interaction: {
        mode: 'index',
        intersect: false
      },
      radius: 0
    }
  });
}
function getPrices() {
  return {
    "01.01.2018": 150,
    "01.02.2018": 290,
    "01.03.2018": 310,
    "01.04.2018": 400,
    "01.05.2018": 310,
    "01.06.2018": 400,
    "01.07.2018": 100,
    "01.08.2018": 150,
    "01.09.2018": 140,
    "01.10.2018": 170,
    "01.11.2018": 220,
    "01.01.2019": 150,
    "01.02.2019": 290,
    "01.03.2019": 310,
    "01.04.2019": 400,
    "01.05.2019": 310,
    "01.06.2019": 400,
    "01.07.2019": 100,
    "01.08.2019": 150,
    "01.09.2019": 140,
    "01.10.2019": 170,
    "01.11.2019": 220,
    "01.01.2020": 150,
    "01.02.2020": 290,
    "01.03.2020": 310,
    "01.04.2020": 400,
    "01.05.2020": 310,
    "01.06.2020": 400,
    "01.07.2020": 100,
    "01.08.2020": 150,
    "01.09.2020": 140,
    "01.10.2020": 170,
    "01.11.2020": 220,
    "01.01.2021": 150,
    "01.02.2021": 290,
    "01.03.2021": 310,
    "01.04.2021": 400,
    "01.05.2021": 310,
    "01.06.2021": 400,
    "01.07.2021": 100,
    "01.08.2021": 150,
    "01.09.2021": 140,
    "01.10.2021": 170,
    "01.11.2021": 220,
    "01.12.2021": 130,
    "01.01.2022": 150,
    "01.02.2022": 290,
    "01.03.2022": 310,
    "01.04.2022": 400,
    "01.05.2022": 310,
    "01.06.2022": 400,
    "01.07.2022": 100,
    "01.08.2022": 150,
    "01.09.2022": 140,
    "01.10.2022": 170,
    "01.11.2022": 220,
    "01.12.2022": 130,
    "01.01.2023": 150,
    "01.02.2023": 290,
    "01.03.2023": 310,
    "01.04.2023": 400,
    "01.05.2023": 310,
    "01.06.2023": 400,
    "01.07.2023": 100,
    "01.08.2023": 150,
    "01.09.2023": 140,
    "01.10.2023": 170,
    "01.11.2023": 220,
    "01.12.2023": 130,
    "01.01.2024": 150,
    "01.02.2024": 290,
    "01.03.2024": 310,
    "01.04.2024": 400
  };
}
/* eslint-enable no-console */
/******/ })()
;
//# sourceMappingURL=view.js.map