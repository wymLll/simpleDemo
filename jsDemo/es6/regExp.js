// {
//   const ncname2 = '[bc]*';
//   const exp2 = new RegExp(ncname2, 'i');
//   console.log(exp2.test('[bc]')); //true
//   console.log(exp2.test('bc')); //true
//   console.log(exp2.test('ad')); //true

//   console.log('33333333333333333');
//   const ncname3 = '\\[bc\\]*';
//   const exp3 = new RegExp(ncname3, 'i');
//   console.log(exp3.test('[bc]')); //true
//   console.log(exp3.test('bc')); //false
//   console.log(exp3.test('ad')); //false

//   console.log('444444444444444444');
//   const exp4 = /\\[bc\\]*/;
//   console.log(exp4.test('[bc]')); //false
//   console.log(exp4.test('bc')); //false
//   console.log(exp4.test('ad')); //false
//   console.log(exp4.test('\bc\\')); //true
//   console.log(exp4.test('\\bc\\')); //true
//   console.log(exp4.test('\\')); //true

//   console.log('555555555555555555');
//   const ncname5 = '[bc]*.';
//   const exp5 = new RegExp(ncname5, 'i');
//   console.log(exp5.test('[bc]')); //true
//   console.log(exp5.test('bc')); //true
//   console.log(exp5.test('a')); //true

//   console.log('66666666666666666');
//   const exp6 = /[bc]*./i;
//   console.log(exp6.exec('[bc]')[0]); //[
//   console.log(exp6.exec('bc')[0]); //bc
//   console.log(exp6.exec('a')[0]); //a

//   console.log('77777777777777777');
//   const exp7 = /[bc]*./g;
//   console.log(exp7.exec('a')[0]); //a
//   console.log(exp7.exec('[bc]')[0]); //bc
//   console.log(exp7.test('bc')); //false
// }

var str = '1150000'
  .split('')
  .reverse()
  .join('')
  .replace(/(\d{3})(?=[^$])/g, '$1,')
  .split('')
  .reverse()
  .join('');
var str1 = '115000'.replace(/(\d{3})(?![^$])/g, '$1,');
var str2 = '115000'.replace(/(\d{3})/g, '$1,');
var str3 = '1150'
  .split('')
  .reverse()
  .join('')
  .replace(/(\d{3})/g, '$1,')
  .split('')
  .reverse()
  .join('');
console.log(str); //1,150,000
console.log(str1); //115000,
console.log(str2); //115,000,
console.log(str3); //1,150

var number = 1150000;
console.log(number.toLocaleString()); //1,150,000

var pattern = /(\d{3})(?=d)/i;
console.log(pattern.test('111111d')); //true
console.log(pattern.test('111d111d')); //true

console.log('win-Jquery'.toLocaleUpperCase()); //WIN-JQUERY
console.log('win-Jquery'.toUpperCase()); //WIN-JQUERY
console.log('win-Jquery'.toLocaleLowerCase()); //win-jquery
console.log('win-Jquery'.toLowerCase()); //win-jquery

{
  //非全局情况
  let reg = /a(c)b/;
  const str = 'acbzacbzabz';
  console.log(reg.exec(str));
  console.log(reg.lastIndex); //0
  console.log(reg.exec(str));
  console.log(reg.lastIndex); //0
  //[ 'acb', 'c', index: 0, input: 'acbzacbzabz', groups: undefined ]
  //[ 'acb', 'c', index: 0, input: 'acbzacbzabz', groups: undefined ]
}
{
  //全局情况
  let reg = /a(c)b/g;
  const str = 'acbzacbzabz';
  console.log(reg.lastIndex); //0
  console.log(reg.exec(str));
  console.log(reg.lastIndex); //3
  console.log(reg.exec(str));
  console.log(reg.lastIndex); //7
  console.log(reg.exec(str)); //null
  console.log(reg.lastIndex); //0
  console.log(reg.exec(str));
  console.log(reg.lastIndex); //3

  console.log(reg.test(str)); //true
  console.log(reg.lastIndex); //7
  console.log(reg.test(str)); //false
  console.log(reg.lastIndex); //0
  console.log(reg.test(str)); //true
  console.log(reg.lastIndex); //3
  //[ 'acb', 'c', index: 0, input: 'acbzacbzabz', groups: undefined ]
  //[ 'acb', 'c', index: 4, input: 'acbzacbzabz', groups: undefined ]
  //null
  //[ 'acb', 'c', index: 0, input: 'acbzacbzabz', groups: undefined ]
}
