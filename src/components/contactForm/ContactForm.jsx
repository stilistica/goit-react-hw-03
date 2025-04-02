import s from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import {useId} from "react";

const FeedbackSchema = Yup.object().shape({
    contactName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    number: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});
const initialValues = {
    contactName: '',
    number: ''
};
export default  function ContactForm({addContact}) {
    const nameFormId = useId();
    const numberFormId = useId();

    const handleSubmit = (values, actions) => {
        addContact({
            id: nanoid(),
            name: values.contactName,
            number: values.number,
        });
        actions.resetForm();
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}>
            <Form className={s.form}>
                <div className={s.formItem}>
                    <label htmlFor={nameFormId}>Name</label>
                    <Field type='text' name='contactName' id={nameFormId}/>
                    <ErrorMessage name="contactName" component="span" />
                </div>

                <div className={s.formItem}>
                    <label htmlFor={numberFormId}>Number</label>
                    <Field type='tel' name='number' id={numberFormId}/>
                    <ErrorMessage name="number" component="span" />
                </div>

                <button type="submit" className={s.btn}>Add contact</button>
            </Form>
        </Formik>
    );
}

