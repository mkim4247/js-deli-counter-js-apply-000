function takeANumber(line) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}



function nowServing(line) {
  while (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  }
  return 'There is nobody waiting to be served!';
}

//function nowServing(line) {
//	if (line.length > 0) {
//		return `Currently serving ${line.shift()}.`;
//	}
//	if (line.length === 0) {
//		return "There is nobody waiting to be served!";
//	}
//}

function currentLine(line) {
  var arr = [];
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      arr.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:${arr}`;
  }
  if (line.length === 0) {
    return "The line is currently empty.";
  }
}
