import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
	const [advice, setAdvice] = useState(null);

	function fetchAdvice() {
		const response = async () => {
			const advice = await axios.get("https://api.adviceslip.com/advice");
			const object = await advice.data;
			setAdvice(object);
			console.log(object);
		};
		response().catch((err) => console.log("Oops! something went wrong"));
	}

	useEffect(() => {
		fetchAdvice();
	}, []);

	return (
		<div className="flex justify-center items-center w-full h-screen bg-DarkBlue">
			<div className="min-w-80 max-w-96 flex flex-col justify-center items-center gap-4 bg-DarkGrayishBlue px-8 py-12 text-LightCyan text-center relative rounded-lg">
				{advice ? (
					<>
						<h1 className="text-xs font-normal text-NeonGreen">
							ADVICE {`#${advice.slip.id}`}
						</h1>
						<p className="text-xl font-bold pb-4">{`"${advice.slip.advice}"`}</p>
					</>
				) : (
					<h1 className="font-bold text-xl">Loading...</h1>
				)}
				<img
					src="/pattern-divider-desktop.svg"
					alt="pattern-divider-desktop.svg"
					className="hidden sm:flex"
				/>
				<img
					src="/pattern-divider-mobile.svg"
					alt="pattern-divider-mobile.svg"
					className="flex sm:hidden"
				/>
				<button
					onClick={fetchAdvice}
					className="bg-NeonGreen flex items-center justify-center p-3 rounded-full absolute -bottom-6 hover:shadow-[0_0_24px] hover:shadow-NeonGreen transition"
				>
					<svg
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						className="scale-75"
					>
						<path
							d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
							fill="#202733"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
