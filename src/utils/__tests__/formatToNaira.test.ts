import { formatToNaira } from '../formatToNaira';

describe('formatToNaira', () => {
  const testCases: { input: number | undefined; expected: string }[] = [
    { input: 1200, expected: 'N1,200' },
    { input: 0, expected: 'N0' },
    { input: 5000000, expected: 'N5,000,000' },
    { input: undefined, expected: '' },
    { input: 123.45, expected: 'N123.45' }
  ];

  testCases.forEach(({ input, expected }) => {
    it(`returns "${expected}" for input "${input}"`, () => {
      expect(formatToNaira(input)).toBe(expected);
    });
  });
});
