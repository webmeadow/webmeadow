## VM Requirements  (this is optional, you can always install jekyll locally)

To run your local environment install the following:
-  [Virtual Box](https://www.virtualbox.org/) : used to create vms
-  [Vagrant](https://www.vagrantup.com/) : used to configure vms
-  [Ansible](http://www.ansible.com/home) : used for writing provisioning scripts to run on vms & remote servers

WHY VMS- installing local dependencies can get gross fast, especially with ruby. With a virtual machine, you can destroy it at will when things break and not have to worry about breaking anything on your computer.


## Start it up:      
Fork this project and clone it to your computer.  In the folder it was cloned to, run `vagrant up`      

## Vagrant 101:      
To install a new box: `vagrant up`         
To reprovision a running box (say you have changed the ansible scripts): `vagrant provision`          
To destroy a VM: `vagrant destroy`      
To suspend a VM: `vagrant suspend`      

## To run Jekyll on your VM:
SSH into the box `vagrant ssh`      
CD to your jekyll folder `cd /mnt/jekyll`      
Start the server: `jekyll serve --watch --force_polling --host 0.0.0.0`      

Go to `http://192.168.3.33:4000/` and see your site.


*GOTCHAS* - Running 'jekyll serve --watch --force_polling --host 0.0.0.0' does not watch for everything. If you make _config.yml changes, it will not see them. You must restart for that.  It will notice new posts, index.html, and layout changes :) 


DEPLOYING:

I want to use this gem: https://github.com/laurilehmijoki/s3_website
