import nodemailer from 'nodemailer';

app.post('/api/send-email', (req, res) => {
	// Create the transporter with the required configuration for Outlook
	const transporter = nodemailer.createTransport({
		service: 'Outlook',
		auth: {
			user:process.env.EMAIL,
			pass:process.env.PASSWORD
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
