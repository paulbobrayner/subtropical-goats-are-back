exports.up = function (connection, Promise) {
  return connection.schema.alterTable('reviews', (reviewsTable) => {
    reviewsTable.decimal('rating', null).notNullable().alter();
  });
};

exports.down = function (connection, Promise) {
  return connection.schema.alterTable('reviews', (reviewsTable) => {
    reviewsTable.integer('rating').notNullable().alter();
  });
};
