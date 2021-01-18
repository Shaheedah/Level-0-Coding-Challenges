function printVowels(str) {
  var vowels = /[aeiou]/gi;

  return str.match(vowels).toString();
}

console.log(printVowels("applEmuNchy"));
