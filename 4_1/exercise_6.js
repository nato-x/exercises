let p = "pawn";
let text="";

switch(p.toLowerCase()){
  case "king":
    text='1 sqr, every direction';
    break;
  case "bitshop":
    text='diagonals';
    break;
  case 'queen':
    text = "Any number diagonal, vertical and horizontal";
    break;
  case 'rook':
    text='Any number vertical and horizontal';
    break;
  case 'knight':
    text='L';
    break;
  case 'pawn':
    text='1 square front';
    break;

  default:
    text='error';
}
console.log(text)
