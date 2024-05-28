import classes from '@styles/components/Input.module.scss';
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
	const wrapperClasses = `${classes.wrapper} ${errorMessage && isTouched ? classes.withError : ''}`;

	return (
		<div className={wrapperClasses}>
			{!isTextArea ? (
				<input
					type={type}
					className={classes.field}
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
					className={`${classes.field} ${classes.textarea}`}
					placeholder={placeholder}
					name={name}
					id={name}
					value={value}
					required={required}
					onChange={onChange}
					onBlur={onBlur}
				/>
			)}

			<label htmlFor={name} className={classes.label}>
				{label}
			</label>
			{errorMessage && isTouched ? <p className={classes.error}>{errorMessage}</p> : null}
		</div>
	);
};

export default Input;
