function hasTargetSum(array, target) {
  // Write your algorithm here

  const testedValues = [];
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (testedValues.includes(target - currentValue)) {
      return true;
    }
    testedValues.push(currentValue);
  }
  return false;
}

/*
  Write the Big O time complexity of your function here
  O(n)
*/

/*
  Add your pseudocode here
  1. Create an empty array to store the tested values inside
  2. create a loop
  3. create a variable thet holds the value of the iteration
  4. make a condition that checks if the target minus is in the tested values array
  5. If it do that will return true
  6. If not push values in testedValues
  7. Return false
*/

/*
  Add written explanation of your solution here
  going through the array once and see if then values include the has the tageted value minus current value in our array and return true if its true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;