import { capitalizeFirstLetter } from '../capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
  const testCases = [
    { input: '', expected: '' },
    { input: 'hello', expected: 'Hello' },
    { input: '0123', expected: '0123' },
    { input: 'javascript', expected: 'Javascript' },
    { input: 'react', expected: 'React' },
    { input: 'tESTING', expected: 'TESTING' },
    { input: ' a leading space', expected: ' a leading space' },
    { input: 'A', expected: 'A' },
    { input: 'multiple words here', expected: 'Multiple words here' }
  ];

  testCases.forEach(({ input, expected }) => {
    it(`returns "${expected}" for input "${input}"`, () => {
      expect(capitalizeFirstLetter(input)).toBe(expected);
    });
  });
});
