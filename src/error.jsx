import { Link } from "react-router"

const Error = () =>{
    return(
        <div>
            <h1>i'm from error page</h1>
            <h1>oh no this route is not working</h1>
            <Link  to="/">BACK TO HOME PAGE</Link>

        </div>
    )
}

export default Error;