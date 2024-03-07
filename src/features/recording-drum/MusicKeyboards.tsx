import { useEffect, useRef } from 'react';
import { drumData } from './constants';
import { playSound } from './utils';

type Props = {
	keyboardKey: string;
	description: string;
	soundUrl: string;
};

const MusicKeyboardButton = ({ keyboardKey, description, soundUrl }: Props) => {
	const soundRef = useRef<HTMLAudioElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		window.addEventListener('keydown', (e) =>
			playSound({
				key: e.key,
				soundRef,
				buttonRef,
				keyboardKey,
			}),
		);

		return () => {
			window.removeEventListener('keydown', (e) =>
				playSound({
					key: e.key,
					soundRef,
					buttonRef,
					keyboardKey,
				}),
			);
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
