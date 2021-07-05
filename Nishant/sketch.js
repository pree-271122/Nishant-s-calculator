var num1 , num2;
var b1,b2;
function setup() {
  createCanvas(700, 700);

  num1=createInput();
  num1.position(100,100);

  num2=createInput();
  num2.position(300,100);

  b1=createButton("ADDITION");
  b1.position(100,300);
  b1.mousePressed(add);

  b2=createButton("SUBTRACTION");
  b2.position(100,400);
  b2.mousePressed(sub);

}

function draw() {
  background("gray");

  fill ("white");
  text("Enter number 1",100,50);
  text("Enter number 2",300,50);

  n1=parseInt(num1.value());
  n2=parseInt(num2.value());

}

function add(){
  console.log(n1+n2);
}
function sub(){
  console.log(n1-n2);
}