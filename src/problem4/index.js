// Iterative approach
function sum_to_n_iterative(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Formula approach
function sum_to_n_formula(n) {
  // Sum of first n natural numbers formula: n * (n + 1) / 2
  return (n * (n + 1)) / 2;
}

// Recursive approach
function sum_to_n_recursive(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + sum_to_n_recursive(n - 1);
  }
}

// Example usage and testing
const n = 5;
console.log(`Iterative sum_to_n(${n}):`, sum_to_n_iterative(n));
console.log(`Formula sum_to_n(${n}):`, sum_to_n_formula(n));
console.log(`Recursive sum_to_n(${n}):`, sum_to_n_recursive(n));
