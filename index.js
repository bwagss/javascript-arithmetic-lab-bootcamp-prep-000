function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a , b) {
  return a * b
}

function divide(a, b) {
  if(b === 0){
    return "ERROR"
  } else {
    return a / b
  }
}

function inc(n) {
  return n += 1
}

function dec(n) {
  return n -= 1
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}