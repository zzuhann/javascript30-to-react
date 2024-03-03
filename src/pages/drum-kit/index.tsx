import { MusicKeyboardButton } from 'src/features/musicKeyboardButton';
import { drumData } from './constants';

const DrumKit = () => {
	return (
		<div className='flex gap-4'>
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

export default DrumKit;
