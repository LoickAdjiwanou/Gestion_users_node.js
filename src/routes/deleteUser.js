const connection = require('../mysql/mysql')

const deleteUser = (req, res) => {
    const { nom } = req.body;
    
    const query = 'DELETE FROM users WHERE nom = ?';

    connection.query(query, [nom], (err) => {
        if (err) {
            console.log('Erreur lors de la récupérartion des données:', err);
            res.status(500).send('Erreur lors de l\'exécution de la requete.');
            return;
        }
        res.send("User deleted !");
    });
};

module.exports = deleteUser;
