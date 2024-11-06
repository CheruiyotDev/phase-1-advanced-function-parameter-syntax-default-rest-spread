function discountedAndTaxedPrice(itemPrice, tax, discount = 0.25) {
  let subtotal = itemPrice - itemPrice * discount;
  return subtotal + subtotal * tax;
}

discountedAndTaxedPrice(100, 0.1);
console.log(discountedAndTaxedPrice(100, 0.1, 0.2));

function add(a, b, c) {
  return a + b + c;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(...arr);
console.log(add(...arr));

const muppets = ['Dr. Bunson', 'Beaker', 'Miss Piggy', 'Kermit', 'Animal'];

function muppetLab(a, b, ...muppets) {
  console.log(a, b);
  console.log(muppets);
}

muppetLab('a', 'b', ...muppets);
