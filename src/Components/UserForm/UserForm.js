import * as Yup from 'yup'
import { Formik } from 'formik'

import Form from "react-bootstrap/Form";

import FormInput from "./FormInput";
import SubmitResetCustomButtonGroup from "./../Things/SubmitResetCustomButtonGroup"
import CloseButtonRight from '../Things/CloseButtonRight';

// Scope of userform 
// 1. validate the inputs
// 2. after all validation completed, submit data to store
const UserForm = ({ onSubmitHandler, onCloseFormHandler }) => {

    const onSubmitHandlerFormik = (event, { resetForm }) => {
        onSubmitHandler(event, resetForm)
    }
    const validationSchema = Yup.object(
        {
            username: Yup.string().min(5, 'Must be >= to 5 characters').max(50, 'Must be 50 characters or less').required('Required'),
            age: Yup.number().min(1, 'Age has to be greater than 0').max(140, 'Wowza I hope you are not that old').required('Required')
        }
    )
    return (
        <Formik initialValues={{
            username: '',
            age: '',
        }}
            validationSchema={validationSchema}
            onSubmit={onSubmitHandlerFormik}
        >
            {props => <UserFormTemplate {...props} onCloseFormHandler={onCloseFormHandler} />}
        </Formik >
    )
}

const UserFormTemplate = ({ handleSubmit, handleChange, handleBlur, handleReset, values, touched, errors, onCloseFormHandler }) => {

    const isValidUsername = (!!touched.username === false || touched.username) && !errors.username;
    const isValidAge = (!!touched.age === false || touched.age) && !errors.age;
    const submitDisabled = !((touched?.username && touched?.age) && (isValidUsername && isValidAge))

    return (
        <div>
            < Form noValidate onSubmit={handleSubmit} >
                <CloseButtonRight onCloseFormHandler={onCloseFormHandler} />
                <FormInput id="username" type="text" labelValue="Username" placeHolder="Enter your username"
                    onChangeHandler={handleChange} onBlur={handleBlur} touched={touched.username}
                    message={errors.username} value={values.username} isInputValid={isValidUsername} />
                <FormInput id="age" type="number" labelValue="Age" placeHolder="Enter your age in years"
                    onChangeHandler={handleChange} onBlur={handleBlur} touched={touched.age}
                    message={errors.age} value={values.age} isInputValid={isValidAge} />
                <SubmitResetCustomButtonGroup
                    resetButtonValue="Reset Form" submitButtonValue="Add User"
                    isDisabled={submitDisabled}
                    onResethandler={handleReset}
                />
            </Form>
        </div>)
}

export default UserForm;