CREATE TABLE accounts(
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(100) NOT NULL,
    instagram VARCHAR(100),
    phone_number VARCHAR(20) NOT NULL,
    passport_kitas VARCHAR(50),
    citizens VARCHAR(50),
    full_address TEXT NOT NULL,
    town VARCHAR(100) NOT NULL,
    province VARCHAR(100) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    community VARCHAR(100),
    voucher VARCHAR(50),
    tshirt_size VARCHAR(10),
    name_contact_person VARCHAR(100) NOT NULL,
    kinship_relationship VARCHAR(50) NOT NULL,
    contact_person_phone_number VARCHAR(20) NOT NULL,
    participated_before VARCHAR(10),
    link_result VARCHAR(255),
    blood_type VARCHAR(3),
    illnesses TEXT NOT NULL,
    allergies TEXT NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
