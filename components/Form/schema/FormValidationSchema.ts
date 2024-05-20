import * as Yup from 'yup';
import { ValidationMessage } from '@/components/Form/enum/ValidationMessage';

const phoneRegExp = /^(?:\d\s?){9}$/;
export const FormValidationSchema = Yup.object().shape({
	name: Yup.string().required(ValidationMessage.IS_REQUIRED),
	email: Yup.string().email(ValidationMessage.WRONG_EMAIL).required(ValidationMessage.IS_REQUIRED),
	phone: Yup.string().matches(phoneRegExp, ValidationMessage.WRONG_PHONE_NUMBER),
	message: Yup.string().required(ValidationMessage.IS_REQUIRED),
});
