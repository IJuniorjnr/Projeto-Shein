// INICIO ZONA 1
var duration1 
var interval1 

function start1(){
  duration1 = 10
  interval1 = setInterval(countdown1, 1000)
  document.querySelector('#zona1').style.backgroundColor = "green";
}

function reset1(){
  document.getElementById('display1').innerText = '00:00'
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
    document.getElementById('display1').innerText = "Trocar a gaiola!";
    document.querySelector('#zona1').style.backgroundColor = "red";
    clearInterval(interval1);
  }
}

// FIM ZONA 2

//INICIO ZONA 2
var duration2 = 10
var interval2 

function start2(){
  duration2 = 10
  interval2 = setInterval(countdown2, 1000)
  document.querySelector('#zona3').style.backgroundColor = "green";
}

function reset2(){
  document.getElementById('display2').innerText = '00:00'
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
    document.querySelector('#zona3').style.backgroundColor = "yellow";
  }

  if(duration2 < 0){
    document.getElementById('display2').innerText = "Trocar a gaiola!"
    document.querySelector('#zona3').style.backgroundColor = "red";
    clearInterval(interval2);
  }
}
//FIM ZONA 2