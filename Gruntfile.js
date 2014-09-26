module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'app'
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js']
    },

    watch: {
      files: ['Gruntfile.js'],
      tasks: ['jshint']
    },

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['connect', 'watch']);

};
