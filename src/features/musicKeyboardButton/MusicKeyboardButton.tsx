type Props = {
	keyboardKey: string;
	description: string;
	soundUrl: string;
};

export const MusicKeyboardButton = ({ keyboardKey, description, soundUrl }: Props) => {
	return (
		<div className='border-solid border-2 border-gray-800'>
			<p>{keyboardKey}</p>
			<p>{description}</p>
			<p className='hidden'>{soundUrl}</p>
		</div>
	);
};
