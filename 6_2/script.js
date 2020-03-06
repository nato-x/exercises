let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

for (let i = 0 ; i < estados.length ; i += 1 ) {
  let option = document.createElement('option');
  option.innerHTML = estados[i];
  document.querySelector('#estado').appendChild(option);
}