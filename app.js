const mongoose = require('mongoose');
const User = require('./model/user');

mongoose.connect('mongodb+srv://ralibacari:lZE2rTsMTupnH0iy@dfs27a.he3wcdu.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

//  une fonction pour creer ajouter un User
function createUser(){

    let user = new User({
        firstName: "Mayssa",
        lastName: "Ali bacari",
        email: "Rahdy@test.fr",
        password: "12345"
    });
    // ajouter l'objet en BDD
    user.save()
        .then((data) => console.log(data))
        .catch((error) => console.log(error)) ;
}

function showUser(){
    User.find()
        .then((data) => console.log(data))
        .catch((error) => console.log(error)) ;
}

function showUserbyId(){
    User.findOne({ _id: "65251c0fcc81227feff313ee" })
        .then((data) => console.log(data))
        .catch(error => console.log(error));
}

function updateUser(){
    User.updateOne({ _id: "65251c0fcc81227feff313ee" },
        {
            password: "1111",
            firstName: "Louis",
            lastName: "Ali bacari",
            email: "Rahdy@test.fr",
        })
        .then((data) => console.log(data))
        .catch(error => console.log(error));
}

function deleteUser(){
    User.deleteOne({ _id: "65251c0fcc81227feff313ee" })
        .then((data) => console.log(data))
        .catch(error => console.log(error));
}
//createUser();
//showUser();
//showUserbyId();
//updateUser();
//deleteUser();