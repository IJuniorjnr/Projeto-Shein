// INICIO ZONA 1
// Variaveis globais
const tempo1 = document.getElementById('display1');
const startBtn = document.querySelector('.btn-start1');
const resetBtn = document.querySelector('.btn-reset1');

let seconds1 = 10 ;
let iTime1 = 10;
let interval1 = null;

// Event listeners

startBtn.addEventListener('click', start1);
resetBtn.addEventListener('click', reset1);

// Contador

function countdown1 (){
  seconds1 --

  //formatação do tempo
  let mins1 = Math.floor( seconds1 / 60)
  let secs1 = seconds1 % 60
  
  if (secs1 < 10) secs1 = '0' + secs1;
  if (mins1 < 10) mins1 = '0' + mins1;

  tempo1.innerText = `${mins1}:${secs1}`;

  if(seconds1 > 600){
    document.getElementById('zona1').style.backgroundColor = "green";
  }

  if(seconds1 < 600){
    document.querySelector('#zona1').style.backgroundColor = "yellow";
  }

  if(seconds1 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona1').style.backgroundColor = "red";
    tempo1.innerText = 'Troque a gaiola!'
    
    clearInterval(interval1);
  }
}

function start1(){
  if (interval1){
    return
  }
  interval1 = setInterval(countdown1,1000)
  seconds1 = iTime1
  document.getElementById('soundc').play();

}

function reset1(){
  clearInterval(interval1);
  interval1 = null;
  tempo1.innerText = '00:00'
  document.getElementById('zona1').style.backgroundColor= "gray";
}


// FIM ZONA 2

//INICIO ZONA 2
const tempo2 = document.getElementById('display2');
const startBtn2 = document.querySelector('.btn-start2');
const resetBtn2 = document.querySelector('.btn-reset2');

let seconds2 = 10 ;
let iTime2 = 10;
let interval2 = null;

// Event listeners

startBtn2.addEventListener('click', start2);
resetBtn2.addEventListener('click', reset2);

// Contador

function countdown2 (){
  seconds2 --

  //formatação do tempo
  let mins2 = Math.floor( seconds2 / 60)
  let secs2 = seconds2 % 60
  
  if (secs2 < 10) secs2 = '0' + secs2;
  if (mins2 < 10) mins2 = '0' + mins2;

  tempo2.innerText = `${mins2}:${secs2}`;

  if(seconds2 > 600){
    document.getElementById('zona2').style.backgroundColor = "green";
  }

  if(seconds2 < 600){
    document.querySelector('#zona2').style.backgroundColor = "yellow";
  }

  if(seconds2 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona2').style.backgroundColor = "red";
    tempo2.innerText = 'Troque a gaiola!'
    
    clearInterval(interval2);
  }
}

function start2(){
  if (interval2){
    return
  }
  interval2 = setInterval(countdown2,1000)
  seconds2 = iTime2
  document.getElementById('soundc').play();

}

function reset2(){
  clearInterval(interval2);
  interval2 = null;
  tempo2.innerText = '00:00'
  document.getElementById('zona2').style.backgroundColor= "gray";
}

//FIM ZONA 2

//INICIO ZONA 3
const tempo3 = document.getElementById('display3');
const startBtn3 = document.querySelector('.btn-start3');
const resetBtn3 = document.querySelector('.btn-reset3');

let seconds3 = 10 ;
let iTime3 = 10;
let interval3 = null;

// Event listeners

startBtn3.addEventListener('click', start3);
resetBtn3.addEventListener('click', reset3);

// Contador

function countdown3 (){
  seconds3 --

  //formatação do tempo
  let mins3 = Math.floor( seconds3 / 60)
  let secs3 = seconds3 % 60
  
  if (secs3 < 10) secs3 = '0' + secs3;
  if (mins3 < 10) mins3 = '0' + mins3;

  tempo3.innerText = `${mins3}:${secs3}`;

  if(seconds3 > 600){
    document.getElementById('zona3').style.backgroundColor = "green";
  }

  if(seconds3 < 600){
    document.querySelector('#zona3').style.backgroundColor = "yellow";
  }

  if(seconds3 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona3').style.backgroundColor = "red";
    tempo3.innerText = 'Troque a gaiola!'
    
    clearInterval(interval3);
  }
}

function start3(){
  if (interval3){
    return
  }
  interval3 = setInterval(countdown3,1000)
  seconds3 = iTime3
  document.getElementById('soundc').play();

}

function reset3(){
  clearInterval(interval3);
  interval3 = null;
  tempo3.innerText = '00:00'
  document.getElementById('zona3').style.backgroundColor= "gray";
}

//FIM ZONA 3

//INICIO ZONA 4
const tempo4 = document.getElementById('display4');
const startBtn4 = document.querySelector('.btn-start4');
const resetBtn4 = document.querySelector('.btn-reset4');

let seconds4 = 10 ;
let iTime4 = 10;
let interval4 = null;

// Event listeners

startBtn4.addEventListener('click', start4);
resetBtn4.addEventListener('click', reset4);

// Contador

function countdown4 (){
  seconds4 --

  //formatação do tempo
  let mins4 = Math.floor( seconds4 / 60)
  let secs4 = seconds4 % 60
  
  if (secs4 < 10) secs4 = '0' + secs4;
  if (mins4 < 10) mins4 = '0' + mins4;

  tempo4.innerText = `${mins4}:${secs4}`;

  if(seconds4 > 600){
    document.getElementById('zona4').style.backgroundColor = "green";
  }

  if(seconds4 < 600){
    document.querySelector('#zona4').style.backgroundColor = "yellow";
  }

  if(seconds4 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona4').style.backgroundColor = "red";
    tempo4.innerText = 'Troque a gaiola!'
    
    clearInterval(interval4);
  }
}

function start4(){
  if (interval4){
    return
  }
  interval4 = setInterval(countdown4,1000)
  seconds4 = iTime4
  document.getElementById('soundc').play();

}

function reset4(){
  clearInterval(interval4);
  interval4 = null;
  tempo4.innerText = '00:00'
  document.getElementById('zona4').style.backgroundColor= "gray";
}
//FIM ZONA 4

//INICIO ZONA 5
const tempo5 = document.getElementById('display5');
const startBtn5 = document.querySelector('.btn-start5');
const resetBtn5 = document.querySelector('.btn-reset5');

let seconds5 = 10 ;
let iTime5 = 10;
let interval5 = null;

// Event listeners

startBtn5.addEventListener('click', start5);
resetBtn5.addEventListener('click', reset5);

// Contador

function countdown5 (){
  seconds5 --

  //formatação do tempo
  let mins5 = Math.floor( seconds5 / 60)
  let secs5 = seconds5 % 60
  
  if (secs5 < 10) secs5 = '0' + secs5;
  if (mins5 < 10) mins5 = '0' + mins5;

  tempo5.innerText = `${mins5}:${secs5}`;

  if(seconds5 > 600){
    document.getElementById('zona5').style.backgroundColor = "green";
  }

  if(seconds5 < 600){
    document.querySelector('#zona5').style.backgroundColor = "yellow";
  }

  if(seconds5 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona5').style.backgroundColor = "red";
    tempo5.innerText = 'Troque a gaiola!'
    
    clearInterval(interval5);
  }
}

function start5(){
  if (interval5){
    return
  }
  interval5 = setInterval(countdown5,1000)
  seconds5 = iTime5
  document.getElementById('soundc').play();

}

function reset5(){
  clearInterval(interval5);
  interval5 = null;
  tempo5.innerText = '00:00'
  document.getElementById('zona5').style.backgroundColor= "gray";
}

//FIM ZONA 5

//INICIO ZONA 6
const tempo6 = document.getElementById('display6');
const startBtn6 = document.querySelector('.btn-start6');
const resetBtn6 = document.querySelector('.btn-reset6');

let seconds6 = 10 ;
let iTime6 = 10;
let interval6 = null;

// Event listeners

startBtn6.addEventListener('click', start6);
resetBtn6.addEventListener('click', reset6);

// Contador

function countdown6 (){
  seconds6 --

  //formatação do tempo
  let mins6 = Math.floor( seconds6 / 60)
  let secs6 = seconds6 % 60
  
  if (secs6 < 10) secs6 = '0' + secs6;
  if (mins6 < 10) mins6 = '0' + mins6;

  tempo6.innerText = `${mins6}:${secs6}`;

  if(seconds6 > 600){
    document.getElementById('zona6').style.backgroundColor = "green";
  }

  if(seconds6 < 600){
    document.querySelector('#zona6').style.backgroundColor = "yellow";
  }

  if(seconds6 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona6').style.backgroundColor = "red";
    tempo6.innerText = 'Troque a gaiola!'
    
    clearInterval(interval6);
  }
}

function start6(){
  if (interval6){
    return
  }
  interval6 = setInterval(countdown6,1000)
  seconds6 = iTime6
  document.getElementById('soundc').play();

}

function reset6(){
  clearInterval(interval6);
  interval6 = null;
  tempo6.innerText = '00:00'
  document.getElementById('zona6').style.backgroundColor= "gray";
}
//FIM ZONA 6

//INICIO ZONA 7
const tempo7 = document.getElementById('display7');
const startBtn7 = document.querySelector('.btn-start7');
const resetBtn7 = document.querySelector('.btn-reset7');

let seconds7 = 10 ;
let iTime7 = 10;
let interval7 = null;

// Event listeners

startBtn7.addEventListener('click', start7);
resetBtn7.addEventListener('click', reset7);

// Contador

function countdown7 (){
  seconds7 --

  //formatação do tempo
  let mins7 = Math.floor( seconds7 / 60)
  let secs7 = seconds7 % 60
  
  if (secs7 < 10) secs7 = '0' + secs7;
  if (mins7 < 10) mins7 = '0' + mins7;

  tempo7.innerText = `${mins7}:${secs7}`;

  if(seconds7 > 600){
    document.getElementById('zona7').style.backgroundColor = "green";
  }

  if(seconds7 < 600){
    document.querySelector('#zona7').style.backgroundColor = "yellow";
  }

  if(seconds7 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona7').style.backgroundColor = "red";
    tempo7.innerText = 'Troque a gaiola!'
    
    clearInterval(interval7);
  }
}

function start7(){
  if (interval7){
    return
  }
  interval7 = setInterval(countdown7,1000)
  seconds7 = iTime7
  document.getElementById('soundc').play();

}

function reset7(){
  clearInterval(interval7);
  interval7 = null;
  tempo7.innerText = '00:00'
  document.getElementById('zona7').style.backgroundColor= "gray";
}
// FIM ZONA 7

//INICIO ZONA 8
const tempo8 = document.getElementById('display8');
const startBtn8 = document.querySelector('.btn-start8');
const resetBtn8 = document.querySelector('.btn-reset8');

let seconds8 = 10 ;
let iTime8 = 10;
let interval8 = null;

// Event listeners

startBtn8.addEventListener('click', start8);
resetBtn8.addEventListener('click', reset8);

// Contador

function countdown8 (){
  seconds8 --

  //formatação do tempo
  let mins8 = Math.floor( seconds8 / 60)
  let secs8 = seconds8 % 60
  
  if (secs8 < 10) secs8 = '0' + secs8;
  if (mins8 < 10) mins8 = '0' + mins8;

  tempo8.innerText = `${mins8}:${secs8}`;

  if(seconds8 > 600){
    document.getElementById('zona8').style.backgroundColor = "green";
  }

  if(seconds8 < 600){
    document.querySelector('#zona8').style.backgroundColor = "yellow";
  }

  if(seconds8 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona8').style.backgroundColor = "red";
    tempo8.innerText = 'Troque a gaiola!'
    
    clearInterval(interval8);
  }
}

function start8(){
  if (interval8){
    return
  }
  interval8 = setInterval(countdown8,1000)
  seconds8 = iTime8
  document.getElementById('soundc').play();

}

function reset8(){
  clearInterval(interval8);
  interval8 = null;
  tempo8.innerText = '00:00'
  document.getElementById('zona8').style.backgroundColor= "gray";
}

//FIM ZONA 8

//INICIO ZONA 9
const tempo9 = document.getElementById('display9');
const startBtn9 = document.querySelector('.btn-start9');
const resetBtn9 = document.querySelector('.btn-reset9');

let seconds9 = 10 ;
let iTime9 = 10;
let interval9 = null;

// Event listeners

startBtn9.addEventListener('click', start9);
resetBtn9.addEventListener('click', reset9);

// Contador

function countdown9 (){
  seconds9 --

  //formatação do tempo
  let mins9 = Math.floor( seconds9 / 60)
  let secs9 = seconds9 % 60
  
  if (secs9 < 10) secs9 = '0' + secs9;
  if (mins9 < 10) mins9 = '0' + mins9;

  tempo9.innerText = `${mins9}:${secs9}`;

  if(seconds9 > 600){
    document.getElementById('zona9').style.backgroundColor = "green";
  }

  if(seconds9 < 600){
    document.querySelector('#zona9').style.backgroundColor = "yellow";
  }

  if(seconds9 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona9').style.backgroundColor = "red";
    tempo9.innerText = 'Troque a gaiola!'
    
    clearInterval(interval9);
  }
}

function start9(){
  if (interval9){
    return
  }
  interval9 = setInterval(countdown9,1000)
  seconds9 = iTime9
  document.getElementById('soundc').play();

}

function reset9(){
  clearInterval(interval9);
  interval9 = null;
  tempo9.innerText = '00:00'
  document.getElementById('zona9').style.backgroundColor= "gray";
}
// FIM ZONA 9

//INICIO ZONA 10
const tempo10 = document.getElementById('display10');
const startBtn10 = document.querySelector('.btn-start10');
const resetBtn10 = document.querySelector('.btn-reset10');

let seconds10 = 10 ;
let iTime10 = 10;
let interval10 = null;

// Event listeners

startBtn10.addEventListener('click', start10);
resetBtn10.addEventListener('click', reset10);

// Contador

function countdown10 (){
  seconds10 --

  //formatação do tempo
  let mins10 = Math.floor( seconds10 / 60)
  let secs10 = seconds10 % 60
  
  if (secs10 < 10) secs10 = '0' + secs10;
  if (mins10 < 10) mins10 = '0' + mins10;

  tempo10.innerText = `${mins10}:${secs10}`;

  if(seconds10 > 600){
    document.getElementById('zona10').style.backgroundColor = "green";
  }

  if(seconds10 < 600){
    document.querySelector('#zona10').style.backgroundColor = "yellow";
  }

  if(seconds10 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona10').style.backgroundColor = "red";
    tempo10.innerText = 'Troque a gaiola!'
    
    clearInterval(interval10);
  }
}

function start10(){
  if (interval10){
    return
  }
  interval10 = setInterval(countdown10,1000)
  seconds10 = iTime10
  document.getElementById('soundc').play();

}

function reset10(){
  clearInterval(interval10);
  interval10 = null;
  tempo10.innerText = '00:00'
  document.getElementById('zona10').style.backgroundColor= "gray";
}
//FIM ZONA 10


//INICIO ZONA 11
const tempo11 = document.getElementById('display11');
const startBtn11 = document.querySelector('.btn-start11');
const resetBtn11 = document.querySelector('.btn-reset11');

let seconds11 = 10 ;
let iTime11 = 10;
let interval11 = null;

// Event listeners

startBtn11.addEventListener('click', start11);
resetBtn11.addEventListener('click', reset11);

// Contador

function countdown11 (){
  seconds11 --

  //formatação do tempo
  let mins11 = Math.floor( seconds11 / 60)
  let secs11 = seconds11 % 60
  
  if (secs11 < 10) secs11 = '0' + secs11;
  if (mins11 < 10) mins11 = '0' + mins11;

  tempo11.innerText = `${mins11}:${secs11}`;

  if(seconds11 > 600){
    document.getElementById('zona11').style.backgroundColor = "green";
  }

  if(seconds11 < 600){
    document.querySelector('#zona11').style.backgroundColor = "yellow";
  }

  if(seconds11 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona11').style.backgroundColor = "red";
    tempo11.innerText = 'Troque a gaiola!'
    
    clearInterval(interval11);
  }
}

function start11(){
  if (interval11){
    return
  }
  interval11 = setInterval(countdown11,1000)
  seconds11 = iTime11
  document.getElementById('soundc').play();

}

function reset11(){
  clearInterval(interval11);
  interval11 = null;
  tempo11.innerText = '00:00'
  document.getElementById('zona11').style.backgroundColor= "gray";
}
//FIM ZONA 11

//INICIO ZONA 12
const tempo12 = document.getElementById('display12');
const startBtn12 = document.querySelector('.btn-start12');
const resetBtn12 = document.querySelector('.btn-reset12');

let seconds12 = 10 ;
let iTime12 = 10;
let interval12 = null;

// Event listeners

startBtn12.addEventListener('click', start12);
resetBtn12.addEventListener('click', reset12);

// Contador

function countdown12 (){
  seconds12 --

  //formatação do tempo
  let mins12 = Math.floor( seconds12 / 60)
  let secs12 = seconds12 % 60
  
  if (secs12 < 10) secs12 = '0' + secs12;
  if (mins12 < 10) mins12 = '0' + mins12;

  tempo12.innerText = `${mins12}:${secs12}`;

  if(seconds12 > 600){
    document.getElementById('zona12').style.backgroundColor = "green";
  }

  if(seconds12 < 600){
    document.querySelector('#zona12').style.backgroundColor = "yellow";
  }

  if(seconds12 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona12').style.backgroundColor = "red";
    tempo12.innerText = 'Troque a gaiola!'
    
    clearInterval(interval12);
  }
}

function start12(){
  if (interval12){
    return
  }
  interval12 = setInterval(countdown12,1000)
  seconds12 = iTime12
  document.getElementById('soundc').play();

}

function reset12(){
  clearInterval(interval12);
  interval12 = null;
  tempo12.innerText = '00:00'
  document.getElementById('zona12').style.backgroundColor= "gray";
}
//FIM ZONA 12

//INICIO ZONA 13
const tempo13 = document.getElementById('display13');
const startBtn13 = document.querySelector('.btn-start13');
const resetBtn13 = document.querySelector('.btn-reset13');

let seconds13 = 10 ;
let iTime13 = 10;
let interval13 = null;

// Event listeners

startBtn13.addEventListener('click', start13);
resetBtn13.addEventListener('click', reset13);

// Contador

function countdown13 (){
  seconds13 --

  //formatação do tempo
  let mins13 = Math.floor( seconds13 / 60)
  let secs13 = seconds13 % 60
  
  if (secs13 < 10) secs13 = '0' + secs13;
  if (mins13 < 10) mins13 = '0' + mins13;

  tempo13.innerText = `${mins13}:${secs13}`;

  if(seconds13 > 600){
    document.getElementById('zona13').style.backgroundColor = "green";
  }

  if(seconds13 < 600){
    document.querySelector('#zona13').style.backgroundColor = "yellow";
  }

  if(seconds13 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona13').style.backgroundColor = "red";
    tempo13.innerText = 'Troque a gaiola!'
    
    clearInterval(interval13);
  }
}

function start13(){
  if (interval13){
    return
  }
  interval13 = setInterval(countdown13,1000)
  seconds13 = iTime13
  document.getElementById('soundc').play();

}

function reset13(){
  clearInterval(interval13);
  interval13 = null;
  tempo13.innerText = '00:00'
  document.getElementById('zona13').style.backgroundColor= "gray";
}
// FIM ZONA 13

//INICIO ZONA 14
const tempo14 = document.getElementById('display14');
const startBtn14 = document.querySelector('.btn-start14');
const resetBtn14 = document.querySelector('.btn-reset14');

let seconds14 = 10 ;
let iTime14 = 10;
let interval14 = null;

// Event listeners

startBtn14.addEventListener('click', start14);
resetBtn14.addEventListener('click', reset14);

// Contador

function countdown14 (){
  seconds14 --

  //formatação do tempo
  let mins14 = Math.floor( seconds14 / 60)
  let secs14 = seconds14 % 60
  
  if (secs14 < 10) secs14 = '0' + secs14;
  if (mins14 < 10) mins14 = '0' + mins14;

  tempo14.innerText = `${mins14}:${secs14}`;

  if(seconds14 > 600){
    document.getElementById('zona14').style.backgroundColor = "green";
  }

  if(seconds14 < 600){
    document.querySelector('#zona14').style.backgroundColor = "yellow";
  }

  if(seconds14 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona14').style.backgroundColor = "red";
    tempo14.innerText = 'Troque a gaiola!'
    
    clearInterval(interval14);
  }
}

function start14(){
  if (interval14){
    return
  }
  interval14 = setInterval(countdown14,1000)
  seconds14 = iTime14
  document.getElementById('soundc').play();

}

function reset14(){
  clearInterval(interval14);
  interval14 = null;
  tempo14.innerText = '00:00'
  document.getElementById('zona14').style.backgroundColor= "gray";
}
// FIM ZONA 14

//INICIO ZONA 15
const tempo15 = document.getElementById('display15');
const startBtn15 = document.querySelector('.btn-start15');
const resetBtn15 = document.querySelector('.btn-reset15');

let seconds15 = 10 ;
let iTime15 = 10;
let interval15 = null;

// Event listeners

startBtn15.addEventListener('click', start15);
resetBtn15.addEventListener('click', reset15);

// Contador

function countdown15 (){
  seconds15 --

  //formatação do tempo
  let mins15 = Math.floor( seconds15 / 60)
  let secs15 = seconds15 % 60
  
  if (secs15 < 10) secs15 = '0' + secs15;
  if (mins15 < 10) mins15 = '0' + mins15;

  tempo15.innerText = `${mins15}:${secs15}`;

  if(seconds15 > 600){
    document.getElementById('zona15').style.backgroundColor = "green";
  }

  if(seconds15 < 600){
    document.querySelector('#zona15').style.backgroundColor = "yellow";
  }

  if(seconds15 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona15').style.backgroundColor = "red";
    tempo15.innerText = 'Troque a gaiola!'
    
    clearInterval(interval15);
  }
}

function start15(){
  if (interval15){
    return
  }
  interval15 = setInterval(countdown15,1000)
  seconds15 = iTime15
  document.getElementById('soundc').play();

}

function reset15(){
  clearInterval(interval15);
  interval15 = null;
  tempo15.innerText = '00:00'
  document.getElementById('zona15').style.backgroundColor= "gray";
}
// FIM ZONA 15

//INICIO ZONA 16
const tempo16 = document.getElementById('display16');
const startBtn16 = document.querySelector('.btn-start16');
const resetBtn16 = document.querySelector('.btn-reset16');

let seconds16 = 10 ;
let iTime16 = 10;
let interval16 = null;

// Event listeners

startBtn16.addEventListener('click', start16);
resetBtn16.addEventListener('click', reset16);

// Contador

function countdown16 (){
  seconds16 --

  //formatação do tempo
  let mins16 = Math.floor( seconds16 / 60)
  let secs16 = seconds16 % 60
  
  if (secs16 < 10) secs16 = '0' + secs16;
  if (mins16 < 10) mins16 = '0' + mins16;

  tempo16.innerText = `${mins16}:${secs16}`;

  if(seconds16 > 600){
    document.getElementById('zona16').style.backgroundColor = "green";
  }

  if(seconds16 < 600){
    document.querySelector('#zona16').style.backgroundColor = "yellow";
  }

  if(seconds16 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona16').style.backgroundColor = "red";
    tempo16.innerText = 'Troque a gaiola!'
    
    clearInterval(interval16);
  }
}

function start16(){
  if (interval16){
    return
  }
  interval16 = setInterval(countdown16,1000)
  seconds16 = iTime16
  document.getElementById('soundc').play();

}

function reset16(){
  clearInterval(interval16);
  interval16 = null;
  tempo16.innerText = '00:00'
  document.getElementById('zona16').style.backgroundColor= "gray";
}
// FIM ZONQ 16

//INICIO ZONA 17
const tempo17 = document.getElementById('display17');
const startBtn17 = document.querySelector('.btn-start17');
const resetBtn17 = document.querySelector('.btn-reset17');

let seconds17 = 10 ;
let iTime17 = 10;
let interval17 = null;

// Event listeners

startBtn17.addEventListener('click', start17);
resetBtn17.addEventListener('click', reset17);

// Contador

function countdown17 (){
  seconds17 --

  //formatação do tempo
  let mins17 = Math.floor( seconds17 / 60)
  let secs17 = seconds17 % 60
  
  if (secs17 < 10) secs17 = '0' + secs17;
  if (mins17 < 10) mins17 = '0' + mins17;

  tempo17.innerText = `${mins17}:${secs17}`;

  if(seconds17 > 600){
    document.getElementById('zona17').style.backgroundColor = "green";
  }

  if(seconds17 < 600){
    document.querySelector('#zona17').style.backgroundColor = "yellow";
  }

  if(seconds17 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona17').style.backgroundColor = "red";
    tempo17.innerText = 'Troque a gaiola!'
    
    clearInterval(interval17);
  }
}

function start17(){
  if (interval17){
    return
  }
  interval17 = setInterval(countdown17,1000)
  seconds17 = iTime17
  document.getElementById('soundc').play();

}

function reset17(){
  clearInterval(interval17);
  interval17 = null;
  tempo17.innerText = '00:00'
  document.getElementById('zona17').style.backgroundColor= "gray";
}
// FIM ZONA 17

//INICIO ZONA 18
const tempo18 = document.getElementById('display18');
const startBtn18 = document.querySelector('.btn-start18');
const resetBtn18 = document.querySelector('.btn-reset18');

let seconds18 = 10 ;
let iTime18 = 10;
let interval18 = null;

// Event listeners

startBtn18.addEventListener('click', start18);
resetBtn18.addEventListener('click', reset18);

// Contador

function countdown18 (){
  seconds18 --

  //formatação do tempo
  let mins18 = Math.floor( seconds18 / 60)
  let secs18 = seconds18 % 60
  
  if (secs18 < 10) secs18 = '0' + secs18;
  if (mins18 < 10) mins18 = '0' + mins18;

  tempo18.innerText = `${mins18}:${secs18}`;

  if(seconds18 > 600){
    document.getElementById('zona18').style.backgroundColor = "green";
  }

  if(seconds18 < 600){
    document.querySelector('#zona18').style.backgroundColor = "yellow";
  }

  if(seconds18 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona18').style.backgroundColor = "red";
    tempo18.innerText = 'Troque a gaiola!'
    
    clearInterval(interval18);
  }
}

function start18(){
  if (interval18){
    return
  }
  interval18 = setInterval(countdown18,1000)
  seconds18 = iTime18
  document.getElementById('soundc').play();

}

function reset18(){
  clearInterval(interval18);
  interval18 = null;
  tempo18.innerText = '00:00'
  document.getElementById('zona18').style.backgroundColor= "gray";
}
// FIM ZONA 18

//INICIO ZONA 19
const tempo19 = document.getElementById('display19');
const startBtn19 = document.querySelector('.btn-start19');
const resetBtn19 = document.querySelector('.btn-reset19');

let seconds19 = 10 ;
let iTime19 = 10;
let interval19 = null;

// Event listeners

startBtn19.addEventListener('click', start19);
resetBtn19.addEventListener('click', reset19);

// Contador

function countdown19 (){
  seconds19 --

  //formatação do tempo
  let mins19 = Math.floor( seconds19 / 60)
  let secs19 = seconds19 % 60
  
  if (secs19 < 10) secs19 = '0' + secs19;
  if (mins19 < 10) mins19 = '0' + mins19;

  tempo19.innerText = `${mins19}:${secs19}`;

  if(seconds19 > 600){
    document.getElementById('zona19').style.backgroundColor = "green";
  }

  if(seconds19 < 600){
    document.querySelector('#zona19').style.backgroundColor = "yellow";
  }

  if(seconds19 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona19').style.backgroundColor = "red";
    tempo19.innerText = 'Troque a gaiola!'
    
    clearInterval(interval19);
  }
}

function start19(){
  if (interval19){
    return
  }
  interval19 = setInterval(countdown19,1000)
  seconds19 = iTime19
  document.getElementById('soundc').play();

}

function reset19(){
  clearInterval(interval19);
  interval19 = null;
  tempo19.innerText = '00:00'
  document.getElementById('zona19').style.backgroundColor= "gray";
}
//FIM ZONA 19

//INICIO ZONA 20
const tempo20 = document.getElementById('display20');
const startBtn20 = document.querySelector('.btn-start20');
const resetBtn20 = document.querySelector('.btn-reset20');

let seconds20 = 10 ;
let iTime20 = 10;
let interval20 = null;

// Event listeners

startBtn20.addEventListener('click', start20);
resetBtn20.addEventListener('click', reset20);

// Contador

function countdown20 (){
  seconds20 --

  //formatação do tempo
  let mins20 = Math.floor( seconds20 / 60)
  let secs20 = seconds20 % 60
  
  if (secs20 < 10) secs20 = '0' + secs20;
  if (mins20 < 10) mins20 = '0' + mins20;

  tempo20.innerText = `${mins20}:${secs20}`;

  if(seconds20 > 600){
    document.getElementById('zona20').style.backgroundColor = "green";
  }

  if(seconds20 < 600){
    document.querySelector('#zona20').style.backgroundColor = "yellow";
  }

  if(seconds20 < 0){
    document.getElementById('sound').play();
    document.getElementById('zona20').style.backgroundColor = "red";
    tempo20.innerText = 'Troque a gaiola!'
    
    clearInterval(interval20);
  }
}

function start20(){
  if (interval20){
    return
  }
  interval20 = setInterval(countdown20,1000)
  seconds20 = iTime20
  document.getElementById('soundc').play();

}

function reset20(){
  clearInterval(interval20);
  interval20 = null;
  tempo20.innerText = '00:00'
  document.getElementById('zona20').style.backgroundColor= "gray";
}
// FIM ZONA 20
