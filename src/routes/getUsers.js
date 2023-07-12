const connection = require('../mysql/mysql')

const getUsers = (req, res) => {
    const query = 'SELECT * FROM users';

    connection.query(query, (err, rows) => {
        if (err) {
            console.log('Erreur lors de la récupérartion des données:', err);
            res.status(500).send('Erreur lors de l\'exécution de la requete.');
            return;
        }
        res.json(rows);
    });
};

module.exports = getUsers;
