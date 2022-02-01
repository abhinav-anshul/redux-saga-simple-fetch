import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./actions";

export default function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.myFirstReducer.users);
  return (
    <div className="App">
      <button onClick={() => dispatch(getUsersFetch())}>fetch users</button>
      <div>
        Users:
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}
