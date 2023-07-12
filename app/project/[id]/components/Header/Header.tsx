import { PropsWithChildren } from 'react';
import { HeaderProps } from './Header.props';

export const Header = ({ children, ...props }: PropsWithChildren<HeaderProps>): JSX.Element => {
	return <h1 {...props}>{children}</h1>;
};
