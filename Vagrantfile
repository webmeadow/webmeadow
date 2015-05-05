# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.synced_folder "./jekyll", "/mnt/jekyll/"
  config.ssh.forward_agent = true

  # Map localhost:4000 to port 4000 inside the VM
  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.network "private_network", ip: "192.168.3.33"

  config.ssh.insert_key = false
  
  config.vm.provision "ansible" do |ansible|
    ansible.limit = 'all'
    ansible.inventory_path = "ansible/inventory/development"
    ansible.playbook = "ansible/playbook.yml"
    ansible.raw_arguments = ['--timeout=30']
  end
end
