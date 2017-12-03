var katzDeli = [];

function takeANumber(katzDeliLine,newName) {
  var position = katzDeliLine.indexOf(newName) + 2;
  return `Welcome, ${newName}. You are number ${position} in line.`;
}
