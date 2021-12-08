if (process.env.NODE_ENV === 'production'){
  console.log("production")
} else {
  console.log("development")
}

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}

