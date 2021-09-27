const products = [{ name: 'Subtropical goats' }, { name: 'Dune' }];

exports.seed = function (connection, promise) {
  return connection.insert(products).into('products');
};
