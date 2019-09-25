#Communications Platform

## Language/Framework

	This service is written in Node using the Express framework.

## Install

    $ git clone 
    $ cd communication_platform
    $ npm install

## Configure app

Navigate to `.\communications_platform`. You will need to setup your enviroment:
	

	$ echo "export PORT='----WHATEVER-PORT-YOU-WANT----'" > dev.env
	
	$ echo "export SENDGRID_URL='https://api.sendgrid.com/v3/mail/send'" >> dev.env
	$ echo "export SENDGRID_API_KEY='----YOUR-SENDGRID-API-KEY----'" >> dev.env
	
	$ echo "export POSTMARK_URL='https://api.postmarkapp.com/email'" >> dev.env
	$ echo "export POSTMARK_API_KEY='----YOUR-POSTMARK-API-KEY----'" >> dev.env
	
	$ echo "dev.env" >> .gitignore
	$ source ./dev.env

## Running the project

    $ npm run start