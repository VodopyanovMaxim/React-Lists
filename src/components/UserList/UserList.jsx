import { Component } from "react";
import UserListItem from "./UserListItem.jsx";
import styles from "./UserList.module.css";

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: props.users,
      selectedUser: null,
    };
  }

  selectHandler = (e, id) => {
    const { users, selectedUser } = this.state;
    const targetIdx = users.findIndex((u) => u.id === id);
    if (targetIdx === -1) {
      return;
    }
    const user = users[targetIdx];
    this.setState({
      selectedUser: selectedUser === user ? null : user,
    });
  };

  deleteHandler = (e, id) => {
    e.stopPropagation();
    let { users } = this.state;
    const targetIdx = users.findIndex((u) => u.id === id);
    if (targetIdx === -1) {
      return;
    }
    this.setState({
      users: users.filter((u) => u.id !== id),
    });
  };

  render() {
    return (
      <section className={styles["user-list"]}>
        {this.state.users.map((u) => (
          <UserListItem
            user={u}
            isSelected={this.state.selectedUser === u}
            selectHandler={this.selectHandler}
            deleteHandler={this.deleteHandler}
            key={u.id}
          ></UserListItem>
        ))}
      </section>
    );
  }
}
