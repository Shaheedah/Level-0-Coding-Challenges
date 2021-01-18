function commonCharacters(str1, str2){
    var results = " "

    for(var i = 0; i < str1.length; i++){
        for(var j = 0; j < str2.length; j++){
            if(str2[j] === str1[i]){
                results += str1[i]
            }
        }
    }
    return "Common letters: " + results.split("")
}

console.log(commonCharacters("house", "computers"))