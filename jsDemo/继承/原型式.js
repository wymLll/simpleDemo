/**
 * 借助object函数 | Object.creat
 * 相当于创建了一个person对象的副本
 */

 function object(proto){
     function F(){};
     F.prototype = proto;
     return new F()
 }

 var person = {
     name: 'alei',
     friends: ['nannan', 'xuxu']
 }

 var person1 = object(person);
 person1.name = 'leia'
 person1.friends.push('yeye')

 console.log(person1.name) //leia

 var person2 = object(person);
 person2.name = 'laie'
 person2.friends.push('yuan')

 console.log(person2.name)// laie

//缺点：共享
 console.log(person.friends) //[ 'nannan', 'xuxu', 'yeye', 'yuan' ]