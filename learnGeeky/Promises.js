function showSomeRespect(callback) {
    let greeting = "Hi there! You will your result shortly!";
    const arr = [90, 203, 24, 564, 343];
    console.log(greeting);
    setTimeout(()=>{
        callback(arr)
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.error(err);
        })
    }, 2000);
}
const promiseChecker = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        if(arr.some(num => num%2!=0)) {
            reject("Hi, yeah I do have some odds");
        } else {
            resolve("Oh! I don't have any! Ha !!");
        }},2000);
    })
}
showSomeRespect(promiseChecker)
console.log("5"+3)