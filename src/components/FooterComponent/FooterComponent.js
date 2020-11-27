import React from "react";
import "./FooterComponent.css";

function FooterComponent() {
	return (
		<div className="footer row">
			<div className="col-md-4">
				<h5>Contacts</h5>
				<p>MD.AYUB SHAMIM</p>
				<p>ahmed1.ayub6717@gmail.com</p>
				<p>+8801731357071</p>
			</div>
			<div className="col-md-4">
				<h5>Social Links</h5>
				<p>github.com/ayub6717</p>
			</div>
			<div className="col-md-4">
				<h5>Company</h5>
				<p>Advertise</p>
				<p>Privacy Policy</p>
				<p>Terms of use</p>
			</div>
			<p className="copyright">
				The Hooks Planet || All rights reserved || The Planet
			</p>
		</div>
	);
}

export default FooterComponent;
