import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const FormInput = ({ id, labelValue, placeHolder, onChangeHandler, onBlur, value, message, type, touched, isInputValid }) => {

    return (
        < Row >
            <Form.Group className="mb-3" controlId={`controller-${id}`}>
                <Form.Label>{labelValue}</Form.Label>
                <Form.Control type={type} name={id} placeholder={placeHolder}
                    onBlur={onBlur} onChange={onChangeHandler} value={value}
                    isInvalid={!!touched && !isInputValid} isValid={!!touched && isInputValid} />
                <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>
            </Form.Group>
        </Row >)
}

export default FormInput;