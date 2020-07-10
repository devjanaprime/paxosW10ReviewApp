const express = require( 'express' );
const router = express.Router();

let items = [
    {
        color: 'red',
        size: 'tiny',
        description: 'drop of blood'
    },
    {
        color: 'red',
        size: 'small',
        description: 'cup of blood'
    },
    {
        color: 'red',
        size: 'medium',
        description: 'bucket of blood'
    },
]

router.get( '/', ( req, res )=>{
    console.log( '/inventory GET hit' );
    res.send( items );
})

module.exports = router;