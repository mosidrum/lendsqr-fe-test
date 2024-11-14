export const formatToNaira = (digit?: number) => {
  if (digit == null) return '';
  return `N${digit.toLocaleString()}`;
};
