exports.up = function (connection, Promise) {
  return connection.schema.createTable('reviews', (reviewsTable) => {
    reviewsTable.increments('id').primary().notNullable();
    reviewsTable.integer('product_id').references('products.id').notNullable();
    reviewsTable.integer('rating').notNullable();
    reviewsTable.string('review').notNullable();
  });
};

exports.down = function (connection, Promise) {
  return connection.schema.dropTable('products');
};
