import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ logout, signInUsers }) {
  const item = useSelector((state) => state.cart);
  return (
    <header>
      <h1 class="logo">Cartify</h1>
      <nav>
        <Link to="/">Products</Link>

        <Link to="/Cart">
          Cart
          <span className="cart-badge">{item.cart.length}</span>
        </Link>

        {signInUsers ? (
          <>
            <p>Welcome {signInUsers.name.toUpperCase()}</p>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signIn"  className="login-btn"> SignIn / SignUp</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
