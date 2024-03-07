import { useEffect, useRef } from 'react';
import { drumData } from './constants';

type Props = {
	keyboardKey: string;
	description: string;
	soundUrl: string;
};

const MusicKeyboardButton = ({ keyboardKey, description, soundUrl }: Props) => {
	const soundRef = useRef<HTMLAudioElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const resetButtonStyle = () => {
		buttonRef.current?.style.removeProperty('border-color');
		buttonRef.current?.style.removeProperty('box-shadow');
		buttonRef.current?.style.removeProperty('transform');
	};

	const playSound = (key: string) => {
		resetButtonStyle();
		if (key.toUpperCase() !== keyboardKey) return;
		soundRef.current?.play();
		buttonRef.current?.style.setProperty('border-color', '#ffc600');
		buttonRef.current?.style.setProperty('box-shadow', '0 0 1rem #ffc600');
		buttonRef.current?.style.setProperty('transform', 'scale(1.1)');

		setTimeout(() => {
			resetButtonStyle();
		}, 200);
	};

	useEffect(() => {
		window.addEventListener('keydown', (e) => playSound(e.key));

		return () => {
			window.removeEventListener('keydown', (e) => playSound(e.key));
		};
	}, []);

	return (
		<button
			className='border-solid border-2 border-gray-800 w-24 h-24 rounded-md duration-100'
			ref={buttonRef}
		>
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
