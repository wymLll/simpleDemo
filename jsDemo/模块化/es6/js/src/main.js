import { foo, bar } from './module1';
import { DATA_ARR } from './module1';
import { fun1, fun2 } from './module2';
import person from './module3';

import $ from 'jquery';

$('body').css('background', 'red');

foo();
bar();
console.log(DATA_ARR);
fun1();
fun2();

console.log('bef----', person.name);
person.setName('JACK');
console.log('set----', person.name);
