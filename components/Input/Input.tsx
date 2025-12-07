import { ChangeEvent, FocusEvent } from 'react';

interface IProps {
	onChange: (e: ChangeEvent<any>) => void;
	onBlur: (e: FocusEvent<any>) => void;
	value: string;
	label?: string;
	type?: string;
	placeholder?: string;
	name?: string;
	required?: boolean;
	isTextArea?: boolean;
	errorMessage?: string;
	isTouched?: boolean;
	maxLength?: number;
}

const Input = (props: IProps) => {
	const {
		label,
		type,
		placeholder,
		name,
		required,
		isTextArea = false,
		onChange,
		onBlur,
		errorMessage,
		isTouched,
		value,
		maxLength,
	} = props;

	const hasError = errorMessage && isTouched;

	const wrapperClasses = 'relative pt-[15px] mt-5 w-full';

	const fieldClasses = `
		input-field
		font-inherit w-full border-0 outline-none
		text-base text-body-font
		py-[7px] px-0 bg-transparent
		transition-[border-color] duration-200
		border-b-2 border-primary
		shadow-none
		${hasError ? 'border-red-500' : ''}
	`.replace(/\s+/g, ' ').trim();

	const textareaClasses = `${fieldClasses} overflow-hidden min-h-[150px] resize-none`;

	const labelClasses = `
		input-label
		absolute top-[-5px] block
		transition-all duration-200
		text-base text-gray-500
	`.replace(/\s+/g, ' ').trim();

	return (
		<div className={wrapperClasses}>
			{!isTextArea ? (
				<input
					type={type}
					className={fieldClasses}
					placeholder={placeholder}
					name={name}
					id={name}
					value={value}
					required={required}
					onChange={onChange}
					onBlur={onBlur}
					maxLength={maxLength}
				/>
			) : (
				<textarea
					className={textareaClasses}
					placeholder={placeholder}
					name={name}
					id={name}
					value={value}
					required={required}
					onChange={onChange}
					onBlur={onBlur}
				/>
			)}

			<label htmlFor={name} className={labelClasses}>
				{label}
			</label>
			{hasError && (
				<p className="mt-[5px] text-red-500 text-sm">{errorMessage}</p>
			)}
		</div>
	);
};

export default Input;
