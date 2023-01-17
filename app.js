/* import mysql from 'mysql'; */
import knex from 'knex';
import {options} from 'options';



// --------------- CRUD con KNEX ---------------


//--------- creacion tabla --------
const knex = knex()(options);
knex.schema.createTable('stock_producto', table => {
    table.increments('id')
    table.string('name_pro')
    table.integer('precio')
    table.integer('cantidad')
    table.string('description')
    table.datetime('fecha compra')
    table.string('contacto_proveedor')
})
.then(() => console.log('Tabla creada con exito'))
.catch((error) => { console.log(error); throw error })
.finally(() => {
    knex.destroy()
});


//----------- insert dato en tabla ------------
knex('stock').insert(name_pro)
    .then(()=> { console.log('Dato cargado') })
    .catch((err) => { console.log(err); throw err })
    .finally(() => { knex.destroy(); });



// ------------- selecionar un registro ----------




// ------------- Actualizar un registro -----------






// --------------- Delete de un registro ------------




//------------ CRUD con MySQL -------------------

/* const coneccion = mysql.createConnection({
    host:'localhost',
    database:'dd_bb_coffe_store',
    user:'root',
    password:''
}); */


/* console.clear();
coneccion.connect( function(error){
    if(error){ throw error 
    }else{
        console.log('Coneccion Exitosa')
    }
}); */




//---------- MOSTRAR ----------------
/* coneccion.query('select * from usuario', function (error, filas){
    if(error){
        throw error;
    }else{
        filas.forEach(fila => {
            console.log(fila);
        });
    }
}); */


//-------------- INSERTAR ----------------
/* coneccion.query('insert into usuario (nickname, email, id_user, name, last_name, age, address, estado_user, id_pro) VALUES( "Tal12", "talos030675@gmail.com", 29, "gon", "rod per", 47, "marcos lenzoni 915", "activo", 91 )', function(error, results){ 
if(error) throw error
    console.log('Registro exitoso', results)
}); */
    

// -------------- ACTUALIZAR -------------------
/* coneccion.query('update usuario set name = "Gonzalo", last_name = "Per" where id_pro= 1', function(error, results){
    if(error) throw error;
    console.log('Registro exitoso', results) 
}); */


//-------------- ELIMINAR O BORRAR -----------------
/* coneccion.query('delete from usuario where id_user = 21', function(error, results){
    if(error) throw error;
    console.log('Registro eliminado', results) 
}); */
// nunca olvidar el where en un delelte




//------------------ CRUD sobre la base de datos -------------------
/* coneccion.end(); */



//------------------------------------------
/* CREATE TABLE IF NOT EXISTS `dd_bb_coffe_store`.`usuario` (
    `id_user` INT(11) GENERATED ALWAYS AS () VIRTUAL,
    `nickname` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `age` INT NULL,
    `address` VARCHAR(45) NULL,
    `user_estado` VARCHAR(25) NOT NULL,
    `id_pro` INT(11) NOT NULL,
    PRIMARY KEY (`id_user`),
    INDEX `id_pro_idx` (`id_pro` ASC) VISIBLE,
    CONSTRAINT `id_pro`
      FOREIGN KEY (`id_pro`)
      REFERENCES `dd_bb_coffe_store`.`producto` (`id_producto`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB  */
//--------------------------------------





