triy = 'bala';
function isPalindrome (str){
/*   if (typeof(str) == string){continue}
   else{break}*/
  for(let i =0; i < str.length; i += 1){
    arr = str.charAt(i)
    console.log(arr)

  }
  for(let j = str.length -1 ; j >= 0; j-=1){
    arr2 = str.charAt(j)
    console.log(arr2)
    
  }
  if(arr===arr2){
    return console.log(true)
  }
  else{
    return console.log(false)}
}
isPalindrome(triy)
typeof(arr)