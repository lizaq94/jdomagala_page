import React, { ChangeEvent, FocusEvent, useState } from 'react';
import Input from '@/components/Input/Input';
import input from '@/components/Input/Input';

interface IProps {
	onChange: (e: ChangeEvent<any>) => void;
	onBlur: (e: FocusEvent<any>) => void;
	value: string;
	label?: string;
	placeholder?: string;
	errorMessage?: string;
	isTouched?: boolean;
	setFieldValue: any;
}

const PhoneInput = (props: IProps) => {
	const { label, placeholder, onChange, onBlur, errorMessage, isTouched, value, setFieldValue } = props;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		let inputvalue = event.target?.value;
		inputvalue = inputvalue.replace(/\D/g, '');
		inputvalue = inputvalue.replace(/(\d{3})(?=\d)/g, '$1 ');

		setFieldValue('phone', inputvalue, true);
	};

	return (
		<Input
			name="phone"
			label={label}
			placeholder={placeholder}
			type="tel"
			value={value}
			onChange={handleChange}
			onBlur={onBlur}
			errorMessage={errorMessage}
			isTouched={isTouched}
			maxLength={11}
		/>
	);
};

export default PhoneInput;
