import converter from '../converter';

test('should work correct', () => {
  const result = converter('123');

  expect(result).toBe(123);
});

test('should show error', () => {
  function result() {
    converter('dddd');
  }
  expect(result).toThrow();
});

test('should show error', () => {
  function result() {
    converter('0x12');
  }
  expect(result).toThrow();
});
