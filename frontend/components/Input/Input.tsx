import classes from '@styles/components/Input.module.scss';

interface IProps {
	label?: string;
	type?: string;
	placeholder?: string;
	name?: string;
	required?: boolean;
	isTextArea?: boolean;
}
const Input = (props: IProps) => {
	const { label, type, placeholder, name, required, isTextArea = false } = props;

	return (
		<div className={classes.wrapper}>
			{!isTextArea ? (
				<input type={type} className={classes.field} placeholder={placeholder} name={name} id={name} required={required} />
			) : (
				<textarea
					className={`${classes.field} ${classes.textarea}`}
					placeholder={placeholder}
					name={name}
					id={name}
					required={required}
				/>
			)}

			<label htmlFor={name} className={classes.label}>
				{label}
			</label>
		</div>
	);
};

export default Input;
