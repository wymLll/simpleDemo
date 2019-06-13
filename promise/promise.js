class PromiseM{
    constructor(process){
        this.status = 'pending';
        this.msg = "pending";
        process(this.resolve.bind(this),this.reject.bind(this));
    }
    resolve(val){
        this.status = "fulfilled";
        this.msg = val;
    }
    reject(err){
        this.status = "rejected";
        this.msg = err;
    }

    then(fulfilled,rejected){
        if(this.status === 'fulfilled') {
            fulfilled(this.msg)
        }
        if(this.status === 'rejected') {
            rejected(this.msg)
        }
    }
}

const promise = new PromiseM((resolve,reject)=>{
    resolve("xxx");
});

promise.then(success=>{
    console.log(success);
},error=>{
    console.log(error);
})
