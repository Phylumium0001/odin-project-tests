function capitalise(string) {
  return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
}

function reverse_string(string) {
  let new_array = "";
  for (let index = string.length - 1; index >= 0; index--) {
    new_array += string[index];
  }
  return new_array;
}

const calculator = () => {
  function add(a, b) {
    return a + b;
  }
  function substract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  return { add, substract, multiply, divide };
};

function ceasar_cipher(string, factor) {
  let new_str = "";
  for (let index = 0; index < string.length; index++) {
    // Get char
    const code = string[index].charCodeAt() + factor;
    new_str += String.fromCharCode(code);
  }
  return new_str;
}

function analyse_array(array) {
  let min = array[0];
  let max = array[0];
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element <= min) {
      min = element;
    }
    if (element >= max) {
      max = element;
    }
    sum += element;
  }
  const obj = {
    min: min,
    max: max,
    average: Math.round(sum / array.length),
    length: array.length,
  };
  return obj;
}
analyse_array([1, 5, 3, 6, 7, 8]);
module.exports = {
  analyse_array,
  ceasar_cipher,
  capitalise,
  calculator,
  reverse_string,
};
