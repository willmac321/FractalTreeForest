var depth=12;
var arr=[];
var totCount=10;
function setup(){
    createCanvas(500,500);
    for(let i=1;i<totCount+1;i++){
      arr[i]=new fractalArray(i);
    }
}

function draw(){
  background(51);
  for(let i=1;i<totCount+1;i++){
    arr[i].update();
  }
}
function factorial(num){
  if(num>0){
    return num+factorial(num-1);
  }
  else{
    return num;
  }
}
function modColor(c){
  return (255+c)%255;
}
