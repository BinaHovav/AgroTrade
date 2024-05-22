// Generic function
export function identity<T>(value: T): T {
  return value;
}

// Using the generic function with different types
const numberValue = identity<number>(42);
const stringValue = identity<string>('Hello, TypeScript!');
const booleanValue = identity<boolean>(true);

console.log(numberValue); // Output: 42
console.log(stringValue); // Output: Hello, TypeScript!
console.log(booleanValue); // Output: true
