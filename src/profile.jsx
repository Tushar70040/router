import {Outlet} from "react-router";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you? im from profile page</p>
         <hr />
      <h2>the profile visited is here:</h2>
      <Outlet/>

    </div>
  );
};

export default Profile;
