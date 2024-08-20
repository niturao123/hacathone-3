
function maxMin(numArr) {
    let max = maximum(numArr);
    let min = mimimun(numArr);
    return [min, max]; 
}

function maximum(numArr){
    let max = numArr[0];
    for (let i = 0; i < numArr.length; i++){ 
        if (numArr[i]>max) {
              max = numArr[i]
        }  
    }
    return max; 
}

    // console.log(maxMin([2,5,3,6,9])) //9
    // console.log(maxMin([2,5,3,6,19])) //19
    
    
    function mimimun(numArr) {
        let mim = numArr[0];
        for (let i = 1; i < numArr.length; i++) {
            if (numArr[i] < mim) {
                mim = numArr[i]
            }
        }
        return mim
    }
    // console.log(mimimun([2, 5, 3, 6, ,9])) //2
    // console.log(mimimun([1, 5, 3, 6, 19])) //1
    console.log(maxMin([2,3,5,7]))
    console.log(maxMin([25,,5,7]))
    


