import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const FormInput = ({ id, labelValue, placeHolder, onChangeHandler, onBlur, value, errorMessage, type }) => {

    return (
        < Row >
            <Form.Group className="mb-3" controlId={`controller-${id}`}>
                <Form.Label>{labelValue}</Form.Label>
                <Form.Control type={type} name={id} placeholder={placeHolder}
                    onBlur={onBlur} onChange={onChangeHandler} value={value}
                    isInvalid={errorMessage} isValid={!errorMessage} />
                <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
            </Form.Group>
        </Row >)
}

export default FormInput;