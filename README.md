#Communications Platform

## Forward 

	This was a very interesting project to work on. I have not used Node before but since Node is used at Sling Health I figured I would need to learn it eventually. That being said, I was told this project should only take a few hours, so I time-boxed this exersise at 5 hours to compensate for needing to learn different aspects of Node.

	By no means do I believe that this code is production ready. Node is very easy to work with, light weight, and powerful. However, I feel like I was not able to properly leverage asynchronus calls, callbacks, promises, and encapsulation. 

	If I were to spend more time on this, I would like to finish actually writting test cases instead of leaving them as stubs. I would also like to add javadocs, sanatize variables better, decouple some pieces, and make things asynchronus.

	If I had to do this project any differently I would probably build it using Spring Boot and Java with some sort of lightweight relational database. I just know those tools better but the project becomes fairly bulky fairly quickly.

## Language/Framework

	This service is written in Node using the Express framework.

## Install

    $ git clone 
    $ cd communication_platform
    $ npm install

## Configure app

Navigate to `..\communications_platform`. You will need to setup your enviroment:
	

	$ echo "export PORT='----WHATEVER-PORT-YOU-WANT----'" > dev.env
	$ echo "export DEFAULT_EMAIL_SERVICE='postmark'" >> dev.env
	
	$ echo "export SENDGRID_URL='https://api.sendgrid.com/v3/mail/send'" >> dev.env
	$ echo "export SENDGRID_API_KEY='----YOUR-SENDGRID-API-KEY----'" >> dev.env
	
	$ echo "export POSTMARK_URL='https://api.postmarkapp.com/email'" >> dev.env
	$ echo "export POSTMARK_API_KEY='----YOUR-POSTMARK-API-KEY----'" >> dev.env
	
	$ echo "dev.env" >> .gitignore
	$ source ./dev.env

## Running the project

    $ npm run start

    Then start sending POST requests to http://localhost:----WHATEVER-PORT-YOU-WANT----/emails.
    If a PORT is not specified in your environment variables then it will default to 8080.

## Testing the project

	$ npm test