const resetButtonStyle = (ref: React.RefObject<HTMLButtonElement>) => {
	ref.current?.style.removeProperty('border-color');
	ref.current?.style.removeProperty('box-shadow');
	ref.current?.style.removeProperty('transform');
};

const playSound = ({
	key,
	soundRef,
	buttonRef,
	keyboardKey,
}: {
	key: string;
	soundRef: React.RefObject<HTMLAudioElement>;
	buttonRef: React.RefObject<HTMLButtonElement>;
	keyboardKey: string;
}) => {
	resetButtonStyle(buttonRef);
	if (key.toUpperCase() !== keyboardKey) return;
	soundRef.current?.play();
	buttonRef.current?.style.setProperty('border-color', '#ffc600');
	buttonRef.current?.style.setProperty('box-shadow', '0 0 1rem #ffc600');
	buttonRef.current?.style.setProperty('transform', 'scale(1.1)');

	setTimeout(() => {
		resetButtonStyle(buttonRef);
	}, 200);
};

export { resetButtonStyle, playSound };
