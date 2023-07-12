import styles from './page.module.css';

export default async function Home(): Promise<JSX.Element> {
	return (
		<main className={styles.main}>
			<h2 className={styles.text}>Hello, World!</h2>
		</main>
	);
}
