React Router – The Odin Project
📘 Overview

This lesson introduces client-side routing in React using React Router. It covers setting up routes, navigating between pages, passing data, and implementing protected routes.

🧭 What is Client-Side Routing?

Client-side routing allows navigation between different views or pages in a React application without full page reloads. This approach enhances user experience by making the application feel more like a native app.

🔧 Setting Up React Router

Install React Router:

npm install react-router-dom


Define Routes:

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}


Create Components:

const Profile = () => (
  <div>
    <h1>Hello from profile page!</h1>
    <p>So, how are you?</p>
  </div>
);

🔗 Navigating Between Pages

Using <Link>:

  import { Link } from 'react-router-dom';

  <Link to="/profile">Go to Profile</Link>


Using <Navigate> for Programmatic Navigation:

  import { Navigate } from 'react-router-dom';

  <Navigate to="/profile" />

🧩 Nested Routes and Layouts

Nested Routes:

  <Route path="dashboard" element={<Dashboard />}>
    <Route path="stats" element={<Stats />} />
  </Route>


Using <Outlet> for Nested Components:

  import { Outlet } from 'react-router-dom';

  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
        <Outlet />
      </div>
    );
  }

🔐 Protected Routes

To restrict access to certain routes based on authentication:

import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element, ...rest }) {
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
}

🧪 Testing Components with React Router

Use React Testing Library to test components that utilize React Router:

Mocking Components:

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
  }));


Rendering Components:

  import { render } from '@testing-library/react';
  import { BrowserRouter } from 'react-router-dom';

  render(
    <BrowserRouter>
      <MyComponent />
    </BrowserRouter>
  );

✅ Key Takeaways

React Router enables client-side routing in React applications.

<Routes> and <Route> are used to define routes.

<Link> and <Navigate> facilitate navigation.

<Outlet> allows for nested routes and layouts.

Protected routes can be implemented to restrict access.

Testing components with React Router requires proper setup and mocking.