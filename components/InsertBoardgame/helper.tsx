export const getRangeArray = ([start, end]: number[]) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};
