import React, { useState, useEffect } from "react";
import StorySection from "../Components/aboutus/StorySection";
import Image1 from "../assets/images/img1.jpg";
import Image2 from "../assets/images/img2.jpg";
import {
	ProgressLine,
	ProgressBarFiller,
} from "../Components/ProgressBar/ProgressLine";
import "./style.css";

function Aboutus(props) {
	const [bodyOffset, setBodyOffset] = useState(
		document.body.getBoundingClientRect()
	);
	const [scrollPercentage, setscrollPercentage] = useState(0);
	const listener = (e) => {
		setBodyOffset(document.body.getBoundingClientRect());
		setscrollPercentage(
			Math.floor(
				(-bodyOffset.top /
					(document.documentElement.offsetHeight - window.innerHeight)) *
					100
			)
		);
	};
	useEffect(() => {
		window.addEventListener("scroll", listener);
		return () => {
			window.removeEventListener("scroll", listener);
		};
	});

	return (
		<div className="container">
			<h1 className="titleAbout">A tale of talent</h1>
			<div className="sectioncontainer">
				<ProgressLine>
					<ProgressBarFiller style={{ height: `${scrollPercentage}%` }} />
				</ProgressLine>
				<StorySection
					image={Image1}
					firsttitle="the past"
					secondtitle="How it began"
					bodytext="In 2016, on a sunny land in the north of Portugal, Coletiv Studio was born. A Software Company with an ambitious vision and no more than four members.
            Coletiv wanted to help companies of all shapes, sizes, and colors, to launch digital products that people would use and love. But for that, needed to address many challenges, ranging from UX/UI to Software Development and Cybersecurity."
					footertext="Seems impossible right?"
					invertOrder={true}
					isFirst={true}
					scrollPosition={scrollPercentage}
					offset={-bodyOffset.top}
				/>
				<StorySection
					image={Image2}
					firsttitle="THE PRESENT"
					secondtitle="Making it happen"
					bodytext="A few years later, Coletiv invites three talented lads to join its small development team. A team of seven, but strong enough to master any Android, iOS  Elixir project.
Coletiv team and its partners (Significa and Adamant) started helping companies from several nationalities including Switzerland, Hong Kong, Spain, and the United Kingdom."
					footertext="But are we going to make it?"
					invertOrder={false}
					isLast={true}
					scrollPosition={scrollPercentage}
					offset={-bodyOffset.top}
				/>
			</div>
		</div>
	);
}

export default Aboutus;
