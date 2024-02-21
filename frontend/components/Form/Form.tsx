import classes from '@/styles/components/Form.module.scss';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
const Form = () => {
	return (
		<div className={classes.wrapper}>
			<Input name="name" label="Name" placeholder="Name" type="text" />
			<Input name="email" label="Email" placeholder="Email" type="email" />
			<Input name="phone" label="Phone" placeholder="Phone" type="tel" />
			<Input name="message" label="Message" placeholder="Message" isTextArea />
			<div className={classes.buttonWrapper}>
				<Button content="Send" customClass={classes.formButton} outline clickEffect />
			</div>
		</div>
	);
};

export default Form;
