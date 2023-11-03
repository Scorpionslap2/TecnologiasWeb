const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/web_citas'

mongoose.connect(URL)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;