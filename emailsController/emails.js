/* eslint-disable class-methods-use-this */
import htmlToText from 'html-to-text';
import request from 'request';
const { check, validationResult } = require('express-validator/check');


class EmailsController {
  
  //TODO: fix validation double error on email fields 
  validate(type) {
    switch(type) {
      case 'createEmail' : {
        return [
          check('to', 'Invalid email').exists().isEmail(),
          check('to_name', 'To name does not exist').exists(),
          check('from', 'Invalid email').exists().isEmail(),
          check('from_name', 'From name does not exist').exists(),
          check('subject', 'Subject does not exist').exists(),
          check('body', 'Body of email does not exist').exists()
        ]
      }
    }
  }

  formatSendGridBody(email) {
    var jsonString = "{\"personalizations\":[{\"to\":[{";
    jsonString += "\"email\":\"" + email.to + "\",";
    jsonString += "\"name\":\"" + email.to_name + "\"}],";
    jsonString += "\"subject\":\"" + email.subject + "\"}],";
    jsonString += "\"content\":[{";
    jsonString += "\"type\":\"text/plain\",";
    jsonString += "\"value\":\"" + email.body + "\"}],";
    jsonString += "\"from\":{";
    jsonString += "\"email\":\"" + email.from + "\",";
    jsonString += "\"name\":\"" + email.from_name + "\"}}";
    return jsonString;
  }

  sendSendGridEmail(email, cb) {
    var bodyString = EmailController.formatSendGridBody(email);

    request.post({
      headers: {'Content-Type' : 'application/json', 
                'Authorization' : 'Bearer ' + process.env.SENDGRID_API_KEY},
      url:     'https://api.sendgrid.com/v3/mail/send',
      body:    bodyString
    }, function(error, response, body){
      if(error) {
        console.log(body);
      }
      cb(response);
    });
  }

  formatPostmarkBody(email) {
    var jsonString = "{";
    jsonString += "\"From\":\"" + email.from + "\",";
    jsonString += "\"To\":\"" + email.to + "\",";
    jsonString += "\"Subject\":\"" + email.subject + "\",";
    jsonString += "\"HtmlBody\":\"" + email.html_body + "\",";
    jsonString += "\"TextBody\":\"" + email.body + "\"";
    jsonString += "}";
    return jsonString;
  }

  sendPostmarkEmail(email, cb) {
    var bodyString = EmailController.formatPostmarkBody(email);

    request.post({
      headers: {'Accept' : 'app;ication/json',
                'Content-Type' : 'application/json',
                'X-Postmark-Server-Token' : process.env.POSTMARK_API_KEY},
      url:     'https://api.postmarkapp.com/email',
      body:    bodyString
    }, function(error, response, body){
      if(error) {
        console.log("Postmark Error: " + body);
      } 
      cb(response, body);
    });
  }

  sendEmail(email, cb) {
    
    switch(process.env.DEFAULT_EMAIL_SERVICE) {
      case 'postmark' : {
        EmailController.sendPostmarkEmail(email, function(response, body) {
          if(response.statusCode < 200 || response.statusCode > 299) {
            EmailController.sendSendGridEmail(email, cb);
          } else {
            cb(response, body);
          }
        });
        break;
      }

      default : {
        EmailController.sendSendGridEmail(email, function(response, body) {
          if(response.statusCode < 200 || response.statusCode > 299) {
            EmailController.sendPostmarkEmail(email, cb);
          } else {
            cb(response, body);
          }
        });
      }
    }
  }

  //TODO: Better html handling
  //TODO: save email to db
  //TODO: webhooks
  //TODO: delayed delivery
  createEmail(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const email = {
      to: req.body.to,
      to_name: req.body.to_name,
      from: req.body.from,
      from_name: req.body.from_name,
      subject: req.body.subject,
      html_body: req.body.body,
      body: req.body.body.replace(/<[^>]*>?/gm, '') 
    };

    //SEND email
    EmailController.sendEmail(email, function(response, body) {
      var emailSent = false;
      if(response.statusCode < 300 && response.statusCode > 199) {
            emailSent = true;
      }
      return res.status(response.statusCode).send({
          success: emailSent,
          message: body,
          email
      });
    });
  }

}

const EmailController = new EmailsController();
export default EmailController;





