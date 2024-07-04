import { useEffect, useState } from "react";
import sushi from "../../icons/sushi.svg";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./MapComp.css";

const MapComp = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyBHXk3SfXzOQBNgI3akcUeUeNMa82v7qdM",
	});
	const [res, setRes] = useState([]);
	const [selectedOption, setSelectedOption] = useState(0);
	const [center, setCenter] = useState({
		lat: -34.9054475585439,
		lng: -56.16855841716328,
	});

	const handleSelectChange = (event) => {
		setSelectedOption(parseInt(event.target.value));
	};

	const handleRedirect = (path) => {
		if (selectedOption > 0) {
			let value = res.find((item) => item.id === selectedOption);
			window.location.href = value.subdominio;
		}
	};

	useEffect(() => {
		if (selectedOption > 0) {
			let value = res.find((item) => item.id === selectedOption);
			setCenter({
				lat: parseFloat(value.latitud),
				lng: parseFloat(value.longitud),
			});
		}
	}, [selectedOption]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://apitienda.rhinox.io/v1/tienda/getSucursalesNegocio/445",
					{
						headers: {
							Authorization:
								"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0Njc1NjQzNyIsIm5hbWUiOiJSdWR5IGJ1cmdlcnMiLCJpYXQiOjEwOTg1NTI1OTJ9.PuC8rQIRpoaIcHJzE16h8-QBPgWhYy_HQ8NenMZfnss",
							// cors
							"Access-Control-Allow-Origin": "*",
						},
					}
				);
				if (!response.ok) {
					throw new Error("Error al cargar los datos");
				}
				const responseData = await response.json();
				setRes(responseData.sucursales);
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className="map-section">
			<article>
				<div className="sucursal-container ">
					<h4 className="text-[--secondary] font-bold text-xl">Sucursales: </h4>
					<div className="select-container">
						<select
							className="bg-[--secondary] ] text-sm text-[--primary] px-6 py-3 rounded-full transition  flex items-center justify-center  cursor-pointer gap-2 z-20 font-semibold"
							value={selectedOption}
							onChange={handleSelectChange}
							defaultValue="0">
							<option value="0" disabled>
								Selecciona una opción
							</option>
							{res.map((item) => (
								<option key={item.id} value={item.id}>
									{item.nombre} {item.tiempo_entrega_takeaway}{" "}
									min
								</option>
							))}
						</select>
					</div>
					<button
						className="bg-[--secondary] ] text-sm text-[--primary] px-6 py-3 rounded-full transition hover:scale-105 flex items-center justify-center font-light cursor-pointer gap-2 z-20 "
						onClick={() => handleRedirect()}>
						{" "}
						<img src={sushi.src} alt="sushi icon" class="max-w-6" />
						Hacer mi pedido
					</button>
				</div>
				{!isLoaded ? (
					<div className="spinner"></div>
				) : (
					<div className="map-container">
						<GoogleMap
							mapContainerClassName="map"
							center={center}
							zoom={12}>
							{res.map((item) => (
								<Marker
									key={item.id}
									position={{
										lat: parseFloat(item.latitud),
										lng: parseFloat(item.longitud),
									}}
								/>
							))}
						</GoogleMap>
					</div>
				)}
			</article>
		</section>
	);
};

export default MapComp;
