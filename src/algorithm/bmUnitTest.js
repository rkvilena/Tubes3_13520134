// Test Case
// To generate : https://www.bioinformatics.org/sms2/random_dna.html
import { boyermoore, lxcount} from './boyermoore.js';
import { kmp } from './kmp.js';

var inputan = "aacaatgttcgcctcctagaaactcagtctcctccattctaaagggggaaacagtcccgt"
inputan = inputan + "tggggaattagccctgtaatttatcgaatacatggcagtgggggtaatgggtcgccctat"
inputan = inputan + "aaaaaagaagaccacctcatttgggcaattatgatgcgtgagcacgcgaacactgccgcg"
inputan = inputan + "ggttccactgtgatctccgcaacccactcttatcctaacccataccttgggtcaggtgac"
inputan = inputan + "cgactcctctttggttatcgggctagggggtgtggcatttctttagtcgctcatgttcgg"
inputan = inputan + "aagcgtcttaccgtcttacggatgctaacacctcggattcctgctgcaaatcgcacgttc"
inputan = inputan + "ctcagatggccgttggatcttagtcagcgcctaccacgtccaaagttgggactaggggcc"
inputan = inputan + "aggattggttagtcggtatgggtatccccagtctagcacctatgtgctttcactggtttg"
inputan = inputan + "gtgaagaattcagaggcagcgtggttaactgcagaaagtaaaaccgagatttatgagaat"
inputan = inputan + "actctcaagcggtcagtggaacaggtcaatccgaaggacgctccatgccatagggatggc"
inputan = inputan + "catgacgactgtcccctccggggaattacaacggtctattcacgttggctaaaaacttaa"
inputan = inputan + "aatcgtcgcgtacgtatggcattcggaatgtggcaccgcgagcgcggcttgtattttctt"
inputan = inputan + "acagcaaaacaaatgtccctgcttttgtgtataatccgagttctcaaccatactaattgg"
inputan = inputan + "gcattaggacctgcgcgatcgttttcgacctgtgttgtgtcggaacactaaggcacgaga"
inputan = inputan + "cgtgacggccggacatcggcccatcactatgcatcgaatcgacccctgcggaaggcagct"
inputan = inputan + "gtcgggcttcatcctcaggatcaaactctagtcacgccagtcgacgtcggctagcacacg"
inputan = inputan + "taccgggccactccttttcgcccgttgtccacctgcccag"
inputan = inputan.toUpperCase();
console.log(boyermoore(inputan, "ccctgcggaaggca".toUpperCase()));
console.log(kmp(inputan, "ccctgcggaaggca".toUpperCase()));