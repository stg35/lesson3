import { TeamMateProps } from './TeamMate.props';
import Image from 'next/image';
import styles from './TeamMate.module.css';

export const TeamMate = ({ name, role, imgSrc }: TeamMateProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Image className={styles.image} src={imgSrc} width={60} height={60} alt="Участник проекта" />
			<div className={styles.content}>
				<div className={styles.name}>{name}</div>
				<div className={styles.role}>{role}</div>
			</div>
		</div>
	);
};
