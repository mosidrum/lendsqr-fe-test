import { capitalizeFirstLetter } from '../capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
  it('returns an empty string when an empty string is passed', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  it('capitalizes the first letter of a non-empty string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });
});
