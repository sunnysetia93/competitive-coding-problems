function bruteForceSolution(arr,k){
    let len = arr.length;
    let pairs = [];
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(i!=j && (arr[i]+arr[j]===k)){
                pairs.push([arr[i],arr[j]]);
            }
        }
    }
    return pairs;
}

function hashingSolution(arr,k){
    let len = arr.length;
    let pairs = [];
    let obj={};

    for(let i=0;i<len;i++){
        let x=arr[i];
        let y = k-arr[i];
        obj[y]=x;
    }
    for(let x of arr){
        if(obj[x]!=null)
            pairs.push([x,obj[x]]);
    }
    return pairs;
}
function twoPointers(arr,k){
    let len = arr.length;
    let pairs = [];
    
    arr = arr.sort((a,b)=>a-b);

    let i=0,j=len-1;
    while(i!=j){
        let sum = arr[i]+arr[j];
        if(sum==k){
            pairs.push([arr[i],arr[j]]);
            i++;
            j--;
        }
        else if(sum<k)
            i++;
        else
            j--;
    }
    return pairs;
}
(()=>{
    let arr = [5,9,12,4,23,1];
    let k = 13;
    console.log(bruteForceSolution(arr,k));
    console.log(hashingSolution(arr,k));
    console.log(twoPointers(arr,k));
})();