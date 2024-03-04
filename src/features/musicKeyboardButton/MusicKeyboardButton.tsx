import { useEffect, useRef } from 'react';

type Props = {
	keyboardKey: string;
	description: string;
	soundUrl: string;
};

export const MusicKeyboardButton = ({ keyboardKey, description, soundUrl }: Props) => {
	const soundRef = useRef<HTMLAudioElement>(null);
	const playSound = (key: string) => {
		if (key.toUpperCase() !== keyboardKey) return;
		soundRef.current?.play();
	};

	useEffect(() => {
		window.addEventListener('keydown', (e) => playSound(e.key));

		return () => {
			window.removeEventListener('keydown', (e) => playSound(e.key));
		};
	}, []);

	return (
		<button className='border-solid border-2 border-gray-800'>
			<p>{keyboardKey}</p>
			<p>{description}</p>
			<audio src={soundUrl} ref={soundRef} />
		</button>
	);
};
