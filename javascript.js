//*BOTTONE CAMBIO TEMA
//* identifica la variabile link con la stringa 1, che indica il primo foglio di stile
let link='1';
//*definisce funzione la funzione cambia_href
function cambia_href(stile){
  //*definisce variabile 'linkstile' che prende l'elemento con id 'fogliodistile'
  let linkstile = document.getElementById('fogliodistile');
  //*se la variabile link è uguale a 1
  if (link=='1'){
    //*allora cambio href della variabile linkstile
    linkstile.href = "fogliostile-2.css";
    link = '2';
  }
  //*altrimenti
  else{
    linkstile.href = "fogliostile-1.css";
    link= '1';
  }
}

//*definisce algoritmo per i file nella cartella works
let link_remoto='1';
function cambia_hrefremoto(){
  let link_stile = document.getElementById('fogliodistileremoto');
  if (link_remoto == '1'){
    link_stile.href = "../fogliostile-2.css";
    link_remoto='2';
  }
  else{
    link_stile.href = "../fogliostile-1.css";
    link_remoto='1';
  }
}
