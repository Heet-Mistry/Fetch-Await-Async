let p =new Promise((resolve,reject)=> {
    let a= 1+2;  // we can use Api data for this purpose for this 
                //  depending on the a value the promise decide what to 
    if(a==2)
    {
        resolve('Success')
    }else{
        reject('Failed')
    }
})

p.then((message) => {
    console.log('this is in the ' + message);
}).catch((message)=>{
    console.log('This was a ' + message);
})