function indexOfIgnoreCase(s1, s2) {
  // write your code here
 let str = s1.toLowerCase();
    let subStr = s2.toLowerCase();
    if (subStr.length === 0) return 0; 
    for (let i = 0; i <= str.length - subStr.length; i++) {
        if (str.slice(i, i + subStr.length) === subStr) {
            return i;
        }
    }

    return -1;
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
