// requires
const express = require( 'express' );
const router = express.Router();
const pool = require( '../pool' );
// routes
router.get( '/', ( req, res )=>{
    console.log( 'in /items GET' );
    let queryString = 'SELECT * FROM items';
    pool.query( queryString ).then( (results)=>{
        res.send( results.rows );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    }) //end query
}) //end /GET

router.post( '/', (req, res )=>{
    console.log( 'in /items POST:', req.body );
    let queryString = `INSERT INTO items ( "size", "color", "description" )
        VALUES ( $1, $2, $3)`;
    pool.query( queryString, [ req.body.size, req.body.color, req.body.description ]).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    }) // end query
}) // end POST 
// exports
module.exports = router;