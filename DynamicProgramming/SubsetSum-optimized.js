let M = 3;
let arr = [7,4,1];

let sum=6;
let mat = [];
for(let m=0;m<2;m++){
    mat.push(new Array(sum+1).fill(false));
}

for(let r=0;r<=M;r++){
    for(let c=0;c<=sum;c++){
        if(c===0)
            mat[r%2][c]=true;
        else if(r===0)
            mat[r%2][c]=false;
        else if(arr[r-1]<=c){
            mat[r%2][c]=(mat[(r+1)%2][c-arr[r-1]] || mat[(r+1)%2][c]);
        }
        else{
            mat[r%2][c]=mat[(r+1)%2][c];
        }
    }
}
let isPossible = mat[M%2][sum]===true?"YES":"NO";
console.log(isPossible);