import { Link } from 'react-router-dom';
import '../styles/Nav.css';
const Nav = () => {
	return (
		<>
			<div>
				<Link to={'/'}>Portfolio</Link>
				<Link to={'/aboutme'}>About Me</Link>
				<Link to={'/contactme'}>Contact</Link>
				<Link to={'/resume'}>Resume</Link>
			</div>
		</>
	);
};

export default Nav;
