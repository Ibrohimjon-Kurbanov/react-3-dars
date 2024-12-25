import Address from "../Address";
import Car from "../Car";
import styles from "./index.module.css";
function User(props) {
  const { image, firstName, lastName, phone, email, address, cars } =
    props.user;

  return (
    <div className={styles.card}>
      <img src={image} alt="qandaydir image" />
      <div className={styles.card_wrapper}>
        <h3 className={styles.card_title}>{firstName}</h3>
        <h3 className={styles.card_title}>{lastName}</h3>
      </div>
      <h3 className={styles.card_title}>Telefon: {phone}</h3>
      <h3 className={styles.card_title}>Email: {email}</h3>
      <Address address={address} />
      {cars.length > 0 ? (
        cars.map((car, index) => {
          return <Car key={index} car={car}></Car>;
        })
      ) : (
        <h3 className={styles.card_title}>Mashina yo'q</h3>
      )}
    </div>
  );
}
export default User;
