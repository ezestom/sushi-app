import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import x from "../../icons/x.svg";
import "./Form.css";
import logo from "../../img/logo_verde_logo.png";

export function Form({
	button,
	toast_message,
	name,
	email,
	email_placeholder,
	message,
	message_placeholder,
	send,
}) {
	const [dialog, setDialog] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isMessageSuccess()) {
			toast(
				"La información se envió correctamente! Gracias por tu confianza.",
				{
					type: "success",
				}
			);
			closeDialog();
		}
	}, []);

	const openDialog = () => {
		setDialog(true);
		document.body.style.overflow = "hidden";
		document.getElementById("navbar").style.display = "none";
	};

	const closeDialog = () => {
		setDialog(false);
		document.body.style.overflow = "auto";
		document.getElementById("navbar").style.display = "flex";
	};

	const isMessageSuccess = () => {
		return window.location.search.includes("success=true");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);

		setIsLoading(true);

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: formData,
			});

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(
					`Server responded with ${response.status}: ${errorText}`
				);
			}

			toast(
				"La información se envió correctamente! Gracias por tu confianza.",
				{
					type: "success",
				}
			);

			// Cerrar el diálogo después del envío exitoso
			closeDialog();
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error(
				"Hay un error en el envío de la información. Por favor, intenta nuevamente."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="relative z-10 m-auto">
			<Toaster />
			<span className="">
				<button
					className="text-sm text-start font-extralight hover:underline"
					onClick={openDialog}
					id="open-dialog">
					{button}
				</button>
			</span>

			{dialog && (
				<dialog open>
					<div className="form-container-dialog">
						{isLoading && (
							<div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur bg-white/10 opacity-50 flex justify-center items-center z-50 rounded-3xl">
								<span className="loader"></span>
							</div>
						)}
						<form
							onSubmit={handleSubmit}
							method="POST"
							action="https://formsubmit.co/ezequielstom@gmail.com"
							className="relative">
							<div className="flex flex-row-reverse items-center justify-between">
								<button className="" onClick={closeDialog}>
									<img
										className="w-6 hover:scale-105 h-6 m-2 cursor-pointer"
										src={x.src}
										alt="x-icon"
										id="close-dialog"
									/>
								</button>
								<img
									src={logo.src}
									className="absolute mx-auto left-0 right-0 max-w-[125px]"
									alt="logo cacta"
								/>
							</div>
							<legend className="text-xs max-w-[350px] text-pretty py-5">
								Somos una empresa orientada al desarrollo de su
								gente en un entorno laboral estable y agradable.
								Si querés formar parte del equipo de Sushiapp,
								envíanos tu cv por mensaje directo en{" "}
								<a
									href=""
									target="_blank"
									className="text-blue-200 underline">
									Facebook{" "}
								</a>
								detallando experiencia previa en el rubro
								gastronomía y/o atención al cliente.
							</legend>

							<input
								type="hidden"
								name="_subject"
								value="🍣 SushiApp | 📩 Nuevo Mensaje!"
							/>
							<input
								type="hidden"
								name="_autoresponse"
								value={toast_message}></input>

							<input
								type="hidden"
								name="_captcha"
								value="false"
							/>

							<div className="flex flex-col gap-2 min-w-[350px] ">
								<label htmlFor="name">
									{name}
									<input
										type="text"
										name="name"
										id="name"
										placeholder="Juan Pérez"
										required
										className="rounded-md "
									/>
								</label>
								<label htmlFor="email">
									{email}
									<input
										className="rounded-md "
										type="email"
										name="email"
										id="email"
										required
										placeholder={email_placeholder}
									/>
								</label>
								<label htmlFor="message">
									{message}
									<textarea
										name="message"
										id="message"
										required
										placeholder={
											message_placeholder
										}></textarea>
								</label>
								<button
									className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[--secondary] py-2 font-medium text-md backdrop-blur-3xl hover:scale-105 transition mt-2 text-[--primary]"
									type="submit">
									{send}
								</button>
							</div>
						</form>
					</div>
				</dialog>
			)}
		</div>
	);
}
