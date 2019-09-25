/* eslint-disable class-methods-use-this */
import htmlToText from 'html-to-text';
const { check, validationResult } = require('express-validator/check');


class EmailsController {
  
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
        body: htmlToText.fromString(req.body.body), 
      };
      
      return res.status(201).send({
        success: 'true',
        message: 'email sent successfully',
        email,
      });
  }
}

const EmailController = new EmailsController();
export default EmailController;





