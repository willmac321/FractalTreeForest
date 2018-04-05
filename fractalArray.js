function fractalArray(co){
  this.depth=ceil(random(depth));
  let res=(width/2)/factorial(this.depth);
  let r=random(255);
  let g=random(255);
  let b=random(255);
  let seed =random(-2,2);

  this.update=function(){
  //  depth=ceil(random(16));
  //  res=(width-10)/factorial(depth);

  push();
    translate(width/res+width/totCount*(co-1),-height/factorial(depth)-abs(seed)*res);
    this.drawLine(0,height,0,height-this.depth*res-height/(res*co/abs(seed)),0, Math.PI/2, this.depth);
;
    r=modColor(1+r);
    g=modColor(1+g);
    b=modColor(1+b);
pop();
  }
  this.drawLine=function(x1,y1,x2,y2, c, angle, d){
    stroke(modColor(r-this.depth*c),modColor(g-this.depth*c),modColor(b-this.depth*c));
    strokeWeight(d*.3);
    line(x1,y1,x2,y2);

    if(abs(c)<this.depth){
      d--;
      c++;
    //  console.log(c);
      //angle-=angle/depth;
      let newX2=x2+(d)*cos(angle)*res;
      let newY2=y2-(d)*sin(angle)*res;
      //console.log(c,angle,d);
      this.drawLine(x2,y2,newX2,newY2,c, angle+(c*res)/180*Math.PI, d);
      this.drawLine(x2,y2,newX2,newY2,c, angle-(c*res)/180*Math.PI, d);
    }
  }
}
