import { getHeader } from '@/api/header';
import { Header } from './components/Header/Header';
import { getProjects } from '@/api/listProjects';
import { notFound } from 'next/navigation';
import { TeamMate } from './components/TeamMate/TeamMate';
import { getStudents } from '@/api/students';
import styles from './page.module.css';

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
	const dataStudents = await getStudents(params.id);
	const dataHeader = await getHeader(params.id);
	if (!dataHeader || !dataStudents) {
		notFound();
	}

	return (
		<>
			<Header nameRus={dataHeader.nameRus} />
			<div className={styles.teamText}>Команда</div>
			<div className={styles.wrapper}>
				{dataStudents.leaders.map((leader) => (
					<TeamMate name={leader.fullName} role={leader.role} imgSrc={leader.pic} />
				))}

				{dataStudents.activeMembers.map((member) => (
					<TeamMate name={member.fullName} role={member.role} imgSrc={member.pic} />
				))}
			</div>
		</>
	);
}
