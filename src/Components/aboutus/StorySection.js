import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import StoryText from "./StoryText";
import StoryImage from "./StoryImage";
import ProgressBarCircle from "../ProgressBar/ProgressBarCircle";
import "./style.css";

function StorySection({
	image,
	firsttitle,
	secondtitle,
	bodytext,
	footertext,
	invertOrder,
	isFirst,
	isLast,
	scrollPosition,
}) {
	const calcOrderClassName = invertOrder
		? "scrollaBarSpace setOrder"
		: "scrollaBarSpace";

	const circleRef = React.createRef();
	const [fillCircle, setFillCircle] = useState(false);
	useEffect(() => {
		if (
			Math.floor(
				(circleRef.current.getBoundingClientRect().top /
					(document.documentElement.offsetHeight - window.innerHeight)) *
					100
			) <= scrollPosition
		)
			setFillCircle(true);
		else setFillCircle(false);
	}, [circleRef, scrollPosition]);

	return (
		<section className="containerStorySection">
			{(isFirst || isLast) && (
				<ProgressBarCircle
					isFirst={isFirst}
					isLast={isLast}
					isHighlighted={isFirst || scrollPosition >= 99}
				/>
			)}
			<StoryText
				firsttitle={firsttitle}
				secondtitle={secondtitle}
				bodytext={bodytext}
				footertext={footertext}
				invertOrder={invertOrder}
			/>
			<div className={calcOrderClassName}>
				<ProgressBarCircle ref={circleRef} isHighlighted={fillCircle} />
			</div>
			<StoryImage image={image} />
		</section>
	);
}

StorySection.defaultProps = {
	invertOrder: false,
	isFirst: false,
	isLast: false,
	scrollPosition: 0,
};

StorySection.propTypes = {
	image: PropTypes.string,
	firsttitle: PropTypes.string,
	secondtitle: PropTypes.string,
	bodytext: PropTypes.string,
	footertext: PropTypes.string,
	invertOrder: PropTypes.bool,
	isFirst: PropTypes.bool,
	isLast: PropTypes.bool,
	scrollPosition: PropTypes.number,
};
export default StorySection;
