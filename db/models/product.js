const connection = require('../connection');

exports.fetchProduct = (id) =>
  connection.select('*').from('products').where('products.id', '=', id);
