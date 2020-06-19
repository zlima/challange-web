import styled from "styled-components";

const circleSize = 21;

const ProgressBarCircle = styled.div`
	position: absolute;
	top: ${(props) => {
		if (props.isFirst) {
			return 0;
		} else if (props.isLast) {
			return "calc(100% - 2px)";
		}
		return "50%";
	}};
	left: calc((100% - ${circleSize}px) / 2);
	width: ${circleSize}px;
	height: ${circleSize}px;
	border: 4px solid ${(props) => (props.isHighlighted ? "#1A7DFF" : "#F0F1F2")};
	transition: border-color 200ms linear;
	transition-delay: 300ms;
	border-radius: ${circleSize}px;
	background-color: #ffffff;
`;

export default ProgressBarCircle;
