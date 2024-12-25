import "./App.css";
import data from "./assets/data.json";
import UserList from "./components/UserList";
function App() {
  return (
    <>
      <UserList data={data} />
    </>
  );
}
export default App;
