module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr = ['','ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let h = Math.trunc(number / 100);
    let d = Math.trunc((number % 100) / 10);
    let u = number % 10;  
  
    let a = numbers[u];
    let b = arr[d];
    let c = `${numbers[h]} hundred`;
    let x
  //   console.log(number - h * 100)
    if (u == 0) x = b;
    else if (number - h * 100 < 20 || d < 2) x = numbers[number - h * 100];  
    else x = `${b} ${a}`
  
  //   console.log(x)
    if (number < 20) return numbers[number];
    if (number < 100) return x;
    else return number % 100 !== 0 ? `${c} ${x}` : c ;
  }
  
  // console.log(toReadable(900))
  // console.log(toReadable(910))
