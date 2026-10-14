import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page-container">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for doesnt exist.</p>
      <Link to="/">Go back </Link>
    </div>
  );
}

export default NotFound;