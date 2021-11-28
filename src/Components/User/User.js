import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const User = ({ username, age, color, index }) => {
    return (
        <Row>
            <Col className="d-none d-md-block" sm='auto' >
                <Card style={{ color: color }} className="text-center">
                    <Card.Body>
                        <Card.Text>{index}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm='auto' >
                <Card style={{ color: color }} >
                    <Card.Body>
                        <Card.Text>{username} (  {age} {age > 1 ? "years" : "year"} old) </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row >)
}

export default User;