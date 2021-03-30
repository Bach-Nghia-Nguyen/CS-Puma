/**
 * Arrow functions
 */
function multiArgument() {
  const divide = (a, b) => a / b;
  return divide(40, 10);
}
// console.log(multiArgument());

function spreadWithArrow() {
  const asArray = (...args) => args;
  return asArray(1, 2, 3, 4);
}
// console.log(spreadWithArrow());

function withObject() {
  const getObject = (favoriteCandy) => {
    return { favoriteCandy };
  };
  return getObject("twix");
}
// console.log(withObject());

function withMultiLineExpression() {
  const getString = (name) => {
    return `Hello there ${name} 
    How are you doing today?`;
  };
  return getString("Ryan");
}
// console.log(withMultiLineExpression());

function curryAdd() {
  const curryAddition = (a) => (b) => (c) => a + b + c;

  return curryAddition(9)(3)(5);
}
console.log(curryAdd());
