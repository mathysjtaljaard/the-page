import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const SubmitResetCustomButtonGroup = ({ buttonDirection, isDisabled, buttonGap, submitButtonValue, resetButtonValue, onResethandler }) => {

    const direction = buttonDirection || "horizontal";
    const gap = buttonGap || 2;

    return (
        <Row>
            <Col>
                <Stack direction={direction} gap={gap}>
                    <Button varient="primary" type="submit" disabled={isDisabled}>{submitButtonValue}</Button>
                    <Button varient="primary" type="button" onClick={onResethandler}>{resetButtonValue}</Button>
                </Stack>
            </Col>
        </Row>
    )
}

export default SubmitResetCustomButtonGroup;