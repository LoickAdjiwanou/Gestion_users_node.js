const connection = require('../mysql/mysql')

const searchUser = (req, res) => {
    const { nom } = req.body;
    
    const query = 'SELECT * FROM users WHERE nom = ?';

    connection.query(query, [nom], (err, rows) => {
        if (err) {
            console.log('Erreur lors de la récupérartion des données:', err);
            res.status(500).send('Erreur lors de l\'exécution de la requete.');
            return;
        }
        res.json(rows);
    });
};

module.exports = searchUser;
