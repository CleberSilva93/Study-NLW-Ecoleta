import Knex from 'knex';

export async function up(knex: Knex){
    // criar tabela
    return knex.schema.createTable('points_itens', table => {
        table.increments('id').primary();
        table.string('point_id')
        .notNullable()
        .references('id')
        .inTable('points');
        table.string('item_id')
        .notNullable()
        .references('id')
        .inTable('itens');

    })
}

export async function down(knex: Knex){
    // eke renive a tabela- rollback
   return knex.schema.dropTable('points_itens')
}