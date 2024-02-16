import classes from '@styles/components/Input.module.scss';
const Input = () => {
	return (
		<div className={classes.wrapper}>
			<input type="input" className={classes.field} placeholder="Name" name="name" id="name" required />
			<label htmlFor="name" className={classes.label}>
				Name
			</label>
		</div>
	);
};

export default Input;
