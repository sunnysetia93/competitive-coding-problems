let data = ''
process.stdin.on('data', c => data += c)
process.stdin.on('end', () => {
    const {EOL} = require('os')
    const lines = data.split(EOL)
    
    // number of days
    let days = parseInt(lines[0]);
    
    for(let i=1;i<((2*days));i+=2){
        
        let arr = lines[i].split(" ");
        let M = parseInt(arr[0]);
        
        // removing first element which is the array size
        arr.shift();
        
        // parse the array elements to int
        arr = arr.map((val)=>{ return parseInt(val)});
        // weight of pie
        let N = parseInt(lines[i+1]);
        
        let mat = []
        for(let m=0;m<=M;m++){
            let newArr = (new Array(N+1).fill(false));
            mat.push(newArr);
        }
        
        for(let r=0;r<=M;r++){
            for(let c=0;c<=N;c++){
                if(r===0 && c===0)
                    mat[r][c]=true;
                else if(r===0)
                    mat[r][c]=false;
                else if(arr[r-1]>c){
                    mat[r][c]=mat[r-1][c];
                }
                else{
                    mat[r][c]=(mat[r-1][c] || mat[r-1][c-arr[r-1]])
                }
            }
        }

        let isPossible = mat[M][N]===true?"YES":"NO";
        console.log(isPossible);
    }
})