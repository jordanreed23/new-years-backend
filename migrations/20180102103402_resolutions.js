exports.up = function(knex, Promise) {
  return knex.schema.createTable('resolutions', (table) => {
    table.increments();
    table.integer('user_id').references('users.id').onDelete('CASCADE');
    table.text('resolution');
    table.integer('streak');
});
};

exports.down = function(knex, Promise) {
knex.schema.dropTable('resolutions');
};
