const connection = require('../mysql/mysql')

const addUsers = (req, res) => {
    const { nom, password } = req.body;

    const query = 'INSERT INTO users (nom, password) VALUES(?, ?)';

    connection.query(query, [nom, password], (err, result) => {
        if (err) {
            console.log('Erreur lors de l\'ajout des données:', err);
            res.status(500).send('Erreur lors de l\'exécution de la requete.');
            return;
        }
        res.send('User created !');
    });
};

module.exports = addUsers;
