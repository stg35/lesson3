import { API } from '@/helpers/api';
import { StudentsData } from '@/interfaces/students';

export const getStudents = async (id: string): Promise<StudentsData | null> => {
	const res = await fetch(API.project.students + id, { next: { revalidate: 10 } });
	if (!res.ok) {
		return null;
	}
	const { data } = await res.json();
	return data;
};
