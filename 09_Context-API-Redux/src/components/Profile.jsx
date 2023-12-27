import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  if (!user) {
    return (
      <div>
        <h3>Please login to view your profile</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome {user.username}</h1>
      </div>
    );
  }
};

export default Profile;
