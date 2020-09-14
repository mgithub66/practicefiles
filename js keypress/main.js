




window.addEventListener('keydown', e => {
let k=e.keyCode;
 let audio,audiopath;
  
  switch(k){
  case 87:
  audiopath = './audio/w.wav';
      break;
  case 65:
  audiopath = './audio/a.wav';
      break;
  case 83:
  audiopath = './audio/s.wav';
        break;
  case 68:
  audiopath = './audio/d.wav';
        break; 
   case 76:
   audiopath = './audio/l.wav';
        break;
  case 75:
  audiopath = './audio/k.wav';
       break;               
  case 78:
  audiopath = './audio/n.wav';
      break;   
  }
  audio = new Audio(audiopath);
  audio.play();
  
})