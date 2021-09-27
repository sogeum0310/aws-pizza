var mongoose = require('mongoose')
var Schema = mongoose.Schema

// const Cat = mongoose.model('Bunny', { name: String });

// const kitty = new Cat({ name: 'carroty' });
// kitty.save().then(() => console.log('yumyum'));

module.exports = mongoose.model('Cat', { name: String } )

