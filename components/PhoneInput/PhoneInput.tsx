import React, { ChangeEvent, FocusEvent, useState } from 'react';
import classes from '@styles/components/Input.module.scss';

interface IProps {
	onChange: (e: ChangeEvent<any>) => void;
	onBlur: (e: FocusEvent<any>) => void;
	value: string;
	label?: string;
	type?: string;
	placeholder?: string;
	name?: string;
	required?: boolean;
	errorMessage?: string;
	isTouched?: boolean;
}

const PhoneInput = (props: IProps) => {
	const { label, type, placeholder, name, required, onChange, onBlur, errorMessage, isTouched, value } = props;

	const [newValue, setNewValue] = useState(value);

	const wrapperClasses = `${classes.wrapper} ${errorMessage && isTouched ? classes.withError : ''}`;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		let input = event.target?.value;
		input = input.replace(/\D/g, '');
		input = input.substring(0, 9);
		input = input.replace(/(\d{3})(?=\d)/g, '$1 ');
		setNewValue(input);
		handleChange(event);
	};

	return (
		<div className={wrapperClasses}>
			<input
				type={type}
				className={classes.field}
				placeholder={placeholder}
				name={name}
				id={name}
				value={newValue}
				required={required}
				onChange={handleChange}
				onBlur={onBlur}
			/>
			<label htmlFor={name} className={classes.label}>
				{label}
			</label>
			{errorMessage && isTouched ? <p className={classes.error}>{errorMessage}</p> : null}
		</div>
	);
};

export default PhoneInput;
