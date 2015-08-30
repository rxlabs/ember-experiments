module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.initConfig({
    'gh-pages': {
      options: {
        base: 'dist',
        dotfiles: true,
        repo: 'git@github.com:rxlabs/ember-experiments.git',
        user: {
          name: 'Evan Sosenko',
          email: 'razox@evansosenko.com'
        }
      },
      src: ['**']
    }
  });

  grunt.registerTask('deploy', ['gh-pages']);
};
