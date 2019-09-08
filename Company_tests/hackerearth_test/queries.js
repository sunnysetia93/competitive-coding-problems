process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    let lines = input.split('\n');
    let testcases = lines[0];
    let totalLines = lines.length-1;
    for(let i=1;i<totalLines;i++){
        let [n,q]=lines[i].split(' ');
        n=parseInt(n);
        q=parseInt(q);
        i++;
        let arr = lines[i].split(' ').map(e=>parseInt(e));
        i++;
        let queries = lines[i].split(' ').map(e=>parseInt(e));
        queries = sortQueries(queries,arr);
        let count = 0;
        for(let q=0;q<queries.length;q++){
            let index = queries[q]
            let limitIndex = queries[q+1]; 
            let prevVal = (q)<=0?0:arr[queries[q-1]];
            let val = arr[index];
            if(q==queries.length-1){
                limitIndex=arr.length-1;
            }
            // console.log("index",index);
            // console.log("limit index",limitIndex);
            for(let j=(index+1);j<=limitIndex;j++){
                count++;
                // console.log(arr[j],val)
                if(arr[j]<val || arr[j]<prevVal)
                    arr[j]=0;
            }
        }
        // console.log("count",count);
        console.log(arr.join(" "));
    }
}

function sortQueries(queries,arr){
    let q = queries.sort((a,b)=>{
        if(arr[a]===arr[b])
            return a-b;
        else
            return arr[b]-arr[a]
    })
    return q;
}

