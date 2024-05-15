import { useEffect, useState } from "react";
import pointer from "../icons/pointer.svg";

const FollowMouse = () => {
	const [enabled, setEnabled] = useState(true);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	// pointer move
	useEffect(() => {
		console.log("effect ", { enabled });

		const handleMove = (event) => {
			const { clientX, clientY } = event;
			setPosition({ x: clientX, y: clientY });
		};

		if (enabled) {
			window.addEventListener("pointermove", handleMove);
		}

		// cleanup:
		// -> cuando el componente se desmonta
		// -> cuando cambian las dependencias, antes de ejecutar
		//    el efecto de nuevo
		return () => {
			window.removeEventListener("pointermove", handleMove);
		};
	}, [enabled]);

	// [] -> solo se ejecuta una vez cuando se monta el componente
	// [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
	// undefined -> se ejecuta cada vez que se renderiza el componente

	// change body className
	useEffect(() => {
		document.body.classList.toggle("no-cursor", enabled);

		return () => {
			document.body.classList.remove("no-cursor");
		};
	}, [enabled]);

	return (
		<>
			<div
				style={{
					position: "fixed",
					backgroundColor: "#CCBB9B",
					filter: "blur(15px)", // Ajusta el valor de blur según desees
					boxShadow: "0 0 20px 20px rgba(204, 187, 155, 0.5)", // Cambia el color y la opacidad según desees
					borderRadius: "50%",
					opacity: 0.3,
					pointerEvents: "none",
					left: -25,
					top: -25,
					width: 150,
					height: 150,
					transform: `translate(${position.x}px, ${position.y}px)`,
				}}
			/>
			<button
				onClick={() => setEnabled(!enabled)}
				className="bg-[#e6dcc9]  text-sm text-[--primary] px-6 py-3 rounded-full transition hover:scale-105  items-center justify-center font-light cursor-pointer gap-1 hidden md:flex ">
				{enabled ? "Off" : "On"}
				<img src={pointer.src} className="max-w-6" alt="pointer icon" />
			</button>
		</>
	);
};

function App() {
	return (
		<main>
			<FollowMouse />
		</main>
	);
}

export default App;
