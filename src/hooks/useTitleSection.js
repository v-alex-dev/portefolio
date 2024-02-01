import { useState, useEffect } from 'react';
const useTitleSection = () => {
	const [result, setResult] = useState([]);
	useEffect(() => {
		const docH2 = document.querySelectorAll('h2');
		setResult(Array.from(docH2).map(element => element.textContent));
	}, []);
	return result;
};

export default useTitleSection;
