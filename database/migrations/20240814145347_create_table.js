/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function up(knex) {
    return knex.schema.createTable("users", (table) => {
      table.increments("id");
      table.string("email", "320").notNullable().unique();
      table.string("password").nullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function down(knex) {
    return knex.schema.dropTable("users");
  };