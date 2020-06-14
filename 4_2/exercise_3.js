let n = 7;
const star = '*';
const space = ' ';

arr=[]
for (let i=0;i<n;i++){
  arr.push(space)
}   


for (i = 1; i <= n ; i+=1){
  arr[arr.length - i] = star;
  console.log(arr.join(''))
}

