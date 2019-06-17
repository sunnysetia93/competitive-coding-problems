// input "This is an exam"
// output should be "an exam is This" i.e., based on words in alphabetical order, length should be considered at the last.

let input = "This is an exam";
let arr = input.split(" ");

arr.sort((x,y)=>{
    a=x.toLowerCase().split("");
    b=y.toLowerCase().split("");
    let i=0;
    while(i<a.length && i<b.length){
        if(a[i]<b[i])
            return -1;  // negative means x should come before y
        else if(a[i]>b[i])
            return 1;   // positive means y should come before x

        i++;
    }

    if(x.length>y.length)
        return -1
    else if(x.length<y.length)
        return 1;
    else 
        return 0;   // 0 means no change
    
});

console.log(arr.join(" "));