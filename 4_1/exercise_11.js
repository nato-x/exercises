const salBrt = 3000;
let inss, ir, sll;

switch (true) {
  case salBrt <= 1556.94:
    inss = salBrt * 0.08;
    console.log(inss);
    break;
  case 1556.94 < salBrt < 2594.93:
    inss = salBrt * 0.09;
    console.log(inss);
    break;
  case 2594.93 <= salBrt <= 5189.82:
    inss = salBrt * 0.11;
    console.log(inss);
    break;
  default:
    inss = 570.88;
    console.log(inss);
}

sll = salBrt - inss;
console.log(inss, sll)

switch (true) {
  case salBrt <= 1903.98:
    ir = 0
    console.log(ir);
    break;
  case 1903.99 <= salBrt <= 2826.65:
    ir = sll * 0.075 - 142.8;
    console.log(ir);
    break;
  case 2826.66 <= salBrt <= 3751.05:
    ir = sll * 0.15 - 354.8;
    console.log(ir);
    break;
  case 3751.06 <= salBrt <= 4664.68:
    ir = sll * 0.225 - 636.13;
    console.log(ir);
    break;
  default:
    ir = sll * 0.275 - 869.36;
    console.log(ir);
}
sll -= ir;
console.log(sll)

