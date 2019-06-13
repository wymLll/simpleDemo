var promise = new Promise(function(resolve, reject){
    reject('OOPs1');
})

var p = promise.then(function fulfilled(v){
    console.log(v);
    new Promise(function(resolve, reject){
        reject('OOPs2');})
}).then(function fulfilled(v){
    console.log(v);
    new Promise(function(resolve, reject){
        reject('OOPs3');})
})

p.catch(handle);

function handle(v){
    console.log('cathe: ')
    console.log(v)
}