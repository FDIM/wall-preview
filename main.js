var wall = document.querySelector('#wall');
var wallWidth = 250;
var wallHeight = 250;
var topOffset = 41 + 16;
var backgroundTopOffset = (wall.clientHeight*(topOffset / wallHeight));
var image = wall.getAttribute('data-image');
var bg = document.querySelector('#wall>.background');
bg.style.backgroundSize = wall.clientWidth+'px';
bg.style.backgroundPositionY = backgroundTopOffset +'px';
bg.style.backgroundImage = 'url('+image+')'; 
var screens = [
  {// light blue, top most
    x: 63,
    y: topOffset,
    width: 28,
    height: 20
  },
  {// black on the top right
    x: 192, 
    y: topOffset,
    width: 16,
    height: 22
  },
  {// black on the left
    x: 20, 
    y: topOffset+42,
    width: 16,
    height: 22
  },
  {// black on the right
    x: 217, 
    y: topOffset+64,
    width: 16,
    height: 22
  },
  { // pink top most
    x: wallWidth-73-23, 
    y: topOffset+7,
    width: 23,
    height: 35
  },
  { // red
    x: 98, 
    y: topOffset+24,
    width: 52,
    height: 33
  },
  { // blue to the left of red
    x: 45, 
    y: topOffset+32,
    width: 45,
    height: 29
  },
  { // other blue, below red
    x: 113, 
    y: topOffset+65,
    width: 45,
    height: 29
  },
  { // pink to the left of the above
    x: 80, 
    y: topOffset+70,
    width: 23,
    height: 35
  },
  { // green to the right of the above blue
    x: 111, 
    y: topOffset+104,
    width: 38,
    height: 29
  },
  { // green below of the above blue
    x: 167, 
    y: topOffset+51,
    width: 38,
    height: 29
  },
  {// light blue, bottom right corner
    x: 29,
    y: topOffset+107,
    width: 20,
    height: 28
  },
  {// light blue, above of the above :)
    x: 38,
    y: topOffset + 70,
    width: 28,
    height: 20
  },
  {// light blue, below and to the right of the above 
    x: 64,
    y: topOffset+114,
    width: 28,
    height: 20
  },
  {// light blue, bottom right corner
    x: 167,
    y: topOffset+89,
    width: 28,
    height: 20
  },
  {// light blue, above of the above
    x: 191,
    y: topOffset+114,
    width: 28,
    height: 20
  }
];

screens.forEach(generateScreen);

function generateScreen(screen){
  var div = document.createElement('div');
  div.style.left = ((screen.x / wallWidth) * 100)+'%';
  div.style.top = ((screen.y / wallHeight) * 100)+'%';
  div.className = 'screen';
  div.style.width = ((screen.width / wallWidth) * 100)+'%';
  div.style.height = ((screen.height / wallHeight) * 100)+'%';
  div.style.backgroundColor = 'red';
  div.style.backgroundSize = wall.clientWidth+'px';
  div.style.backgroundImage = 'url('+image+')';
  div.style.backgroundPositionX = (-wall.clientWidth * (screen.x / wallWidth))+'px';
  div.style.backgroundPositionY = backgroundTopOffset+(-wall.clientHeight * (screen.y / wallHeight))+'px';
  wall.appendChild(div);
}
