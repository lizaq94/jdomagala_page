import { useFormik } from 'formik';
import classes from '@/styles/components/Form.module.scss';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { FormValidationSchema } from '@/components/Form/schema/FormValidationSchema';
import { useState } from 'react';
import { sendContactForm } from '@/lib/api';

const Form = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const initialValues = {
		name: '',
		email: '',
		phone: '',
		message: '',
	};

	const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
		initialValues,
		validationSchema: FormValidationSchema,
		onSubmit: async (values) => {
			try {
				setIsLoading(true);
				await sendContactForm(values);
				setIsLoading(false);
			} catch (error) {
				if (error instanceof Error) {
					setErrorMessage(error.message);
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
					label="Name"
					placeholder="Name"
					type="text"
					onChange={handleChange}
					onBlur={handleBlur}
					errorMessage={errors.name}
					isTouched={touched.name}
				/>
				<Input
					name="email"
					label="Email"
					placeholder="Email"
					type="email"
					onChange={handleChange}
					onBlur={handleBlur}
					errorMessage={errors.email}
					isTouched={touched.email}
				/>
				<Input
					name="phone"
					label="Phone"
					placeholder="Phone"
					type="tel"
					onChange={handleChange}
					onBlur={handleBlur}
					errorMessage={errors.phone}
					isTouched={touched.phone}
				/>
				<Input
					name="message"
					label="Message"
					placeholder="Message"
					onChange={handleChange}
					onBlur={handleBlur}
					errorMessage={errors.message}
					isTouched={touched.message}
					isTextArea
				/>
				<div className={classes.buttonWrapper}>
					<Button
						content={isLoading ? 'Loading..' : 'Send'}
						customClass={classes.formButton}
						outline
						clickEffect
						buttonType="submit"
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
