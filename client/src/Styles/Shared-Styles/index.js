import styled, { css } from 'styled-components';
import Color from 'color';

const baseColor = '#161616';

export const color = {
	primary: '#AC7BC2',
	secondary: '#E0AB79',
	tertiary: '#86D889',
	siteBG: baseColor,
	siteBG1: Color(baseColor)
		.lighten(0.5)
		.string(),
	siteBG2: Color(baseColor)
		.lighten(1)
		.string(),
	siteBG3: Color(baseColor)
		.lighten(1.5)
		.string(),
	siteBG4: Color(baseColor)
		.lighten(2)
		.string(),
	siteBG5: Color(baseColor)
		.lighten(2.5)
		.string(),
	textColor: Color('#AC7BC2')
		.lighten(0.15)
		.string(),
};

export const colorAdjust = {
	darken: (color, amount) =>
		Color(color)
			.darken(amount)
			.string(),
	lighten: (color, amount) =>
		Color(color)
			.lighten(amount)
			.string(),
	rgba: (color, opacity) =>
		Color(color)
			.alpha(opacity)
			.string(),
};

export const length = {
	margin: '10px',
	radius: '4px',
};

export const font = {
	title: css`
		font-family: "Roboto", sans-serif;
		font-weight: 700;
		font-size: 36px;
		letter-spacing: 2px;
	`,
	text: css`
		color: ${colorAdjust.darken('#ffffff', 0.15)};
		font-size: 14px;
		letter-spacing: 1px;
	`,
	link: css`
		color: ${color.tertiary};
		text-decoration: none;
		&:hover {
			color: ${colorAdjust.darken(color.tertiary, 0.2)};
		}
	`,
};

export const layout = {
	row: css`
		display: flex;
		flex-wrap: wrap;
	`,
	col: css`
		flex-basis: 0;
		flex-grow: 1;

		max-width: 100%;
	`,
	centered: css`
		margin-left: auto;
		margin-right: auto;
	`,
};

export const border = {
	setBorders: (top, right, bot, left, color) =>
		css`
			border-color: ${color};
			border-style: solid;
			border-width: ${top}px ${right}px ${bot}px ${left}px;
		`,
};

export const modal = {
	inside: css`
		position: absolute;
		left: 20%;
		right: 20%;
		top: 15%;
		max-height: 80vh;
		padding: ${length.margin};
		border: 5px solid ${color.siteBG2};
		border-radius: 2px;
		margin: auto;
		background: ${color.siteBG2};
		overflow: auto;
		z-index: 10;
		${layout.col};
	`,
	outside: css`
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 11;
	`,
};

export const RowDiv = styled.div`
	${layout.row};
	margin: ${props => props.margin ? props.margin : '0'};
`;

export const cursor = {
	clickable: css`
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		cursor: pointer;
	`,
	draggable: css`
		cursor: grab;
		user-select: none;
	`,
	dragging: css`
		cursor: grabbing;
	`,
	notAllowed: css`
		cursor: not-allowed;
		user-select: none;
	`,
};

export const components = {
	input: css`
		border-radius: 4px;
		padding-left: 10px;
		background-color: ${color.siteBG1};
		color: ${color.primary};
		height: 36px;
		font-size: 16px;
		border: 1px solid ${color.primary};
		&:focus {
			outline: none;
			border: 1px solid ${colorAdjust.darken(color.primary, 0.2)};
		}
	`,
	button: css`
		padding: 4px 10px;
		height: 36px;
		letter-spacing: 1px;
		line-height: 30px;
		${font.text};
		background-color: ${color.siteBG2};
		${cursor.clickable};
		transition: background-color 0.1s;
		font-size: 14px;
		  border-radius: 4px;

		&:focus {
			outline: none;
		}
		&:hover {
			background-color: ${color.siteBG5};
		}
	`,
	textarea: css`
		color: white;
		background-color: ${color.siteBG2};
		border: 1px solid ${color.siteBG1};
		padding: 5px;
		${font.text};
		&:focus {
			box-shadow: none;
			outline: none;
		}
	`,
};
