const initialArray = [1, 2, 3, 4, 5];
const mutationArray = initialArray.map((element, index) => (element * index));
console.log(mutationArray)