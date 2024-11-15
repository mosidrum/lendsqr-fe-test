import { textToLowerCase } from '../textToLowerCase';

describe('textToLowerCase', () => {
  const testCases: { input: string; expected: string }[] = [
    { input: 'Hello', expected: 'hello' },
    { input: 'WORLD', expected: 'world' },
    { input: 'JavaScript', expected: 'javascript' },
    { input: '123ABC', expected: '123abc' },
    { input: 'Mixed CASE String', expected: 'mixed case string' },
    { input: 'ALL LOWERCASE', expected: 'all lowercase' },
    { input: '  leading and trailing spaces  ', expected: '  leading and trailing spaces  ' },
    { input: 'Special!@#$%^&*()_+Characters', expected: 'special!@#$%^&*()_+characters' },
    { input: '', expected: '' }
  ];

  testCases.forEach(({ input, expected }) => {
    it(`returns "${expected}" for input "${input}"`, () => {
      expect(textToLowerCase(input)).toBe(expected);
    });
  });
});
