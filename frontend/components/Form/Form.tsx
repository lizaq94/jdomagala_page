import classes from '@/styles/components/Form.module.scss';
import Input from '@/components/Input/Input';
const Form = () => {
	return (
		<div className={classes.wrapper}>
			<Input name="name" label="Name" placeholder="Name" type="text" />
			<Input name="email" label="Email" placeholder="Email" type="email" />
			<Input name="phone" label="Phone" placeholder="Phone" type="number" />
			<Input name="message" label="Message" placeholder="Message" isTextArea />
		</div>
	);
};

export default Form;
