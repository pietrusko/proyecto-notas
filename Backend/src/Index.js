require('dotenv').config();


const app = require ('./app');

require ('./Database');


// app.listen(4000, () => console.log('Server on port 4000'));
async function main() {
    await app.listen(4000);
    console.log('server on port 4000');
}

main();

