const jwt = require('jsonwebtoken');
const db = require('../database');
const bcrypt = require('bcrypt');

// const createAccount = (req, res) => {
//     const {
//         category,
//         first_name,
//         last_name,
//         gender,
//         date_of_birth,
//         email,
//         instagram,
//         phone_number,
//         passport_kitas,
//         citizens,
//         full_address,
//         town,
//         province,
//         zip_code,
//         community,
//         voucher,
//         tshirt_size,
//         name_contact_person,
//         kinship_relationship,
//         contact_phone_number,
//         participated_before,
//         link_result,
//         blood_type,
//         illnesses,
//         allergies,
//         username,
//         password
//     } = req.body;

//     bcrypt.hash(password, 10, (err, hashedPassword) => {
//         if (err) {
//             console.error('Error hashing password: ' + err.stack);
//             res.status(500).send('Error hashing password');
//             return;
//         }

//         const query = `
//             INSERT INTO accounts (
//                 category,
//                 first_name,
//                 last_name,
//                 gender,
//                 date_of_birth,
//                 email,
//                 instagram,
//                 phone_number,
//                 passport_kitas,
//                 citizens,
//                 full_address,
//                 town,
//                 province,
//                 zip_code,
//                 community,
//                 voucher,
//                 tshirt_size,
//                 name_contact_person,
//                 kinship_relationship,
//                 contact_phone_number,
//                 participated_before,
//                 link_result,
//                 blood_type,
//                 illnesses,
//                 allergies,
//                 username,
//                 password
//             ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//         db.query(query, [
//             category,
//             first_name,
//             last_name,
//             gender,
//             date_of_birth,
//             email,
//             instagram,
//             phone_number,
//             passport_kitas,
//             citizens,
//             full_address,
//             town,
//             province,
//             zip_code,
//             community,
//             voucher,
//             tshirt_size,
//             name_contact_person,
//             kinship_relationship,
//             contact_phone_number,
//             participated_before,
//             link_result,
//             blood_type,
//             illnesses,
//             allergies,
//             username,
//             hashedPassword
//         ], (err, result) => {
//             if (err) {
//                 console.error('Error creating account: ' + err.stack);
//                 res.status(500).send('Error creating account');
//                 return;
//             }
//             res.status(201).send('Account created successfully');
//         });
//     });
// };

const createAccount = (req, res) => {
    const {
        first_name,
        last_name,
        gender,
        date_of_birth,
        email,
        instagram,
        phone_number,
        passport_kitas,
        citizens,
        full_address,
        town,
        province,
        zip_code,
        username,
        password
    } = req.body;

    // Memeriksa apakah semua nilai yang diperlukan sudah diisi
    if (!first_name || !last_name || !gender || !date_of_birth || !email || !instagram || !phone_number || !passport_kitas || !citizens || !full_address || !town || !province || !zip_code || !username || !password) {
        res.status(400).send('All required fields must be filled');
        return;
    }

    // Lanjutkan dengan membuat akun setelah memastikan semua nilai yang diperlukan telah diisi
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password: ' + err.stack);
            res.status(500).send('Error hashing password');
            return;
        }

        const query = `
            INSERT INTO accounts (
                first_name,
                last_name,
                gender,
                date_of_birth,
                email,
                instagram,
                phone_number,
                passport_kitas,
                citizens,
                full_address,
                town,
                province,
                zip_code,
                username,
                password
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        db.query(query, [
            first_name,
            last_name,
            gender,
            date_of_birth,
            email,
            instagram,
            phone_number,
            passport_kitas,
            citizens,
            full_address,
            town,
            province,
            zip_code,
            username,
            hashedPassword
        ], (err, result) => {
            if (err) {
                console.error('Error creating account: ' + err.stack);
                res.status(500).send('Error creating account');
                return;
            }
             res.status(201).json({
                status: 'success',
                message: 'Account created successfully'
            });
        });
    });
};

const getAccountById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM accounts WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Error getting account: ' + err.stack);
            res.status(500).send('Error getting account');
            return;
        }
        if (result.length === 0) {
            res.status(404).send('Account not found');
            return;
        }
        res.status(200).json(result[0]);
    });
};

const updateAccountById = (req, res) => {
    const id = req.params.id;
    const { 
        category,
        first_name,
        last_name,
        gender,
        date_of_birth,
        email,
        instagram,
        phone_number,
        passport_kitas,
        citizens,
        full_address,
        town,
        province,
        zip_code,
        community,
        voucher,
        tshirt_size,
        name_contact_person,
        kinship_relationship,
        contact_phone_number,
        participated_before,
        link_result,
        blood_type,
        illnesses,
        allergies,
        username,
        password
    } = req.body;

    const updates = [];
    const values = [];

    // Helper function to add fields to update
    const addUpdate = (field, value) => {
        if (value !== undefined) {
            updates.push(`${field} = ?`);
            values.push(value);
        }
    };

    addUpdate('category', category);
    addUpdate('first_name', first_name);
    addUpdate('last_name', last_name);
    addUpdate('gender', gender);
    addUpdate('date_of_birth', date_of_birth);
    addUpdate('email', email);
    addUpdate('instagram', instagram);
    addUpdate('phone_number', phone_number);
    addUpdate('passport_kitas', passport_kitas);
    addUpdate('citizens', citizens);
    addUpdate('full_address', full_address);
    addUpdate('town', town);
    addUpdate('province', province);
    addUpdate('zip_code', zip_code);
    addUpdate('community', community);
    addUpdate('voucher', voucher);
    addUpdate('tshirt_size', tshirt_size);
    addUpdate('name_contact_person', name_contact_person);
    addUpdate('kinship_relationship', kinship_relationship);
    addUpdate('contact_phone_number', contact_phone_number);
    addUpdate('participated_before', participated_before);
    addUpdate('link_result', link_result);
    addUpdate('blood_type', blood_type);
    addUpdate('illnesses', illnesses);
    addUpdate('allergies', allergies);
    addUpdate('username', username);

    const completeUpdate = () => {
        if (updates.length === 0) {
            res.status(400).send('No fields to update');
            return;
        }

        const query = `UPDATE accounts SET ${updates.join(', ')} WHERE id = ?`;
        values.push(id);

        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Error updating account: ' + err.stack);
                res.status(500).send('Error updating account');
                return;
            }
            return res.status(200).json({
                success: true,
                message: 'Account updated successfully',
            });
        });
    };

    if (password) {
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Error hashing password: ' + err.stack);
                res.status(500).send('Error hashing password');
                return;
            }

            addUpdate('password', hashedPassword);
            completeUpdate();
        });
    } else {
        completeUpdate();
    }
};



const deleteAccountById = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM accounts WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Error deleting account: ' + err.stack);
            res.status(500).send('Error deleting account');
            return;
        }
        res.status(200).send('Account deleted successfully');
    });
};

const searchParticipant = (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM accounts WHERE username = ?', [username], (err, result) => {
        if (err) {
            console.error('Error searching participant: ' + err.stack);
            return res.status(500).json({ success: false, message: 'Error searching participant' });
        }
        if (result.length === 0) {
            return res.status(404).json({ success: false, message: 'Participant not found' });
        }
        const account = result[0];

        bcrypt.compare(password, account.password, (compareErr, isMatch) => {
            if (compareErr) {
                console.error('Error comparing passwords: ' + compareErr.stack);
                return res.status(500).json({ success: false, message: 'Error comparing passwords' });
            }
            if (!isMatch) {
                return res.status(401).json({ success: false, message: 'Incorrect password' });
            }

            const token = jwt.sign({ id: account.id, username: account.username }, 'your_jwt_secret_key', { expiresIn: '1h' });

            return res.status(200).json({
                success: true,
                message: 'Login successful!',
                account,
                token
            });
        });
    });
};



module.exports = {
    createAccount,
    getAccountById,
    updateAccountById,
    deleteAccountById,
    searchParticipant,
};
