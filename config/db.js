const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('DB conectada');
  } catch (e) {
    console.log(e);
    process.exit(1); //Detiene la app
  }
}

module.exports = conectarDB
