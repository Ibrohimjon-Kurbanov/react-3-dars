import styles from "./index.module.css";
function Address(props) {
  const { region, zip } = props.address;
  return (
    <div className={styles.address}>
      <h3 className={styles.address_title}>{region}</h3>
      <h3 className={styles.address_title}>{zip}</h3>
    </div>
  );
}
export default Address;
