const { knex } = require("./connection");
const resolvers = {
    Query: {
        async persona() {
            return await knex.select().from("persona").orderBy('points','desc')
        },
        async personas(_, args) {
            try {
                return await knex.select().from("persona").where('id', args.id) 
            } catch (error) {
                console.log(error);   
            }            
        },
        async empleado(){
            try {
                return await knex.select().from('empleados').orderBy('id','desc')
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation:{
            async createPersona(_, fullname, points, position, empleados_id){
                try {
                    let resultado = await knex('persona').insert(fullname, points, position, empleados_id);
                    const id = resultado[0];
                    return await knex('persona').where({ id }).first();                    
                } catch (error) {
                    console.log(error);
                }
            },
            async updatePersona(_, args){
                try {
                    const { id, fullname, points, position,empleados_id, active } = args
                    await knex('persona').where({ id }).update({fullname, points, position, empleados_id, active});
                    return await knex('persona').where({ id }).first();                    
                } catch (error) {
                    console.log(error);
                }
            },
            async deletePersona(_, args){
                try {
                    const { id } = args
                    await knex('persona').where({ id }).update({ active: false });
                    return await knex('persona').where({ id }).first();
                } catch (error) {
                    console.log(error);
                }
            }

    },
    Persona:{
        async empleados(obj) {
            try {
                return await knex.select().from('empleados').where('id', obj.empleados_id)
            } catch (error) {
                console.log(error);
            }
        } 
    },
}
module.exports = resolvers;