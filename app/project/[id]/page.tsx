import { getHeader } from '@/api/header';
import { Header } from './components/Header/Header';
import { getProjects } from '@/api/listProjects';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	const projects = await getProjects();
	return projects.map((project) => ({
		id: project.id.toString(),
	}));
}

export default async function ProjectPage({
	params,
}: {
	params: { id: string };
}): Promise<JSX.Element> {
	const data = await getHeader(params.id);
	if (!data) {
		notFound();
	}
	return <Header nameRus={data.nameRus} />;
}
