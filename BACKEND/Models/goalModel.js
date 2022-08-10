const mongoose = require('mongoose');

//defining the schema
const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [ true, 'please add a text value' ]
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Goal', goalSchema);