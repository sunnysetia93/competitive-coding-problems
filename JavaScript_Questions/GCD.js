function NaiveGCD(a,b){
    let maxDivisor = 0;
    let max = Math.max(a,b);
    for(let i=1;i<=max;i++){
        if((a%i)==0 && (b%i)==0)
            maxDivisor=i;
    }

    return maxDivisor;
}

function EuclidGCD(a,b){
    if(a==0)
        return b;
    if(a>b)
        return EuclidGCD(a%b,b);
    return EuclidGCD(b%a,a);
    
}

console.log(NaiveGCD(234,357));
console.log(EuclidGCD(234,357));

