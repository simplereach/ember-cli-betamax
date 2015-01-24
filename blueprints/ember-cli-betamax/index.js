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
            secondFile         = 'tests/test-helper.js',
            secondText         = "insertCassette(cassette);",
            secondLocationText = "QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container' });" + EOL;

            // Import statement
        return this.insertIntoFile( firstFile, firstText, { after: firstLocationText } )

            // Execution of registration function
            .then( function() {
                return this.insertIntoFile( secondFile, secondText, { after: secondLocationText } );
            }.bind(this))
    },

    normalizeEntityName: function() {}
};
