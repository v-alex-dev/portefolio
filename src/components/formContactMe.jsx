import React, { useState } from 'react';
import Loader from './loader.jsx'; // Import du composant Loader

const FormContactMe = () => {
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [showPopup, setShowPopup] = useState(false);
	const [showPopupError, setShowPopupError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return;
		}
		if (name === '' || email === '' || message === '') {
			return;
		}
		try {
			setIsLoading(true); // Définir isLoading à true pour afficher le Loader
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ from: name, to: email, subject: company, text: message })
			});
			if (response.status === 200) {
				setShowPopup(true);
			} else {
				setShowPopupError(true);
			}
		} catch (error) {
			console.error('Error:', error);
			setShowPopupError(true);
		} finally {
			setIsLoading(false); // Définir isLoading à false après avoir reçu la réponse de l'API
		}
	};

	return (
		<>
			<div className="fixed inset-0 bg-dark bg-opacity-50 blur-xl"></div>
			<div className='w-screen h-screen  fixed top-0 left-0 flex items-center justify-center'>
				<div className='w-1/2 bg-blue p-8 rounded shadow-lg flex flex-col items-center justify-center gap-4 relative'>
					<a
						href='/'
						className='absolute top-0 right-0 p-4 rounded-full border border-orange text-white font-bold w-4 h-4 flex items-center justify-center hover:bg-orange mr-3 mt-3'>X</a>

					{isLoading ? (
						<Loader primaryColor={"#152837"} secondaryColor={'#E69F34'}/> // Afficher le Loader si isLoading est true
					) : (
						<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
							<input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} required className='input-form' />
							<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className='input-form' />
							<input type="text" placeholder="Société" value={company} onChange={(e) => setCompany(e.target.value)} required className='input-form' />
							<textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required className='input-form' />
							{/* Honeypot field for anti-bot security */}
							<input type="text" name="honeypot" style={{ display: 'none' }} />

							<button type="submit" className='btn-popup' disabled={isLoading}>
							</button>
						</form>
					)}
				</div>
				// END: abpxx6d04wxr


				{showPopup && (
					<div className="popup">
						<p>Merci pour votre message ! Je vous contacterai bientôt.</p>
						<button className='btn-popup' onClick={() => {
							setShowPopup(false);
							location.replace('/');
						}}>Fermer</button>
					</div>
				)}
				{showPopupError && (
					<div className="popup">
						<p>Une erreur s'est produite. Veuillez réessayer.</p>
						<button className='btn-popup' onClick={() => {
							setShowPopupError(false);
							location.reload();
						}}>Fermer</button>
					</div>
				)}
			</div>
		</>
	);
};

export default FormContactMe;
