## SETUP

Working on this repo requires [Ruby](https://www.ruby-lang.org/en/documentation/installation/), [Bundler](http://bundler.io/), [nodejs with npm](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) and [grunt-cli](http://gruntjs.com/getting-started).

To Deploy you will need to install [Awscli](http://aws.amazon.com/cli/), which you can easily do with homebrew

Update: I recommend instead using the s3_website tool (https://github.com/laurilehmijoki/s3_website), to manage and deploy to s3.


## Getting Started

 1. Clone this repo
 2. Ensure [Ruby is installed](https://www.ruby-lang.org/en/documentation/installation/)
 3. Ensure [Bundler is installer](http://bundler.io/)
 4. Ensure [NodeJS and NPM are installed](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
 5. Ensure the [grunt-cli node module](http://gruntjs.com/getting-started) is installed globally
 6. Run `npm install`
 7. Ensure [s3_website] is install (gem install s3_website)
 1. To build the site run `grunt`

### Grunt Tasks

 - `grunt test` Runs `jscs` and `jshint` checks on the `Gruntfile` itself, and all configured tasks in `build/tasks`
 - `grunt dev` Serves the content of `_site` on [localhost:4000](http://localhost:4000) then runs both a `watch` task to compile stylus files AND `jekyll serve` so all site modifications are automatically pushed to `_site`
 - `grunt` The default task runs `test`, `css`, and `jekyll:build` tasks outputting the static site into `_site`

 - alternately, run `bundle exec jekyll serve -w`, which will deploy as well to http://localhost:4000. The -w will watch and auto-rebuild as you edit files.n

### AWS
Create an AWS account if you don’t already have one. Login to the management console and create some S3 buckets!

- YOURDOMAINNAME
  - Static site hosting will need to be enabled
- WWW.YOURDOMAINNAME
  - This will also have static site hosting enabled but will redirect to the YOURDOMAINNAME bucket


Update the s3_website.yml file with your id, key and bucket name:
s3_id: YOUR_AWS_S3_ACCESS_KEY_ID
s3_secret: YOUR_AWS_S3_SECRET_ACCESS_KEY
s3_bucket: your.blog.bucket.com

when ready to publish, run:

`s3_website push`

you can run `s3_website push --dry-run` to test it out first.

there' lots of configuration options, including CloudFront integration documents at https://github.com/laurilehmijoki/s3_website

