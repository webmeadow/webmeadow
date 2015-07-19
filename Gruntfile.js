module.exports = function(grunt) {
  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // load tasks.
  grunt.loadTasks('build/tasks');

  grunt.registerTask('test', [
    'jshint',
    'jscs'
  ]);

  grunt.registerTask('dev', [
    'default',
    'concurrent:live_dev'
  ]);

  grunt.registerTask('default', [
    'test',
    'jekyll:build'
  ]);

  // Task to push code to S3
  grunt.registerTask('deploy-to-prod', [
    'default',
    'jekyll:build',
    'shell:push_prod_s3'
  ]);

};
