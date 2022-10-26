// var mic
function setup() {
  createCanvas(windowWidth,windowHeight);
  //angleMode(degrees) //弳度弧度的轉換 此用度數顯示 PI-180
  // mic=new p5.AudioIn();
  // mic.start();
}

function draw() {
  background(220);
  textSize(50)
  text('X:'+mouseX+'Y:'+mouseY,50,50)

  // var micLevel=mic.getLevel;
  // console.log(micLevel)

  // ellipse(width/2,height/2,400)
  // ellipse(width/2,height/2,100,50)
  // ellipse(width/2-25,height/2,25) //左鼻孔
  // ellipse(width/2+25,height/2,25) //右鼻孔

  // ellipse(width/2-80,height/2-90,60) //左眼
  // ellipse(width/2+80,height/2-90,60) //右眼

  // fill(0)
  // ellipse(width/2-80+map(mouseX,0,width,-30,30),height/2-90+map(mouseY,0,height,-30,30),20) //左眼珠 map,追蹤座標，後面是範圍，用眼睛的半徑決定
  // ellipse(width/2+80+map(mouseX,0,width,-30,30),height/2-90+map(mouseY,0,height,-30,30),20)
  // fill(255)


  push() //push依照下面的translate將圓心改到中間， pop後就恢復圓心到0，0

  translate(width/2,height/2)
  ellipse(0,0,400)
  ellipse(0,0,100,50)
  ellipse(-25,0,25) //左鼻孔
  ellipse(25,0,25) //右鼻孔

  ellipse(-80,-90,60) //左眼
  ellipse(80,-90,60) //右眼

  fill(0)
  ellipse(-80+map(mouseX,0,width,-30,30),-90+map(mouseY,0,height,-30,30),20) //左眼珠 map,追蹤座標，後面是範圍，用眼睛的半徑決定
  ellipse(80+map(mouseX,0,width,-30,30),-90+map(mouseY,0,height,-30,30),20)
  if(mouseIsPressed) //滑鼠被按下
  {
    fill(255,0,0) //最外面大弧度
    arc(0,75,200,150,0,PI) //arc弧度(座標，寬，高，弧度pi),pi是三角函數 90度是1/2pi 
  }
  else
  {
    fill(255,0,0)
    arc(0,75,200,75,0,PI)
  }
  fill(255)
  arc(0,74,200,50,0,PI)

  // arc(0,75,200,75+micLevel*1000,0,180)
  // fill(255)
  // arc(0,74,200,50,0,180)

  pop() 
}
