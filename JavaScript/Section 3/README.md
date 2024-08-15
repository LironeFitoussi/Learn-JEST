# Introduction to Unit Testing

## Overview

In this lesson, we'll dive into the basics of unit testing and automated tests in general. We've already covered the necessary tools, including V-test, which serves as both a test runner and an assertion library. Now, let's explore how to create and write effective unit tests.

## What You'll Learn

1. How to write unit tests
2. How to state your expectations in tests
3. How to define success and failure criteria for tests
4. The AAA pattern: Arrange, Act, and Assert
5. What you should test
6. How to organize your tests when testing multiple units

## Writing Unit Tests

Unit tests are the foundation of a solid testing strategy. They focus on testing individual units or components of your code in isolation. Here's a basic example of what a unit test might look like:

```javascript
import { expect, test } from 'vitest'
import { sum } from './math'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

In this example, we're testing a `sum` function to ensure it correctly adds two numbers.

## Stating Expectations

In unit tests, you state your expectations about how your code should behave. This is typically done using assertion methods provided by your testing framework. For example:

```javascript
expect(result).toBe(expectedValue)
expect(array).toContain(item)
expect(functionCall).toThrow(ErrorType)
```

## Defining Success and Failure

A test passes when all assertions within it are true. If any assertion fails, the entire test fails. This helps you quickly identify which parts of your code are not behaving as expected.

## The AAA Pattern

When writing tests, it's helpful to follow the AAA pattern:

1. **Arrange**: Set up the test data and conditions
2. **Act**: Perform the action being tested
3. **Assert**: Check if the result matches the expectation

Here's an example:

```javascript
test('user registration', () => {
  // Arrange
  const user = { username: 'testuser', email: 'test@example.com' }
  
  // Act
  const result = registerUser(user)
  
  // Assert
  expect(result.success).toBe(true)
  expect(result.userId).toBeDefined()
})
```

## What to Test

Focus on testing:
- Core functionality
- Edge cases
- Error handling
- Boundary conditions

Don't test:
- Framework or library internals
- Implementation details that might change

## Organizing Your Tests

When testing multiple units, organize your tests in a way that mirrors your source code structure. For example:

```
src/
  ├── math/
  │   ├── arithmetic.js
  │   └── geometry.js
  └── user/
      └── auth.js
tests/
  ├── math/
  │   ├── arithmetic.test.js
  │   └── geometry.test.js
  └── user/
      └── auth.test.js
```

This structure makes it easy to find and maintain tests as your project grows.

## Conclusion

Unit testing is a crucial skill for ensuring the reliability and maintainability of your code. By following these principles and practices, you'll be well on your way to writing effective unit tests that catch bugs early and give you confidence in your code.