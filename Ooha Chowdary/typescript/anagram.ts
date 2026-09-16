function areAnagrams(str1: string, str2: string): boolean {

    
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();

    
    if (str1.length !== str2.length) {
        return false;
    }

 
    const sorted1 = str1.split("").sort().join("");
    const sorted2 = str2.split("").sort().join("");

   
    return sorted1 === sorted2;
}

const str1: string = "listen";
const str2: string = "silent";

if (areAnagrams(str1, str2)) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}