Deploying 3D portfolio Application on AWS EC2

Testing the project locally
Clone this project -  git clone https://github.com/daniyal5293/Portfolio-Website-Deployed-on-AWS.git

Setup the following environment variables - (.env) file
VITE_APP_EMAILJS_SERVICE_ID=your's
VITE_APP_EMAILJS_TEMPLATE_ID=your's
VITE_APP_EMAILJS_PUBLIC_KEY=your's

Initialise and start the project
npm install
npm run start

Set up an AWS EC2 instance

Create an IAM user & login to your AWS Console
Access Type - Password
Permissions - Admin
Create an EC2 instance
Select an OS image - Ubuntu
Create a new key pair & download .pem file
Instance type - t2.micro
Connecting to the instance using ssh
ssh -i instance.pem ubunutu@<IP_ADDRESS>

Configuring Ubuntu on remote VM
Updating the outdated packages and dependencies
sudo apt update
Install Git - Guide by DigitalOcean
Configure Node.js and npm - Guide by DigitalOcean




