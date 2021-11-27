import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const User = ({ username, age }) => {
    return (
        <Row className="p-1 justify-content">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Text>{username} (  {age} {age > 1 ? "years" : "year"} old) </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>)
}

export default User;