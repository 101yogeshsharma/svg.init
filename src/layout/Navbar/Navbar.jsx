import Logo from "@/components/Logo/Logo.jsx";
import Help from "@/components/Help/Help.jsx";
import "./Navbar.css";

export default function Navbar() {
	return (
		<div className='nav sticky'>
			<Logo />
			<Help />
		</div>
	);
}
