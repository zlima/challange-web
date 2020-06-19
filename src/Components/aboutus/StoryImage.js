import React from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import "./style.css";

function StoryImage({ image }) {
	return (
		<div className="sectionContainer">
			<Image className="sectionImage" src={image} rounded />
		</div>
	);
}

StoryImage.defaultProps = {
	image: "",
};

StoryImage.propTypes = {
	image: PropTypes.string,
};
export default StoryImage;
