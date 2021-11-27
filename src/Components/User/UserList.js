import { memo } from "react";
import User from "./User";

const UserList = memo(({ users }) => {

    if (users === undefined || users.length === 0) return '';

    return users.map((user, index) => <User key={user.key} {...user} index={index} />)

});

export default UserList;