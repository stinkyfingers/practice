module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": ["js/file1.js", "js/file2.js"],
                "dest": "js/app.js"
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Task definitions
    grunt.registerTask('default', ['concat']);
};

//http://stackoverflow.com/questions/15703598/how-to-install-grunt-and-how-to-built-script-with-it