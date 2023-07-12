import { DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes } from 'react';

export interface HeaderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	nameRus: string;
}
