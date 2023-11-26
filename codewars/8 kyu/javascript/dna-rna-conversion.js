// create a function which returns an RNA sequence from the given DNA sequence
// 1. declare, initialize
// 2. loop - examine each and replace if met the requirement

function DNAtoRNA(dna) {  
  let rna = ""; 

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U"; // Concatenate "U" to the RNA sequence
    } else {
      rna += dna[i]; // Concatenate the current DNA base to the RNA sequence
    }
  }

  return rna;
}

// Test Cases
console.log(DNAtoRNA("GCAT")); // Output: "GCAU"
console.log(DNAtoRNA("GCTA")); // Output: "GCAU"
console.log(DNAtoRNA("ATCG")); // Output: "AUCG"
console.log(DNAtoRNA(""));     // Output: "" (empty string)
console.log(DNAtoRNA("TTTT")); // Output: "UUUU"
