import express from 'express';
import emailController from '../emailsController/emails';

const router = express.Router();

router.post('/emails', emailController.validate('createEmail'), emailController.createEmail);

export default router;