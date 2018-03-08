
var canvas = document.querySelector('canvas');

console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



var maxRadius = 40;
var minRadius = 2;

var mouse = {
  x: undefined,
  y: undefined
}

var colorArray = ['#6ADCDD', '#A8E8CD', '#F2FFE1', '#F0A007', '#D94546']

window.addEventListener('mousemove', function(event)
{
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);

});

window.addEventListener('resize', function()
{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();

});

function Circle(x, y, dx, dy, radius)
{
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[parseInt(Math.random()*colorArray.length)];

  this.draw = function()
  {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function()
  {
    if(this.x+this.radius >= innerWidth || this.x-this.radius < 0)
    {
      this.dx = -this.dx;
    }

    if(this.y+this.radius >= innerHeight || this.y-this.radius <= 0)
    {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if(mouse.x - this.x < 50 && mouse.x-this.x > -50
      && mouse.y -this.y < 50
      && mouse.y - this.y > -50
    )
    {
      if(this.radius < maxRadius)
      {
        this.radius += 1;
      }
    }
    else if(this.radius > this.minRadius)
    {
      this.radius -= 1;
    }

    this.draw();

  }
}

var circleAr = [];

function init()
{
  circleAr = [];
  for(var i=0;i<800;++i)
  {
    var x = Math.random()*(innerWidth-radius*2)+radius;
    var y = Math.random()*(innerHeight-radius*2)+radius;
    var dx = (Math.random() - 0.5)*4;
    var dy = (Math.random() - 0.5)*4;
    var radius = Math.random()*3 + 1;

    circleAr.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate()
{
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var i=0;i<circleAr.length;++i)
  {
    circleAr[i].update();
  }

}
init();
animate();
