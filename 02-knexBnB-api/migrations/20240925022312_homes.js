/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('homes', function (table) {
        table.increments('house_id').primary()
        table.string('title').notNullable()
        table.text('description')
        table.integer('guest')
        table.text('address')
        table.decimal('rental_price', 12, 2) // 0123456789.12
        table.boolean('active').notNullable().defaultTo(true)
        table.timestamp('created_at').defaultTo(knex.fn.now())
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('homes')
    }
  })
}

/* CREAR LA MIGRACIÓN */
// knex migrate:make nombre_de_la_migracion

/* EJECUTAR UNA MIGRACIÓN */
// knex migrate:latest // ejecuta la migración
// knex migrate:up 20240925022312_homes.js // ejecuta una migración en especifico

/* DESHACER UNA MIGRACIÓN */
// knex migrate:rollback latest // deshace la última migración
// knex migrate:rollback --all // deshace todas las migraciones
// knex migrate:rollback 20240925022312_homes.js // deshace una migración en especifico
