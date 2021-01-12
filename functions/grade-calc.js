let gradeCalc = function (studentScore, totalScore) {
  if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
    throw Error('Please provide a number for score and total')
  }
  let percentScore = (studentScore / totalScore) * 100
  let grade;
  let indefiniteArticle = 'a';
  if (percentScore >= 90) {
    grade = 'A'
    indefiniteArticle = 'an'
  } else if (percentScore >= 80) {
    grade = 'B'
  } else if (percentScore >= 70) {
    grade = 'C'
  } else if (percentScore >= 60) {
    grade = 'D'
  } else {
    grade = 'F'
    indefiniteArticle = 'an'
  }
  return `You got ${indefiniteArticle} ${grade} (${Math.round(percentScore)}%)!`
}

const score = true
const total = 25
let result

try {
  result = gradeCalc(score, total)
  console.log(result)
} catch (e) {
  console.log(e.message)
}