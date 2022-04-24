USE dnaregex;

CREATE TABLE test_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE,
    user VARCHAR(100),
    disease VARCHAR(100),
    percentage INT CHECK ( percentage <= 100 AND percentage >= 0 ),
    result VARCHAR(5)
);

CREATE TABLE diseases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    dna_sequence VARCHAR(1000)
);