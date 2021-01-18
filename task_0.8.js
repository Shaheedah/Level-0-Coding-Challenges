function timeConvert(num) {
  var hours = Math.floor(num / 60)
  var minutes = num % 60

  if (hours < 2) {
    return hours + " hour" + ", " + minutes + " minutes"
  } else {
    return hours + " hours" + ", " + minutes + " minutes"
  }
}

console.log(timeConvert(133));
