{

let findeOffset = (type)=>
{
  let arrcell = [];
  for(let i = 0;i<8;i++){
    for(let j = 0 ; j<8;j++){
      let cell = document.querySelector('table').rows[i].cells[j];
      if(cell.children[0]){
         if(cell.children[0].classList.value== type){
           arrcell.push({x:j,y:i,type:type});
         };
          
      }
    }
  }
  return arrcell;
}
let seeRow =(offsetY)=>
{
  let arr=[];
  for(let i =0; i<8;i++){
    arr.push(document.querySelector('table').rows[offsetY].cells[i]);
  }
  return arr; 
}
let seeCol = (offsetx)=>{
  let arr=[];
  for(let i =0; i<8;i++){
    arr.push(document.querySelector('table').rows[i].cells[offsetx]);
  }
  return arr;
}

 let seeCross = (offsetx,offsety)=>
 {
   let arr=[];
  if(offsetx>=offsety){
    j=offsetx-offsety;
    switch(j){
      case 0: for(let i = 0;i<8;i++){
        arr.push(document.querySelector('table').rows[i].cells[j]);
        j++;
      }
      break;
      case 1: for(let i = 0;i<7;i++){
        arr.push(document.querySelector('table').rows[i].cells[j]);
        j++;
      }
      break;
      case 2: for(let i = 0;i<6;i++){
        arr.push(document.querySelector('table').rows[i].cells[j]);
        j++;
      }
      break;
      case 3: for(let i = 0;i<5;i++){
        arr.push(document.querySelector('table').rows[i].cells[j]);
        j++;
      }
      break;
      case 4: for(let i = 0;i<4;i++){
        arr.push(document.querySelector('table').rows[i].cells[j]);
        j++;
      }
      break;
      case 5: for(let i = 0;i<3;i++){
        arr.push(document.querySelector('table').rows[i].cells[j]);
        j++;
      }
      case 6: for(let i = 0;i<2;i++){
        arr.push(document.querySelector('table').rows[i].cells[j]);
        j++;
      }
      case 7: arr.push(document.querySelector('table').rows[0].cells[j]);
      break;
    }
  }else if(offsetx<offsety){
   i=offsety-offsetx;
   switch(i){
     case 1 : for(let j = 0 ; j<7; j++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      i++
     }
     break;
     case 2 : for(let j = 0 ; j<6; j++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      i++
     }
     break;
     case 3 : for(let j = 0 ; j<5; j++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      i++
     }
     break;
     case 4 : for(let j = 0 ; j<4; j++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      i++
     }
     break;
     case 5 : for(let j = 0 ; j<3; j++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      i++
     }
     break;
     case 6 : for(let j = 0 ; j<2; j++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      i++
     }
     break;
     case 7 :
      arr.push(document.querySelector('table').rows[i].cells[0]);
     break;
     default:break;
   }
  }
  
  return arr;
 }

 let seeCross2 = (offsetx,offsety)=>
 {
  let arr = []
  let j = offsety+offsetx;
  switch(j){
    case 0 : arr.push(document.querySelector('table').rows[0].cells[0]);
    break;
    case 1: for(let i = 0;i<2;i++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      j--;
    }
    break;
    case 2: for(let i = 0;i<3;i++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      j--;
    }
    break;
    case 3: for(let i = 0;i<4;i++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      j--;
    }
    break;
    case 4: for(let i = 0;i<5;i++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      j--;
    }
    break;
    case 5: for(let i = 0;i<6;i++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      j--;
    }
    break;
    case 6: for(let i = 0;i<7;i++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      j--;
    }
    break;
    case 7: for(let i = 0;i<8;i++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      j--;
    }
    case 8:
    j=7;
    for(let i = 1;i<8;i++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      j--;
    }
    break;
    case 9:
    j=7;
    for(let i = 2;i<8;i++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      j--;
    }
    break;
    case 10:
    j=7;
    for(let i = 3;i<8;i++){
      arr.push(document.querySelector('table').rows[i].cells[j]);
      j--;
    }
    break;
    case 11:
      j=7;
      for(let i = 4;i<8;i++){
        arr.push(document.querySelector('table').rows[i].cells[j]);
        j--;
      }
      break;
      case 12:
      j=7;
      for(let i = 5;i<8;i++){
        arr.push(document.querySelector('table').rows[i].cells[j]);
        j--;
      }
      break;
      case 13:
      j=7;
      for(let i = 6;i<8;i++){
        arr.push(document.querySelector('table').rows[i].cells[j]);
        j--;
      }
      break;
      case 14:{
        j=7;
        arr.push(document.querySelector('table').rows[7].cells[j]);
      }
    default:break;
  }
  return arr;
  }

  let updateCell = (arr,check,type)=>{
    arr.reduce((acc,cur)=>{
      if(check && !acc.children[0] && cur.children[0]){
        if(cur.children[0].classList.value == type){
          acc.style.background = 'blue';
        }
        checkcell = false;
      }else if (check && acc.children[0] && !cur.children[0])
      {
        if(acc.children[0].classList.value == type){
          cur.style.background = 'blue';
        }
        checkcell = false;
      } 
      return cur;
    }) 
   }
   let updateArrboard = (arr,type)=>
   {
    
    
    let checkcell = false;
    arr.reduce((acc,cur)=>{
      if(acc.children[0] && cur.children[0]){
        if(type == 'disc' ){
          if(acc.children[0].classList.value == 'disc' && cur.children[0].classList.value =='disc2' || acc.children[0].classList.value == 'disc2' && cur.children[0].classList.value =='disc'){
            checkcell = true;
            
          }
        }else if(type == 'disc2'){
          if(acc.children[0].classList.value == 'disc2' && cur.children[0].classList.value =='disc' || acc.children[0].classList.value == 'disc' && cur.children[0].classList.value =='disc2'){
            checkcell = true;
          }
        }
      }
      updateCell(arr,checkcell,type);
      return cur;
   });
   }
   
  let updateBord = (arr,type)=>
  {
 
    let arrIndex=[],accIndex,checkindex,counter=0;
    arr.reduce((acc,cur,curIndex,array)=>{
      
    if(acc.children[0] && cur.children[0]){
      accIndex= array.indexOf(acc);
        arrIndex.push(accIndex);
        arrIndex.push(curIndex);      
      
    }
    return cur;
    });

    let unique = [...new Set(arrIndex)];
    let arrupdat1 = [],arrupdat2=[];
    if(unique !=""){
    unique.reduce((acc,cur,curIndex,arr)=>{
      checkindex = cur-acc;
      if(checkindex>1){
        counter++;
      }
      if(counter==1){
        arrupdat1 = arr.slice(0,curIndex-1);
        arrupdat2 = arr.slice(curIndex-1,arr.length);
      }else if(counter==0){
        arrupdat1 = unique;
      }
      return cur;
    });


    if(arrupdat1.length>2){
        if(arr[arrupdat1[0]].children[0].classList.value== type && arr[arrupdat1[arrupdat1.length-1]].children[0].classList.value==type ){
          for(let i = 0 ;i<arrupdat1.length;i++){
            if(arr[arrupdat1[i]].children[0].classList.value!=type){
              arr[arrupdat1[i]].children[0].removeAttribute("class");
              arr[arrupdat1[i]].children[0].classList.add(type);
            }
          }
        }
      
    }


    if(arrupdat2.length>2){
      if(arr[arrupdat2[0]].children[0].classList.value== type && arr[arrupdat2[arrupdat2.length-1]].children[0].classList.value==type ){
        for(let i = 0 ;i<arrupdat2.length;i++){
          if(arr[arrupdat2[i]].children[0].classList.value!=type){
            arr[arrupdat2[i]].children[0].removeAttribute("class");
            arr[arrupdat2[i]].children[0].classList.add(type);
          }
        }
      }
    
  }



  }


  
  } 
  
 let updateUi = (type)=>{
  let colArr,rowArr,crossArr,crossArr2,typePose;
  typePose = findeOffset(type);
 

  for(let i = 0 ; i<typePose.length;i++){
    colArr = seeCol(typePose[i].x);
    rowArr = seeRow(typePose[i].y);
    crossArr = seeCross(typePose[i].x,typePose[i].y);
    crossArr2 = seeCross2(typePose[i].x,typePose[i].y);
        updateBord(colArr,typePose[i].type);
        updateBord(rowArr,typePose[i].type);
        updateBord(crossArr,typePose[i].type);
        updateBord(crossArr2,typePose[i].type);
       
  }
 
 
 
  for(let i = 0 ; i<typePose.length;i++){
    colArr = seeCol(typePose[i].x);
    rowArr = seeRow(typePose[i].y);
    crossArr = seeCross(typePose[i].x,typePose[i].y);
    crossArr2 = seeCross2(typePose[i].x,typePose[i].y);
        updateArrboard(colArr,typePose[i].type);
        updateArrboard(rowArr,typePose[i].type);
        updateArrboard(crossArr,typePose[i].type);
        updateArrboard(crossArr2,typePose[i].type);
  }
  
}
updateUi('disc');
let player1 = true;
let grid = document.querySelector('#grid');
let cell = document.querySelectorAll('.cell');
grid.addEventListener('click',(e)=>{
  e.preventDefault();
  if(e.target.style.background == "blue"){
    for(let i = 0; i<63;i++){
      cell[i].style.background= "none";
    }
    if(player1){
      e.target.innerHTML = `<div class = "disc2"></div>`;
      player1=false;
      updateUi('disc2');
      
    }else if(!player1){
      e.target.innerHTML = `<div class = "disc"></div>`;
      player1 = true;
      updateUi('disc');
    }

  }


});
  
}
