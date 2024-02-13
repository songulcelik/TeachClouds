import React from "react";
import Logo from "../header/logo";
import { config } from "@/helpers/config";
import MainMenu from "../header/main-menu";
import SocialMenu from "./social-menu";
import ContactMenu from "@/components/contact/contact-menu";
import "./footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-4">
						<Logo type="green"/>
						<p>{config.project.description}</p>
					</div>
					<div className="col-sm-6 col-lg">
						<h3>Links</h3>
						<MainMenu className="nav flex-row flex-sm-column justify-content-center gap-3 gap-sm-0"/>
					</div>
					<div className="col-sm-6 col-lg">
						<h3>Social</h3>
						<SocialMenu className="nav flex-row flex-sm-column justify-content-center gap-3 gap-sm-0" />
					</div>
					<div className="col-lg">
						<h3>Contact</h3>
                        <ContactMenu className="nav flex-row flex-sm-column justify-content-center gap-3 gap-sm-0"/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
