function reverseNumber(num) {
    num = num.toString();
    
    if (num < 0) {
        num = Math.abs(num) + '';
        num = -num.split('').reverse().join('');
        return num;
    } else if (num > 0) {
        num = +num.split('').reverse().join('');
        return num;
    }
}

reverseNumber(-5448);
reverseNumber(478546);