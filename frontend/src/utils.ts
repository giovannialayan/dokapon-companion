const numberStrArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const CheckNumberInput = (input: string, callback: (p: number) => void) => {
  if (numberStrArr.includes(input[input.length - 1])) {
    callback(+input);
  } else if (input == '') {
    callback(0);
  }
};

export { CheckNumberInput };
