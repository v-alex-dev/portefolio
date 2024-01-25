import nodemailer from 'nodemailer';

export default  async (req, res) => {
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

	try {
		// Send the email
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent: ' + info.response);
		res.send('Email sent successfully');
	} catch (error) {
		console.log(error);
		res.status(500).send('Error sending email');
	}
};
