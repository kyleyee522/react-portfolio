import { FaGithub, FaLinkedin } from 'react-icons/fa';

import '../styles/Footer.css';
const Footer = () => {
	return (
		<>
			<h1>Footer</h1>
			<div className="links">
				<FaGithub />
				<FaLinkedin />
			</div>
		</>
	);
};

export default Footer;
