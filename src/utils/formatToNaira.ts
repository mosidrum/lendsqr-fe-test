export const formatToNaira = (digit?: number) => {
  if (!digit) return;
  return `N${digit.toLocaleString()}`;
};
