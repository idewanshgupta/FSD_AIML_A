function register (cb){
    setTimeout(()=>{
    console.log("register here")
    cb();
    }, 1000);
}
function login(cb){
    setTimeout(()=>{
    console.log("login here")
    cb();
    }, 2000);
}
function getData(cb){
    setTimeout(()=>{
    console.log("fetch data")
    cb();
    }, 3000);
}
function displayData(){setTimeout(()=>{
    console.log("display data")
}, 4000);}
function waitforinput(){
    const ct= Date.now();
    const ms=ct+delay;
    while(Date.now()<ms){}
}
register(() => {
    login(() => {
        getData(() => {
            displayData();
        })
    })
})

console.log("call another app");