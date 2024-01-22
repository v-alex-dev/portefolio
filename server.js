import express from 'express';

import path from 'path';
import nodemailer from 'nodemailer';
import cors from 'cors'; 
const app = express();
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
// Serve static files from the React frontend app
// Put all API endpoints under '/api'
app.get('/api/send-email', (req, res) => {
	// Create a transporter object with your email service provider's SMTP settings
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: import.meta.env.VITE_EMAIL,
			pass: import.meta.env.VITE_PASSWORD
		}
	});

	// Define the email options
	const mailOptions = {
		from: req.body.from,
		to: req.body.to,
		subject: req.body.subject,
		text: req.body.text
	};

	// Send the email
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.status(500).send('Error sending email');
		} else {
			console.log('Email sent: ' + info.response);
			res.send('Email sent successfully');
		}
	});
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});