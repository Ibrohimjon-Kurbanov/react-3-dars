import User from "../User";
import styles from "./index.module.css";

function UserList(props) {
  const { data } = props;

  return (
    <div className={styles.wrapper}>
      {data.length > 0 &&
        data.map((user, index) => {
          return <User key={index} user={user} />;
        })}
    </div>
  );
}

export default UserList;
