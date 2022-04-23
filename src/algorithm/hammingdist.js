// Hamming Distance Algorithm
function hammingdistance(str1, str2){
    let diffcount = 0;
    for (let i = 0; i < str1.length; i++){
        if (str1[i] != str2[i]){
            diffcount++;
        }
    }
    return diffcount;
}

function hammingpercentage(str1, str2) {
    let diffcount = hammingdistance(str1, str2);
    return 1.00 - (diffcount / str1.length);
}

function hammingprocess(longstring, strpattern) {
    let maxpercentage = 0.00;

    for (let i = 0; i <=  longstring.length - strpattern.length; i++){
        let lspartial = "";
        for (let j = i; j < strpattern.length + i; j++){
            lspartial += longstring[j];
        }

        // Compare using hamming algorithm
        let currentpercentage = hammingpercentage(lspartial, strpattern);
        if (maxpercentage < currentpercentage){
            maxpercentage = currentpercentage;
        }
        // Early true
        // Shorter process
        // if (maxpercentage >= 0.80){
        //     return [true, maxpercentage];
        // }
    }
    // Late true
    // Longer process
    if (maxpercentage >= 0.80){
        return [true, maxpercentage];
    }
    // maxpercentage < 0.80
    return [false, maxpercentage];
}

export { hammingprocess, hammingpercentage, hammingdistance };