import { Component } from "react";
import styles from "./UserListItem.module.css";
import { TiLocation } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";

export default class UserListItem extends Component {
  render() {
    const { user, isSelected, selectHandler, deleteHandler } = this.props;
    return (
      <article
        className={`${styles["user-item"]} ${isSelected && styles.selected}`}
        onClick={(e) => selectHandler(e, user.id)}
      >
        <button
          className={styles["delete-button"]}
          onClick={(e) => deleteHandler(e, user.id)}
        >
          <TiTimes />
        </button>
        <img
          className={styles["profile-picture"]}
          src={user.imgSrc}
          alt={user.fullname}
        />
        <h1>
          <span className={styles["name"]} title={user.gender}>
            {user.fullname}
          </span>
          , {user.age}
        </h1>
        <div className={styles["contact"]}>
          <p>{user.handle}</p>
          <p>{user.email}</p>
        </div>
        <p className={styles["location"]}>
          <TiLocation />
          {user.location.country}, {user.location.city}
        </p>
      </article>
    );
  }
}
