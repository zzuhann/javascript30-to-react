import { useEffect, useRef } from 'react';
import { drumData } from './constants';

type Props = {
	keyboardKey: string;
	description: string;
	soundUrl: string;
};

const MusicKeyboardButton = ({ keyboardKey, description, soundUrl }: Props) => {
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
		<button className='border-solid border-2 border-gray-800 w-24 h-24 rounded-md'>
			<p>{keyboardKey}</p>
			<p>{description}</p>
			<audio src={soundUrl} ref={soundRef} />
		</button>
	);
};

export const MusicKeyboard = () => {
	return (
		<div className='flex gap-4 justify-center items-center'>
			{drumData.map((drum) => (
				<MusicKeyboardButton
					key={drum.keyboardKey}
					keyboardKey={drum.keyboardKey}
					description={drum.description}
					soundUrl={drum.soundUrl}
				/>
			))}
		</div>
	);
};
