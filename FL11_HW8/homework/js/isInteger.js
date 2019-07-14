function isInteger(num) {
    return typeof num === 'number' && Number.isFinite(num) && !(num % 1);
  }

  isInteger(15);
  isInteger(17.2);