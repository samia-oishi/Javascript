function cleanUpString(str){
    return str.trim().replace(/white/g,"red");
}

console.log(cleanUpString("     Her complexion was a porcelain white and her presence dainty.          "));
