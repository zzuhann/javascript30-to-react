import { playSound, resetButtonStyle } from './utils';

// use jest to test the resetButtonStyle function
describe('resetButtonStyle', () => {
	it('should remove border-color, box-shadow, and transform from the button', () => {
		const buttonRef = {
			current: { style: { removeProperty: jest.fn() } },
		} as unknown as React.RefObject<HTMLButtonElement>;
		resetButtonStyle(buttonRef);
		expect(buttonRef.current!.style.removeProperty).toHaveBeenCalledTimes(3);
		expect(buttonRef.current!.style.removeProperty).toHaveBeenCalledWith('border-color');
		expect(buttonRef.current!.style.removeProperty).toHaveBeenCalledWith('box-shadow');
		expect(buttonRef.current!.style.removeProperty).toHaveBeenCalledWith('transform');
	});
});

// use jest to test the playSound function
describe('playSound', () => {
	it('should reset the button style if the key is not the keyboardKey', () => {
		const buttonRef = {
			current: { style: { removeProperty: jest.fn() } },
		} as unknown as React.RefObject<HTMLButtonElement>;
		const soundRef = {
			current: { play: jest.fn() },
		} as unknown as React.RefObject<HTMLAudioElement>;
		playSound({
			key: 'r',
			soundRef,
			buttonRef,
			keyboardKey: 'A',
		});
		expect(buttonRef.current!.style.removeProperty).toHaveBeenCalledTimes(3);
		expect(soundRef.current!.play).not.toHaveBeenCalled();
	});

	it('should play the sound and set the button style if the key is the keyboardKey', () => {
		const buttonRef = {
			current: { style: { setProperty: jest.fn(), removeProperty: jest.fn() } },
		} as unknown as React.RefObject<HTMLButtonElement>;
		const soundRef = {
			current: { play: jest.fn() },
		} as unknown as React.RefObject<HTMLAudioElement>;
		playSound({
			key: 'A',
			soundRef,
			buttonRef,
			keyboardKey: 'A',
		});
		expect(buttonRef.current!.style.setProperty).toHaveBeenCalledTimes(3);
		expect(soundRef.current!.play).toHaveBeenCalled();
	});
});
