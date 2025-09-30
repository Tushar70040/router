import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile----</Link>
            <Link to="about">about</Link>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
  //use to in link for setting up page to home or any 
            //secondary page
