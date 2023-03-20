const mongoose = require ('mongoose');
console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI;

mongoose.connect("mongodb://localhost:27017/mernstack?directConnection=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB conected');
});