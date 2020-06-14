let n = 49;

switch(true) {
  case (100 >= n) && n  >= 90:
    console.log('A');
    break;
  case n >= 80 :
    console.log('B');
    break;
  case n >= 70:
    console.log('C');
    break;
  case n >= 60:
    console.log('D');
    break;
  case n >= 50:
    console.log('E');
    break;
  case 50 > n > 0 :
    console.log('F');
    break;
  default:
    console.log('error');
}