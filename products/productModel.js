const db = require('../data/db-config')

module.exports = {
    //function names:
    find,
    insert,
    remove
}

    //functions:
    function find(){
        return db('products')
    }
    async function insert(product){
        const [id] = await db('products').insert(product)
        return db('products').where({id}).first
    }
    function remove(id){
        return db('products').where({id}).delete()
    } 