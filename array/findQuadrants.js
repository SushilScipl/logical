function findQuadrant(x, y) {
  if (x > 0 && y > 0) return "Quadrant I";
  else if (x < 0 && y > 0) return "Quadrant II";
  else if (x < 0 && y < 0) return "Quadrant III";
  else if (x > 0 && y < 0) return "Quadrant IV";
  else if (x === 0 && y !== 0) return "On Y-axis";
  else if (x !== 0 && y === 0) return "On X-axis";
  else return "Origin";
}

console.log(findQuadrant(-5, 4)); // Quadrant II