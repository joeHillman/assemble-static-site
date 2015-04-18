module.exports = function(grunt){
  grunt.config('assemble', {
    options: {
      flatten: 'true'
    },
    project: {
      options: {
        layoutdir: 'src/templates/layouts',
        partials: ['src/templates/partials/*.{hbs,md}'],
        data: ['src/data/*.{json,yml}'],
        imageAssets: 'dist/images',
        scriptAssets: 'scripts'
      },
      files: {
        dist: ['src/templates/pages/*.hbs']
      }
    }
  })//Config
  grunt.loadNpmTasks('assemble');
  grunt.registerTask('assembleMe', 'assemble');
}//Exports