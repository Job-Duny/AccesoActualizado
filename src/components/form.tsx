import React from "react";
import styles from "@/styles/Form.module.css";
import { useState } from "react";
import QRCode from "qrcode";
import axios from "axios";
import { baseUrl, studentsApi } from "@/config/ROUTES";

type Props = {};

export const Formi = (props: Props) => {
	const [userTicket, setUserTicket] = useState<number>(0);
	const [src, setSrc] = useState<string>("");

	const genQR = () => {
		console.log("generando");
		QRCode.toDataURL(`${baseUrl}/${userTicket.toString()}`).then(setSrc);
	};

	const [student, setStudent] = useState({
		name: "",
		appPat: "",
		appMat: "",
		email: "",
		role: "",
		ticket: -1,
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		console.log(data);

		const res = await axios.post(`${baseUrl}/api/students`, {
			data: student,
		});
		// console.log(res);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setStudent({ ...student, [name]: value });

		if (name === "ticket") {
			setUserTicket(parseInt(value));
		}
	};

	return (
		<>
			<div>
				<form onSubmit={handleSubmit} className={styles.form}>
					<span>
						<label htmlFor="name">Boleta: </label>
						<input
							type="number"
							name="ticket"
							id="ticket"
							// value={userTicket}
							// onChange={(e) => setUserTicket(parseInt(e.target.value))}\
							onChange={handleChange}
							className={styles.input}
							required
						/>
					</span>
					<span>
						<label htmlFor="name">Nombre: </label>
						<input
							type="text"
							name="name"
							id="name"
							onChange={handleChange}
							className={styles.input}
							required
						/>
					</span>
					<span>
						<label htmlFor="appPat">Apellido Paterno: </label>
						<input
							type="text"
							name="appPat"
							id="appPat"
							onChange={handleChange}
							className={styles.input}
						/>
					</span>
					<span>
						<label htmlFor="appMat">Apellido Materno: </label>
						<input
							type="text"
							name="appMat"
							id="appMat"
							onChange={handleChange}
							className={styles.input}
							required
						/>
					</span>
					<span>
						<label htmlFor="email">Email: </label>
						<input
							type="email"
							name="email"
							id="email"
							onChange={handleChange}
							className={styles.input}
							required
						/>
					</span>
					<span>
						<label htmlFor="role">Role: </label>
						<input
							type="text"
							name="role"
							id="role"
							onChange={handleChange}
							className={styles.input}
							required
						/>
					</span>
					<button type="submit" onClick={() => genQR()}>
						save and generate qr
					</button>
				</form>
			</div>
			{src && (
				<>
					<img src={src}></img>
					<a href={src} download={`accesso ${userTicket}`}>
						Descarga tu qr!
					</a>
				</>
			)}
		</>
	);
};
