import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(50, "Must be at most 50 characters")
        .required("Required"),
    number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, "Format: XXX-XX-XX")
        .required("Required"),
});

function ContactForm({ addContact }) {
    return (
        <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                addContact(values.name, values.number);
                resetForm();
            }}
        >
            <Form className={styles.form}>
                <label>Name
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" className={styles.error} />
                </label>
                <label>Number
                    <Field type="text" name="number" />
                    <ErrorMessage name="number" component="div" className={styles.error} />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}

export default ContactForm;
