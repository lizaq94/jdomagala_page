import { useFormik } from 'formik';
import classes from '@/styles/components/Form.module.scss';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { FormValidationSchema } from '@/components/Form/schema/FormValidationSchema';
import { useState } from 'react';
import { sendContactForm } from '@/lib/api';
import FormNotification from '@/components/Toast/FormNotification';
import { AnimatePresence } from 'framer-motion';
import { ICMSInput } from '@/types/cmsTypes';
import PhoneInput from '@/components/PhoneInput/PhoneInput';

interface IProps {
	inputs: {
		nameInput: ICMSInput;
		emailInput: ICMSInput;
		phoneInput: ICMSInput;
		messageInput: ICMSInput;
	};
	buttonText: string;
}

const Form = ({ inputs, buttonText }: IProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [notificationMessage, setNotificationMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const { nameInput, emailInput, phoneInput, messageInput } = inputs;

	const initialValues = {
		name: '',
		email: '',
		phone: '',
		message: '',
	};

	const showNotificationMessage = () => {
		setNotificationMessage('Dziękujemy! Email został wysłany.');
		setTimeout(() => {
			setNotificationMessage('');
		}, 3000);
	};

	const showErrorMessage = (message: string) => {
		setErrorMessage(message);
		setTimeout(() => {
			setErrorMessage('');
		}, 3000);
	};

	const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue } = useFormik({
		initialValues,
		validationSchema: FormValidationSchema,
		onSubmit: async (values, { resetForm }) => {
			try {
				setIsLoading(true);
				await sendContactForm(values);
				resetForm();
				setIsLoading(false);
				showNotificationMessage();
			} catch (error) {
				if (error instanceof Error) {
					showErrorMessage(error.message);
					setIsLoading(false);
				}
			}
		},
	});

	return (
		<div className={classes.wrapper}>
			<form onSubmit={handleSubmit}>
				<Input
					name="name"
					label={nameInput.label}
					placeholder={nameInput.placeholder}
					type="text"
					value={values.name}
					onChange={handleChange}
					onBlur={handleBlur}
					errorMessage={errors.name}
					isTouched={touched.name}
				/>
				<Input
					name="email"
					label={emailInput.label}
					placeholder={emailInput.placeholder}
					type="email"
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
					errorMessage={errors.email}
					isTouched={touched.email}
				/>
				<PhoneInput
					label={phoneInput.label}
					placeholder={phoneInput.placeholder}
					value={values.phone}
					onChange={handleChange}
					onBlur={handleBlur}
					errorMessage={errors.phone}
					isTouched={touched.phone}
					setFieldValue={setFieldValue}
				/>
				<Input
					name="message"
					label={messageInput.label}
					placeholder={messageInput.placeholder}
					value={values.message}
					onChange={handleChange}
					onBlur={handleBlur}
					errorMessage={errors.message}
					isTouched={touched.message}
					isTextArea
				/>
				<div className={classes.buttonWrapper}>
					<Button
						content={buttonText}
						customClass={classes.formButton}
						filled
						clickEffect
						buttonType="submit"
						isLoading={isLoading}
					/>
				</div>
			</form>
			<AnimatePresence>
				{notificationMessage ? <FormNotification message={notificationMessage} /> : null}
				{errorMessage ? <FormNotification message={errorMessage} isError /> : null}
			</AnimatePresence>
		</div>
	);
};

export default Form;
