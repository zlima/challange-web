import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function StoryText(props) {
	const { firsttitle, secondtitle, bodytext, footertext, invertOrder } = props;

	const classN = invertOrder
		? "sectionContainer invertOrder"
		: "sectionContainer";
	return (
		<div className={classN}>
			<h3 className="firsttitle">{firsttitle}</h3>
			<h2 className="secondtitle">{secondtitle}</h2>
			<p className="bodytext">{bodytext}</p>
			<br />
			<p className="footertext">{footertext}</p>
		</div>
	);
}

StoryText.defaultProps = {
	firsttitle: "",
	secondtitle: "",
	bodytext: "",
	footertext: "",
	invertOrder: false,
};

StoryText.propTypes = {
	firsttitle: PropTypes.string,
	secondtitle: PropTypes.string,
	bodytext: PropTypes.string,
	footertext: PropTypes.string,
	invertOrder: PropTypes.bool,
};
export default StoryText;
