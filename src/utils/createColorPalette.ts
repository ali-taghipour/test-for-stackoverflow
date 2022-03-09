import ColorScale from "color-scales";

export const createColorPalette = (bufferValueArray) => {
  const colorsRange = new Map<number, string>();
  if (bufferValueArray.value.length > 0) {
    let numbers = [];
    bufferValueArray.value.forEach((row) => {
      row.forEach((item) => {
        numbers.push(item[1]);
      });
    });

    for (let i = 0; i < numbers.length; i++) {
      // Last i elements are already in place
      for (let j = 0; j < numbers.length - i - 1; j++) {
        // Checking if the item at present iteration
        // is greater than the next iteration
        if (numbers[j] > numbers[j + 1]) {
          // If the condition is true then swap them
          var temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }
    const numbersSet = new Set(numbers);
    const colors = new ColorScale(
      1,
      numbersSet.size,
      ["#aaaaf8", "#a5efb3", "#f8aaaa"],
      1
    );

    let indexOfnumbersSetItraiting = 0;
    numbersSet.forEach((number) => {
      colorsRange.set(
        number,
        colors.getColor(indexOfnumbersSetItraiting).toHexString()
      );
      indexOfnumbersSetItraiting += 1;
    });
  }

  return colorsRange;
};
