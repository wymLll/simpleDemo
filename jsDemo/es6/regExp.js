{
  let str = '1150000'
    .split('')
    .reverse()
    .join('')
    .replace(/(\d{3})(?=[^$])/g, '$1,')
    .split('')
    .reverse()
    .join('');
  let str1 = '115000'.replace(/(\d{3})(?![^$])/g, '$1,');
  let str2 = '115000'.replace(/(\d{3})/g, '$1,');
  let str3 = '1150'
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

  let number = 1150000;
  console.log(number.toLocaleString()); //1,150,000

  let pattern = /(\d{3})(?=d)/i;
  console.log(pattern.test('111111d')); //true
  console.log(pattern.test('111d111d')); //true
}
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
