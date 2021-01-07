let gradeCalc = function (studentScore, totalScore) {
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

console.log(gradeCalc(15,25))