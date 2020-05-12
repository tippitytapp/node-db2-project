require('dotenv').config();

const colors = require('colors');
const morgan = require('morgan');
const server = require('./api/server.js');

const PORT = process.env.PORT;
const MODE = process.env.NODE_ENV;

if(MODE === 'development'){
    server.use(morgan('dev'));
}


server.listen(PORT, () => {
    console.log(`\n === Server listening in ${MODE} on http://localhost:${PORT} ===\n `.magenta.bold.underline)
})