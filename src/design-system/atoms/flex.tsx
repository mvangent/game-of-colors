import styled from 'styled-components';
import {
	alignContent,
	AlignContentProps,
	flexDirection,
	FlexDirectionProps,
	justifyContent,
	JustifyContentProps,
	width,
	WidthProps,
} from 'styled-system';

interface IFlexProps extends AlignContentProps, FlexDirectionProps, JustifyContentProps, WidthProps {}

const Flex = styled.div<IFlexProps>`
	${alignContent}
	display: flex;
	${flexDirection}
	${justifyContent}
	${width}
`;

export default Flex;
