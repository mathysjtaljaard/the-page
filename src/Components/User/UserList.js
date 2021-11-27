import { memo } from "react";
import User from "./User";

const UserList = memo(({ users }) => {

    if (users === undefined || users.length === 0) return '';

    return users.map(user => <User key={user.key} username={user.username} age={user.age} />)

});

export default UserList;