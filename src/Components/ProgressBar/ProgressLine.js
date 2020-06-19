import styled from "styled-components";

const progressIndicatorBarWidth = 4;

const ProgressLine = styled.div`
	position: absolute;
	top: 0;
	left: calc((100% - ${progressIndicatorBarWidth}px) / 2);

	width: ${progressIndicatorBarWidth}px;
	height: 100%;
	background-color: #f0f1f2;
`;

const ProgressBarFiller = styled.div`
	width: 100%;
	border-radius: 2px;
	background-color: #1a7dff;
	transition: height 500ms ease-out;
	transform: translate3d(0, 0, 0);
	will-change: height;
`;

export { ProgressLine, ProgressBarFiller };
