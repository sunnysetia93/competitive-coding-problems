/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permuteUnique = function(nums) {
//     const result = [];
//     const set = new Set();

//     const permute = (arr,res=[]) => {
//         if(res.length === nums.length){
//             const sortedKey = res.join('_');
//             if(!set.has(sortedKey)){
//                 set.add(sortedKey);
//                 result.push(res);
//             }
//             return;
//         }

//         for(let i=0;i<arr.length;i++){
//             // const newArr = arr.filter(x=>x!=arr[i]);
//             const newArr = arr.slice(0,i).concat(arr.slice(i+1));
//             permute(newArr,[...res,arr[i]]);
//         }
//     }

//     permute(nums,[]);
//     return result;
// };

var permuteUnique = function(nums) {
    nums.sort((a,b)=>a-b)
    let res = []

    let iterate = (arr,temp) =>{
        if(arr.length == 1){
            res.push([...temp,arr[0]])
            return;
        }
        for(let i =0;i<arr.length;i++){
            if(arr[i] == arr[i-1]) continue;
            iterate(arr.filter((num,idx)=>idx !=i),[...temp,arr[i]])
        }
    }
    iterate(nums,[])
    return res
};
