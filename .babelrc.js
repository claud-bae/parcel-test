module.exports = {
    presets : [ '@babel/preset-env' ] , 
    plugins : [ 
        require( '@babel/plugin-transform-runtime' )
    ]
}