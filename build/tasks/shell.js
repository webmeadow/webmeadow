module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-shell');

    grunt.config('shell', {
        options: {
            stderr: false
        },
        push_prod_s3: {
            command: 'aws --profile profilenamehere s3 cp _site/ s3://webmeadow.com --recursive --include \'*\' --acl \'public-read\''
        }
    });
};
