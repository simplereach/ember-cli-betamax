/* globals module */

var EOL = require('os').EOL;

module.exports = {
    description: 'record api queries to cassettes',

    afterInstall: function( options ) {
 
            // Import statement
        var firstFile          = 'tests/test-helper.js',
            firstText          = "import insertCassette from './helpers/insert-cassette';"  + EOL +
                                 "import cassette from './helpers/cassette';",
            firstLocationText  = "import resolver from './helpers/resolver';" + EOL,


            // Execution of registration function
            secondText         = "insertCassette(cassette);",
            secondLocationText = "setResolver(resolver);" + EOL;

            // Import statement
            //
            return this.addBowerPackageToProject('http://sinonjs.org/releases/sinon-1.12.2.js')

            .then(function(){
              return this.insertIntoFile( firstFile, firstText, { after: firstLocationText } )
            }.bind(this))

            // Execution of registration function
            .then( function() {
              return this.insertIntoFile( firstFile, secondText, { after: secondLocationText } );
            }.bind(this))
    },

    normalizeEntityName: function() {}
};
