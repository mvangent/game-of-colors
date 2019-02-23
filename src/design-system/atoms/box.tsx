import styled from 'styled-components';
import {
	background,
	BackgroundProps,
	display,
	DisplayProps,
	height,
	HeightProps,
	space,
	SpaceProps,
	width,
	WidthProps,
} from 'styled-system';

interface IBoxProps extends BackgroundProps, DisplayProps, SpaceProps, WidthProps, HeightProps {}

const Box = styled.div<IBoxProps>`
	${background},
	${display}
	${height}
	${space}
	${width}
`;

export default Box;
