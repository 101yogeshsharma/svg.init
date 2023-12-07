import { useState } from "react";
import "./Logo.css";

export default function Logo() {
	const [animate, setAnimate] = useState(false);
	const repositionLogo = () => {
		setAnimate(true);
		setTimeout(() => setAnimate(false), 6000);
	};
	return (
		<div className='logo-segment'>
			<div className='logo' onMouseEnter={repositionLogo}>
				<div className='text'>
					<span>S</span>
					<span>V</span>
					<span>G</span>
					<span>.</span>
				</div>
				<div className={`text ${animate ? "reposition rotating" : ""}`}>
					<span>I</span>
					<span>N</span>
					<span>I</span>
					<span>T</span>
				</div>
			</div>
		</div>
	);
}
