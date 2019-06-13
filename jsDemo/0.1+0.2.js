{
    // 精确计算0.1+0.2
    function formatFloat(float, n) {
      var fix = Math.pow(10, n); //  计算10的n次方
      return parseInt(float * fix, 10) / fix;
    }
    console.log(0.2 + 0.3 === 0.5); //true
    console.log(formatFloat(0.2, 1) + formatFloat(0.3, 1)); //0.5
    console.log(0.2 / 1 + 0.3 / 1); //0.5
  
    console.log(0.1 + 0.2 === 0.3); //false
    console.log(formatFloat(0.1, 1) + formatFloat(0.2, 1)); //0.30000000000000004
    console.log(1 / 10 + 2 / 10); //0.30000000000000004
    console.log((0.1 * 10) / 10 + (0.2 * 10) / 10); //0.30000000000000004
    console.log(0.1 / 1 + 0.2 / 1); //0.30000000000000004
  }
  