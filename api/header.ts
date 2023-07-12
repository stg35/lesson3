import { API } from '@/helpers/api';
import { HeaderData } from '@/interfaces/header';
import next from 'next/types';

export const getHeader = async (id: string): Promise<HeaderData | null> => {
	const res = await fetch(API.project.header + id, { next: { revalidate: 10 } });
	if (!res.ok) {
		return null;
	}
	const { data } = await res.json();
	console.log('revalidated');
	return data;
};
