function addall() {
    let add = 0;
    for (let i = 0; i < arguments.length; i++) {
        add += arguments[i]
    }
     return add
}
console.log(addall(2,8)) // 10
console.log(addall(2,8,5)) // 15