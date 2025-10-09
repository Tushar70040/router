
//import { useParams } from "react-router";
import Spinach from "./spinach";
import Default from "./default";
import Popeye from "./popeye";
import { Link  ,Outlet} from "react-router";
//with params

/*const Profile = () => {
  const {name} = useParams();

  return (
    <div>
      <h1>profile page</h1>
      <h2> the profile is visited here:</h2>

      {name=== "popeye" ? (<Popeye/>)
       : name === "spinach" ? (<Spinach/>)
       :(<Default/>)}
    </div>
  )

}*/

//without params

function Profile () {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      <Link to= "popeye">Popeye</Link>
      <br/>
      <Link to="spinach">spinach</Link>    
        <Outlet/>
    </div>
    
  );
};


export default Profile;

