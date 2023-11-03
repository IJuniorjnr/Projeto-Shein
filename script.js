// INICIO ZONA 1
var duration1 
var interval1 


function start1(){
  duration1 = 1800
  interval1 = setInterval(countdown1, 1000)
  document.querySelector('#zona1').style.backgroundColor = "green";
  document.getElementById('soundc').play();
}

function reset1(){
  document.getElementById('display1').innerText = '00:00'
  document.querySelector('#zona1').style.backgroundColor = 'gray';
  clearInterval(interval1);
}

function countdown1(){
  minutes = Math.floor(duration1 / 60);
  seconds = Math.floor(duration1 % 60);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('display1').innerText = minutes + ':' + seconds;
  duration1--;

  if(duration1 < 600){
    document.querySelector('#zona1').style.backgroundColor = "yellow";
  }

  if(duration1 < 0){
    document.getElementById('sound').play();
    document.getElementById('display1').innerText = "Trocar a gaiola!";
    document.querySelector('#zona1').style.backgroundColor = "red";
    
    clearInterval(interval1);
  }
}

// FIM ZONA 2

//INICIO ZONA 2
var duration2
var interval2 


function start2(){
  duration2 = 1800
  interval2 = setInterval(countdown2, 1000)
  document.querySelector('#zona2').style.backgroundColor = "green";
  document.getElementById('soundc').play();
}

function reset2(){
  document.getElementById('display2').innerText = '00:00'
  document.querySelector('#zona2').style.backgroundColor = 'gray';
  clearInterval(interval2);
}

function countdown2(){
  minutes = Math.floor(duration2 / 60);
  seconds = Math.floor(duration2 % 60);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('display2').innerText = minutes + ':' + seconds;
  duration2--;

  if(duration2 < 600){
    document.querySelector('#zona2').style.backgroundColor = "yellow";
  }

  if(duration2 < 0){
    document.getElementById('sound').play();
    document.getElementById('display2').innerText = "Trocar a gaiola!";
    document.querySelector('#zona2').style.backgroundColor = "red";
    
    clearInterval(interval2);
  }
}

//FIM ZONA 2

//INICIO ZONA 3

var duration3
var interval3 


function start3(){
  duration3 = 1800
  interval3 = setInterval(countdown3, 1000)
  document.querySelector('#zona3').style.backgroundColor = "green";
  document.getElementById('soundc').play();
}

function reset3(){
  document.getElementById('display3').innerText = '00:00'
  document.querySelector('#zona3').style.backgroundColor = 'gray';
  clearInterval(interval3);
}

function countdown3(){
  minutes = Math.floor(duration3 / 60);
  seconds = Math.floor(duration3 % 60);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('display3').innerText = minutes + ':' + seconds;
  duration3--;

  if(duration3 < 600){
    document.querySelector('#zona3').style.backgroundColor = "yellow";
  }

  if(duration3 < 0){
    document.getElementById('sound').play();
    document.getElementById('display3').innerText = "Trocar a gaiola!";
    document.querySelector('#zona3').style.backgroundColor = "red";
    
    clearInterval(interval3);
  }
}

//FIM ZONA 3

//INICIO ZONA 4

var duration4
var interval4 

function start4(){
  duration4 = 1800
  interval4 = setInterval(countdown4, 1000)
  document.querySelector('#zona4').style.backgroundColor = "green";
  document.getElementById('soundc').play();
}

function reset4(){
  document.getElementById('display4').innerText = '00:00'
  document.querySelector('#zona4').style.backgroundColor = 'gray';
  clearInterval(interval4);
}

function countdown4(){
  minutes = Math.floor(duration4 / 60);
  seconds = Math.floor(duration4 % 60);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('display4').innerText = minutes + ':' + seconds;
  duration4--;

  if(duration4 < 600){
    document.querySelector('#zona4').style.backgroundColor = "yellow";
  }

  if(duration4 < 0){
    document.getElementById('sound').play();
    document.getElementById('display4').innerText = "Trocar a gaiola!";
    document.querySelector('#zona4').style.backgroundColor = "red";
    
    clearInterval(interval4);
  }
}

//FIM ZONA 4

//INICIO ZONA 5

var duration5
var interval5 

function start5(){
  duration5 = 1800
  interval5 = setInterval(countdown5, 1000)
  document.querySelector('#zona5').style.backgroundColor = "green";
  document.getElementById('soundc').play();
}

function reset5(){
  document.getElementById('display5').innerText = '00:00'
  document.querySelector('#zona5').style.backgroundColor = 'gray';
  clearInterval(interval5);
}

function countdown5(){
  minutes = Math.floor(duration5 / 60);
  seconds = Math.floor(duration5 % 60);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('display5').innerText = minutes + ':' + seconds;
  duration5--;

  if(duration5 < 600){
    document.querySelector('#zona5').style.backgroundColor = "yellow";
  }

  if(duration5 < 0){
    document.getElementById('sound').play();
    document.getElementById('display5').innerText = "Trocar a gaiola!";
    document.querySelector('#zona5').style.backgroundColor = "red";
    
    clearInterval(interval5);
  }
}

//FIM ZONA 5

//INICIO ZONA 6

var duration6
var interval6 

function start6(){
  duration6 = 1800
  interval6 = setInterval(countdown6, 1000)
  document.querySelector('#zona6').style.backgroundColor = "green";
  document.getElementById('soundc').play();
}

function reset6(){
  document.getElementById('display6').innerText = '00:00'
  document.querySelector('#zona6').style.backgroundColor = 'gray';
  clearInterval(interval6);
}

function countdown6(){
  minutes = Math.floor(duration6 / 60);
  seconds = Math.floor(duration6 % 60);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('display6').innerText = minutes + ':' + seconds;
  duration6--;

  if(duration6 < 600){
    document.querySelector('#zona6').style.backgroundColor = "yellow";
  }

  if(duration6 < 0){
    document.getElementById('sound').play();
    document.getElementById('display6').innerText = "Trocar a gaiola!";
    document.querySelector('#zona6').style.backgroundColor = "red";
    
    clearInterval(interval6);
  }
}
 
//FIM ZONA 6

//INICIO ZONA 7

var duration7
var interval7 

function start7(){
  duration7 = 1800
  interval7 = setInterval(countdown7, 1000)
  document.querySelector('#zona7').style.backgroundColor = "green";
  document.getElementById('soundc').play();
}

function reset7(){
  document.getElementById('display7').innerText = '00:00'
  document.querySelector('#zona7').style.backgroundColor = 'gray';
  clearInterval(interval7);
}

function countdown7(){
  minutes = Math.floor(duration7 / 60);
  seconds = Math.floor(duration7 % 60);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('display7').innerText = minutes + ':' + seconds;
  duration7--;

  if(duration7 < 600){
    document.querySelector('#zona7').style.backgroundColor = "yellow";
  }

  if(duration7 < 0){
    document.getElementById('sound').play();
    document.getElementById('display7').innerText = "Trocar a gaiola!";
    document.querySelector('#zona7').style.backgroundColor = "red";
    
    clearInterval(interval7);
  }
}
// FIM ZONA 7

//INICIO ZONA 8

var duration8
var interval8 

function start8(){
  duration8 = 1800
  interval8 = setInterval(countdown8, 1000)
  document.querySelector('#zona8').style.backgroundColor = "green";
  document.getElementById('soundc').play();
}

function reset8(){
  document.getElementById('display8').innerText = '00:00'
  document.querySelector('#zona8').style.backgroundColor = 'gray';
  clearInterval(interval8);
}

function countdown8(){
  minutes = Math.floor(duration8 / 60);
  seconds = Math.floor(duration8 % 60);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('display8').innerText = minutes + ':' + seconds;
  duration8--;

  if(duration8 < 600){
    document.querySelector('#zona8').style.backgroundColor = "yellow";
  }

  if(duration8 < 0){
    document.getElementById('sound').play();
    document.getElementById('display8').innerText = "Trocar a gaiola!";
    document.querySelector('#zona8').style.backgroundColor = "red";
    
    clearInterval(interval8);
  }
}
//FIM ZONA 8

//INICIO ZONA 9

var duration9
var interval9 

function start9(){
  duration9 = 1800
  interval9 = setInterval(countdown9, 1000)
  document.querySelector('#zona9').style.backgroundColor = "green";
  document.getElementById('soundc').play();
}

function reset9(){
  document.getElementById('display9').innerText = '00:00'
  document.querySelector('#zona9').style.backgroundColor = 'gray';
  clearInterval(interval9);
}

function countdown9(){
  minutes = Math.floor(duration9 / 60);
  seconds = Math.floor(duration9 % 60);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('display9').innerText = minutes + ':' + seconds;
  duration9--;

  if(duration9 < 600){
    document.querySelector('#zona9').style.backgroundColor = "yellow";
  }

  if(duration9 < 0){
    document.getElementById('sound').play();
    document.getElementById('display9').innerText = "Trocar a gaiola!";
    document.querySelector('#zona9').style.backgroundColor = "red";
    
    clearInterval(interval9);
  }
}
// FIM ZONA 9

//INICIO ZONA 10

var duration10
var interval10 

function start10(){
  duration10 = 1800
  interval10 = setInterval(countdown10, 1000)
  document.querySelector('#zona10').style.backgroundColor = "green";
  document.getElementById('soundc').play();
}

function reset10(){
  document.getElementById('display10').innerText = '00:00'
  document.querySelector('#zona10').style.backgroundColor = 'gray';
  clearInterval(interval10);
}

function countdown10(){
  minutes = Math.floor(duration10 / 60);
  seconds = Math.floor(duration10 % 60);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('display10').innerText = minutes + ':' + seconds;
  duration10--;

  if(duration10 < 600){
    document.querySelector('#zona10').style.backgroundColor = "yellow";
  }

  if(duration10 < 0){
    document.getElementById('sound').play();
    document.getElementById('display10').innerText = "Trocar a gaiola!";
    document.querySelector('#zona10').style.backgroundColor = "red";
    
    clearInterval(interval10);
  }
}
