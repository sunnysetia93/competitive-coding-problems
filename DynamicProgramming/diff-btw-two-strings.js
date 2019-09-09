// Diff Between Two Strings
// Given two strings of uppercase letters source and target, list (in string form) a sequence of edits to convert from source to target that uses the least edits possible.

// For example, with strings source = "ABCDEFG", and target = "ABDFFGH" we might return: ["A", "B", "-C", "D", "-E", "F", "+F", "G", "+H"

// More formally, for each character C in source, we will either write the token C, which does not count as an edit; or write the token -C, which counts as an edit.

// Additionally, between any token that we write, we may write +D where D is any letter, which counts as an edit.

// At the end, when reading the tokens from left to right, and not including tokens prefixed with a minus-sign, the letters should spell out target (when ignoring plus-signs.)

// In the example, the answer of A B -C D -E F +F G +H has total number of edits 4 (the minimum possible), and ignoring subtraction-tokens, spells out A, B, D, F, +F, G, +H which represents the string target.

// If there are multiple answers, use the answer that favors removing from the source first.


function diffBetweenTwoStrings(source, target) {
	/**
	@param source: string
	@param target: string
	@return: string[]
  */
  let sourceLen = source.length;
  let targetLen = target.length;
  let dp = new Array(sourceLen+1);
  for(let i=0;i<=sourceLen;i++){
    dp[i]=new Array(targetLen+1);
  }
  for(let i=0;i<=sourceLen;i++){
    for(let j=0;j<=targetLen;j++){
      if(i==0)
        dp[i][j]=target.substring(0,j).split("");
      else if(j==0)
        dp[i][j]=source.substring(0,i).split("");
      else if(source.charAt(i-1) === target.charAt(j-1)){
        let arr=dp[i-1][j-1];
        dp[i][j]=[...arr,source.charAt(i-1)];
      }
      else{
        let arr1 = dp[i][j-1];
        let arr2 = dp[i-1][j];
        if(arr1.length>arr2.length){
          dp[i][j]=[...arr2,"-"+source.charAt(i-1)];
        }
        else{
          dp[i][j]=[...arr1,"+"+target.charAt(j-1)];
        }
      }
    }
  }
  return dp[sourceLen][targetLen];
}
console.log(diffBetweenTwoStrings("ABCDEFG","ABDFFGH"));
