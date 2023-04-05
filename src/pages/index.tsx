import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Formi } from "@/components/form";
import QrGen from "@/components/qrgen";
import { GetServerSideProps } from "next";
import axios from "axios";
import { studentsApi } from "@/config/ROUTES";
import { DataUser } from "@/types/types";
import { useState } from "react";
import Link from "next/link";

export default function Home({ students }: { students?: DataUser[] }) {
	console.log("Home");
	// console.log(students);

	const [show, setShow] = useState<Boolean>(true);

	return (
		<>
			<Head>
				<title>Acceso Qr</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>Generate</h1>
				<QrGen></QrGen>
				<h1
					className={styles.title}
					onClick={() => {
						setShow(!show);
					}}
				>
					{show ? "Ocultar usuarios" : "Mostrar Usuarios"}
				</h1>

				{show && (
					<div className={styles.dataCont}>
						{students?.map((student) => (
							<div className={styles.data} key={student.usuId}>
								<Link href={`/${student.usuTicket}`}>
									<h3 className={styles.name}>
										{`${student.usuUsername} 
                ${student.usuAppPat} 
                ${student.usuAppMat}`}
									</h3>
									<p className={styles.extra}>
										Boleta: {student.usuTicket}
									</p>
								</Link>
							</div>
						))}
					</div>
				)}
			</main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await axios.get(studentsApi);
	const students = await res.data;
	// console.log(students);
	return {
		props: {
			students,
		},
	};
};
