'use client';
import { HeaderProps } from './Header.props';

export const Header = ({ nameRus, ...props }: HeaderProps): JSX.Element => {
	return <div {...props}>{nameRus}</div>;
};
