import { API } from '@/helpers/api';
import { ProjectData } from '@/interfaces/project';

export const getProjects = async (): Promise<ProjectData[]> => {
	const res = await fetch(API.project.listAllProjects, { next: { revalidate: 10 } });
	const { data } = await res.json();
	return data.projects;
};
