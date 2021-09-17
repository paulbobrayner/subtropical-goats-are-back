exports.up = function (connection, Promise) {
  return connection.schema.createTable('products', (productsTable) => {
    productsTable.increments('id').primary().notNullable();
    productsTable.string('name').notNullable();
  });
};

exports.down = function (connection, Promise) {
  return connection.schema.dropTable('products');
};
