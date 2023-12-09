import { resultsData } from "./data.js";

// Calculate final result score
function calculateResultScore(data) {
  const totalScoresObject = data.reduce((total, currentObject) => total + currentObject.score, 0);
  const finalResult = Math.floor(totalScoresObject / data.length);
  return finalResult;
}

function renderResultsData(data) {
  const finalResultElement = document.querySelector('#final-score');
  finalResultElement.textContent = calculateResultScore(data);
  const categoryElements = document.querySelectorAll('[data-category]')
  console.log(categoryElements)
  // iterate over objects in data
  data.forEach(dataObj => {
    const { category, score, icon } = dataObj;
    // iterate over score categories
    categoryElements.forEach(el => {
      const targetCatElement = el.dataset.category;
      // target category and populate values
      if (targetCatElement === category.toLowerCase()) {
        const iconEl = document.querySelector(`#icon-${targetCatElement}`)
        iconEl.src = icon;
        const scoreEl = document.querySelector(`#score-${targetCatElement}`)
        scoreEl.textContent = score;
      }
    })
  });

}

renderResultsData(resultsData)