import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import UserList from "./Components/User/UserList";
import UserForm from "./Components/UserForm/UserForm";
import { useState } from "react";
import NaviationBar from "./Components/Navigation/NavigationBar";

function App() {
  const [users, setUsers] = useState([]);
  const [showAddUserForm, setShowUserForm] = useState(false);

  const shouldShowUserform = () => {
    setShowUserForm((priorValue) => !priorValue);
  };

  const onFormSubmitHandler = ({ username, age }, resetForm) => {
    setUsers((priorList) => {
      let newList = [...priorList];
      newList.unshift({ key: Date.now(), username: username, age: age });
      return newList;
    });
    shouldShowUserform();
    resetForm();
  };

  return (
    <>
      <NaviationBar />
      <Container className="p-5">
        <Container className="p-3 bg-light border rounded">
          {!showAddUserForm && (
            <Button
              varient="primary"
              type="button"
              onClick={shouldShowUserform}
            >
              Open User Form
            </Button>
          )}
          {showAddUserForm && (
            <Row>
              <Col>
                <UserForm
                  onSubmitHandler={onFormSubmitHandler}
                  onCloseFormHandler={shouldShowUserform}
                />
              </Col>
            </Row>
          )}
        </Container>

        <Container>
          <Row>
            <br />
          </Row>
        </Container>

        {users.length > 0 && (
          <Container className="p-3 bg-light border">
            <UserList users={users} />
          </Container>
        )}
      </Container>
    </>
  );
}

export default App;
