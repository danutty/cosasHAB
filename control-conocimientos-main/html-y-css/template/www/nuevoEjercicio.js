//92645
//9 + 2= 11
//4 + 5 = 9

function isbalanced(num) {
  const middleIndex = (num.length - 1) / 2;
  let leftSum = 0;
  let rightSum = 0;
  if (num.length % 2 !== 0) {
    for (let leftIndex = 0; leftIndex < middleIndex; leftIndex++) {
      const currentNum = +num[leftIndex];
      leftSum += currentNum;
    }
    console.log(leftSum);

    for (
      let rightindex = middleIndex + 1;
      rightindex < num.length;
      rightindex++
    ) {
      const currentNum = +num[rightindex];
      rightSum += currentNum;
    }
    return leftSum === rightSum;
  }
}
console.log(isbalanced('413023'));
