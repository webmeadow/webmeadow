## SETUP

Working on this repo requires [Ruby](https://www.ruby-lang.org/en/documentation/installation/), [Bundler](http://bundler.io/), [nodejs with npm](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) and [grunt-cli](http://gruntjs.com/getting-started).

To Deploy you will need to install [Awscli](http://aws.amazon.com/cli/), which you can easily do with homebrew


## Getting Started

 1. Clone this repo
 1. Ensure [Ruby is installed](https://www.ruby-lang.org/en/documentation/installation/)
 1. Ensure [Bundler is installer](http://bundler.io/)
 1. Ensure [NodeJS and NPM are installed](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
 1. Ensure the [grunt-cli node module](http://gruntjs.com/getting-started) is installed globally
 1. Run `npm install`
 1. To build the site run `grunt`

### Grunt Tasks

 - `grunt test` Runs `jscs` and `jshint` checks on the `Gruntfile` itself, and all configured tasks in `build/tasks`
 - `grunt dev` Serves the content of `_site` on [localhost:4000](http://localhost:4000) then runs both a `watch` task to compile stylus files AND `jekyll serve` so all site modifications are automatically pushed to `_site`
 - `grunt` The default task runs `test`, `css`, and `jekyll:build` tasks outputting the static site into `_site`
 - `grunt deploy-to-prod` Runs the default task then attempts to push to the site's `S3` bucket using `AWS CLI` which must already be locally installed and configured (which is outside the scope of this project).


### AWS
Create an AWS account if you don’t already have one. Login to the management console and create some S3 buckets!

- YOURDOMAINNAME
  - Static site hosting will need to be enabled
- WWW.YOURDOMAINNAME
  - This will also have static site hosting enabled but will redirect to the YOURDOMAINNAME bucket

Next, create as many users as you need in the IAM section of the AWS management console. Keep a copy of the access-key and secret-key. Also create a group for these new podcast users to belong to. The group IAM policy we use looks like this:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::webmeadow.com/*",
        "arn:aws:s3:::webmeadow.com",
      ]
    }
  ]
}
```

To use this policy, replace the S3 bucket names with the one’s you’ve created and add it to the new users or the group they all belong to.

### AWS-CLI
Install the AWS CLI onto your machine (Google for instructions based on your OS, there are lots of options) and create a credentials file in ~/.aws/credentials. It’s a good idea to namespace the credentials using profiles (shown below) to prevent conflicts if you need to access different AWS accounts or resources.

This is what my credentials file looks like. It includes a profile called webmeadow.
```
[default]
aws_access_key_id = SOME_ACCESS_KEY_ID
aws_secret_access_key = SOME_SECRET_KEY_ID
 
[rubberduck]
aws_access_key_id = SOME_ACCESS_KEY_ID
aws_secret_access_key = SOME_SECRET_KEY_ID
```
You can see this profile is used by the shell tasks which call the AWS CLI. In this repo, go to /build/tasks/shell.js and update them with your profile name. 


