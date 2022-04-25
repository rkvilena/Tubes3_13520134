// Boyer-Moore Function
function boyermoore(strinput, strpattern) {
    let last = lxcount(strpattern);
    let n = strinput.length;
    let m = strpattern.length;
    let i = m - 1;

    if (i > n - 1) {
        // Pattern length is longer than input
        return false;
    }

    let j = m - 1;
    do {
        if (strinput[i] == strpattern[j]) {
            if (j == 0) {
                // string match
                return true;
            }
            else {
                // apply looking-glass technique
                i--;
                j--;
            }
        }
        else {
            // apply character jump technique
            let lo = last.get(strinput[i]); //last occ
            i = i + m - Math.min(j, 1 + lo);
            j = m - 1;
        }
    } while (i <= n - 1);
    return false;
}

// Last Occurence Function
// Special for DNA
function lxcount(string) {
    const lx = new Map([
        ['A', -1],
        ['G', -1],
        ['C', -1],
        ['T', -1]
    ]); // Map to put last occurence index of AGCT
    let idx = string.length - 1;
    let lastOccurFinish = false;
    while (idx >= 0 && !lastOccurFinish) {
        console.log("BMing")
        let agctnotfilled = lx.get('A') != -1;
        agctnotfilled = agctnotfilled && (-1 != lx.get('G'));
        agctnotfilled = agctnotfilled && (-1 != lx.get('C'));
        agctnotfilled = agctnotfilled && (-1 != lx.get('T'));
        if (!agctnotfilled) {
            if (lx.get(string[idx]) == -1) {
                lx.set(string[idx], idx);
            }
            idx--;
        }
        else {
            lastOccurFinish = true;
        }
    }
    return lx;
}

export { boyermoore, lxcount };