import classes from '@styles/components/Input.module.scss';
import { ChangeEvent, FocusEvent } from 'react';

interface IProps {
	onChange: (e: ChangeEvent<any>) => void;
	onBlur: (e: FocusEvent<any>) => void;
	label?: string;
	type?: string;
	placeholder?: string;
	name?: string;
	required?: boolean;
	isTextArea?: boolean;
	errorMessage?: string;
	isTouched?: boolean;
}
const Input = (props: IProps) => {
	const { label, type, placeholder, name, required, isTextArea = false, onChange, onBlur, errorMessage, isTouched } = props;
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
					required={required}
					onChange={onChange}
					onBlur={onBlur}
				/>
			) : (
				<textarea
					className={`${classes.field} ${classes.textarea}`}
					placeholder={placeholder}
					name={name}
					id={name}
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
