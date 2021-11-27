import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CloseButton from "react-bootstrap/CloseButton";

const CloseButtonRight = ({ onCloseFormHandler }) => {
    return (
        <Row >
            <Col>
                <CloseButton onClick={onCloseFormHandler} className="float-sm-end" />
            </Col>
        </Row>
    )
}

export default CloseButtonRight;