const a = 'a';
const b = 'b';

// 方法一：
const str1 = a + b;
// 方法二：
const str2 = a.concat(b);
// 方法三：
const str3 = [a,b].join('');
// 方法四
const str4 =  `${a}${b}`;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

