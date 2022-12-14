import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Berkay</title>
			</Head>

			<Link href='/about'>About</Link>
			<h1>Hello world</h1>
		</div>
	);
}
