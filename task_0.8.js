function timeConvert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;

  if (hours < 2 && minutes < 2) {
    return hours + " hour" + ", " + minutes + " minute";
  } else if (hours < 2) {
    return hours + " hour" + ", " + minutes + " minutes";
  } else if (minutes < 2) {
    return hours + " hours" + ", " + minutes + " minute";
  } else {
    return hours + " hours" + ", " + minutes + " minutes";
  }
}

console.log(timeConvert(72));
