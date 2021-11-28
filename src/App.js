import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import UserList from "./Components/User/UserList";
import UserForm from "./Components/UserForm/UserForm";
import { Fragment, useState } from "react";
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
      newList.unshift({ key: Date.now(), username: username, age: age, color: `#${(Math.floor(Math.random() * 16777215).toString(16))}` });
      return newList;
    });
    shouldShowUserform();
    resetForm();
  };

  return (
    <Fragment>
      <NaviationBar />
      <Container className="p-5 bg-dark" variant="dark" fluid="true">
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


        {users.length > 0 && (
          <>
            <Container>
              <Row>
                <br />
              </Row>
            </Container>

            <Container className="p-3 bg-light border rounded" lg="auto">
              <UserList users={users} />
            </Container>
          </>
        )}
      </Container>
    </Fragment>
  );
}

export default App;
