var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
   var number = Math.random()
   if(number<0.5){
    makeRect(0, 0, 200, 100, "white", 1)
   makeRect(0, 0, 200, 100, "blue", 0.25) 
   makeCircle(100, 25, 25, "white", 1)
   makeCircle(100, 25, 25, "orange", 0.5)
   makeCircle(100, 25, 25, "yellow", 0.25)
   makeEllipse(100, 105, 125, 50, "white", 1)
   makeEllipse(100, 105, 125, 50, "green", 0.5)
makeImage("http://www.flytesystems.com/wp-content/uploads/2014/06/airplane-flying.png", 2.5, 0, 50, 50, 1)
} else {
     makeRect(0, 0, 200, 100, "white", 1)
   makeRect(0, 0, 200, 100, "blue", 0.25) 
   makeCircle(100, 25, 25, "white", 1)
   makeCircle(100, 25, 25, "orange", 0.5)
   makeCircle(100, 25, 25, "yellow", 0.25)
   makeEllipse(100, 105, 125, 50, "white", 1)
   makeEllipse(100, 105, 125, 50, "green", 0.5)
    makeEllipse(25, 25, 15, 5, "white", 1)
    makeEllipse(175, 35, 15, 5, "white", 1)
   
}
}

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene(){
    var number = Math.random()
    if(number<0.5){
    makeRect(0, 0, 200, 100, "white", 1)
   makeRect(0, 0, 200, 100, "blue", 0.1)
makeImage("http://popcrush.com/files/2017/02/cash-me-outside-how-bow-dah.jpg?w=630&h=420&zc=1&s=0&a=t&q=89", 25, 25, 50, 50, 1)
makeImage("https://i.ytimg.com/vi/nytzHVEHLLs/hqdefault.jpg", 125, 20, 100, 50, 1)
makeText("Dank Memes", 50, 15, 10, "sans-serif", "navy", 0.4)
    }else{
    makeRect(0, 0, 200, 100, "white", 1)
   makeRect(0, 0, 200, 100, "blue", 0.1)
makeImage("http://i3.kym-cdn.com/photos/images/original/001/102/474/a6c.jpeg", 75, 25, 150, 75, 1)
makeImage("https://i.ytimg.com/vi/oNVfrxkHj1M/maxresdefault.jpg", 15, 25, 100, 75, 1)
makeText("Dank Memes", 50, 15, 10, "sans-serif", "navy", 0.4)

    }
}       


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene(){
    var number=Math.random()
    if(number<0.5){
    makeRect(0, 0, 200, 100, "white", 1)
    makeRect(0, 0, 200, 100, "blue", 0.1)
    makeLine(0, 0, 0, 200, "black", 5, 0.3)
    makeText("Bienvenue à Québec", 50, 50, 10, "sans-serif", "navy", 0.4)
    makeText("Parlez-vous français ?", 50, 60, 10, "sans-serif", "navy", 0.4)
makeImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Flag_of_Quebec_(1-2).svg/1280px-Flag_of_Quebec_(1-2).svg.png", 2.5, 0, 50, 50, 1)
    }else{
        makeRect(0, 0, 200, 100, "white", 1)
    makeRect(0, 0, 200, 100, "blue", 0.1)
    makeLine(0, 0, 0, 200, "black", 5, 0.3)
    makeText("Bienvenue à Québec", 50, 50, 10, "sans-serif", "navy", 0.4)
    makeText("Nous n'aimons pas l'anglais", 50, 60, 10, "sans-serif", "navy", 0.4)
makeImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Flag_of_Quebec_(1-2).svg/1280px-Flag_of_Quebec_(1-2).svg.png", 2.5, 0, 50, 50, 1)
    }
        
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var thing1 = Math.random()
if (thing1<0.33)  {
  createFirstScene()
} else if (thing1 > 0.67) {
  createSecondScene()
} else {
  createThirdScene()
}
    // If the number is less than 0.33, call the function to create your first scene.
    
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    
    
    // Else, call the function to create your third scene.
    
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}