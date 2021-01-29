const index: string = require('./index');

test('index should return \'Hello World\'', () => {
  expect(index).toBe('Hello World');
});