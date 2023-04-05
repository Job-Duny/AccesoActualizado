import React from "react";
import styles from "@/styles/Form.module.css";
import { useState } from "react";
import QRCode from "qrcode";
import axios from "axios";
import { baseUrl, studentsApi } from "@/config/ROUTES";

const QrGen = () => {
	const [userTicket, setUserTicket] = useState<number>(-1);
	const [src, setSrc] = useState<string>("");

	const genQR = () => {
		console.log("generando");
		QRCode.toDataURL(`${baseUrl}/${userTicket.toString()}`).then(setSrc);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUserTicket(parseInt(value));
	};

	return (
		<>
			<span>
				<label htmlFor="name">Boleta: </label>
				<input
					type="number"
					name="ticket"
					id="ticket"
					onChange={handleChange}
					className={styles.input}
					required
				/>
			</span>
			<button onClick={() => genQR()}> Generar </button>
			{src && (
				<>
					<img src={src} />
					<a
						href={src}
						download={`accesso ${userTicket}`}
						defaultValue=" Descagha tu qr!"
					/>
				</>
			)}
		</>
	);
};

export default QrGen;
