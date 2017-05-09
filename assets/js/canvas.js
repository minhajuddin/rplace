(function() {
  var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    lines = [],
    currentLine = [];

  window.lines = lines;

  // setup
  canvas.width = 1000;
  canvas.height = 1000;
  ctx.lineWidth = 5;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'rgba(0, 116, 217, 0.7)';
  //ctx.strokeStyle = '#0074D9';

  // start drawing line
  function startLine(e) {
    var point = pointForEvent(e);
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    currentLine = [];
    lines.push(currentLine);
  }

  // draws line to this x, y coordinate
  function drawLine(e) {
    var point = pointForEvent(e);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    currentLine.push(point);
  }

  function pointForEvent(e) {
    return {
      x: e.pageX - canvas.offsetLeft,
      y: e.pageY - canvas.offsetTop
    }
  }

  canvas.addEventListener('mousedown', function(e) {
    startLine(e)
    canvas.addEventListener('mousemove', drawLine, false);
  }, false);

  canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', drawLine, false);
  }, false);

})()
