function findUsingCountArray(arr){
    let len = arr.length;
    let countArray = new Array(len+1).fill(0);
    for(let i=0;i<len;i++){
        countArray[arr[i]]++;
    }
    let repeating = -1;
    let missing = -1;
    for(let i=1;i<=len;i++){
        if(countArray[i]===0)
            missing=i;
        if(countArray[i]>1)
            repeating=i;
    }
    return {missing,repeating}
}

function findUsingXOR(arr){
    let len = arr.length;
    let x=0;
    let y=0;
    let setBitNo;
    let xor1 = arr[0];
    for(let i=1;i<len;i++){
        xor1^=arr[i];
    }

    for(let i=1;i<=len;i++){
        xor1^=i;
    }
    setBitNo = xor1 & ~(xor1 - 1);

    for(let i=0;i<len;i++){
        if((arr[i] & setBitNo)!=0){
            x^=arr[i];
        }
        else
            y^=arr[i];
    }

    for(let i=1;i<=len;i++){
        if((i & setBitNo)!=0){
            x^=i;
        }
        else
            y^=i;
    }
    return {
        missing:x,repeating:y
    }
}

(()=>{
    // let arr = [4, 3, 6, 2, 1, 1];
    let arr = [3,1,3];
    console.log(findUsingCountArray(arr));
    console.log(findUsingXOR(arr));
})();