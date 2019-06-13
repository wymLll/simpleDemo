const ajaxGet = function(url, async){
    const xhr = new XMLHttpRequest();
    return new Promise((resolve,reject)=>{
        xhr.open("GET", url, async);
        xhr.onreadystatechange = function(){
            if(this.readyState !== 4) return;
            if(this.status === 200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        }
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept',"application/json");
        xhr.send();
    })
}