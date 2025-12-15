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

	const wrapperClasses = 'relative mb-5 w-full';

	const fieldClasses = `
		w-full px-4 py-3 bg-white
		text-base text-slate-900
		border border-slate-300 rounded-lg
		outline-none transition-colors duration-200
		focus:border-blue-600 focus:ring-1 focus:ring-blue-600
		placeholder:text-slate-400
		${hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
	`.replace(/\s+/g, ' ').trim();

	const textareaClasses = `${fieldClasses} min-h-[120px] resize-none`;

	const labelClasses = 'block mb-2 text-sm font-medium text-slate-700';

	return (
		<div className={wrapperClasses}>
			{label && (
				<label htmlFor={name} className={labelClasses}>
					{label}
				</label>
			)}
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
			{hasError && (
				<p className="mt-1.5 text-red-500 text-sm">{errorMessage}</p>
			)}
		</div>
	);
};

export default Input;
