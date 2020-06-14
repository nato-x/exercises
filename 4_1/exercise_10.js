const custo = 10, preco = -20, estoque = 1000;
let lucro, imposto;

imposto = custo * 0.2
lucro = preco - custo - imposto;

if(0 >  custo || 0 > preco || 0 > estoque){
  console.log('error');
   
}
else{
  console.log(lucro*estoque)}  
