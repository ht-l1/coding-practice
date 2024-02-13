def dna_to_rna(dna):
    rna = ""
    for char in dna:
        if char == "T":
            rna += "U"
        else:
            rna += char
    return rna
