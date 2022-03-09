export const convertRowToNumberArray = (row) => {
  const numberArray: number[] = [];
  row.forEach((cell) => {
    numberArray.push(cell[1]);
  });

  return numberArray;
};
