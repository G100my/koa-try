/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('album', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.timestamps(false, true)
    })
    .createTable('photo', table => {
      table.increments('id').primary()
      table.string('uuid').unique().notNullable()
      table.timestamps(false, true)
    })
    .createTable('album_photo', table => {
      table.increments('id').primary()
      table.integer('album_id').unsigned().references('id').inTable('album')
      table.integer('photo_id').unsigned().references('id').inTable('album')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('album_photo').dropTableIfExists('photo').dropTableIfExists('album')
}
