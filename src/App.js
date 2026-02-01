import Home from "./pages/Home";
import { Routes, Route, Outlet, Link } from "react-router";
import React from "react"; // needed even though React 19 is used - need to check
import "./styles/styles.scss";
import { AllMeals } from "./pages/AllMeals";
import { Navbar } from "./components/Navbar";
import cart from "./assets/images/cart.png";
import { Bestseller } from "./pages/Bestseller";
import { Product } from "./pages/Product";
import { MealsProvider } from "./pages/MealsContext";

const App = () => {
  return (
    <div className="home">
      <header className="home__header">
        <Link to="/" className="home__header--link-logo">
          <div className="home__header--logo">KIDDO</div>
        </Link>
        <nav className="home__header--nav">
          <Navbar />
        </nav>
        <nav className="home__header--actions">
          <img
            className="home__header--actions--cart"
            src={cart}
            alt="Shopping Cart"
          />
        </nav>
      </header>

      <main className="home__main">
        <MealsProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/menu" element={<AllMeals />} />
            <Route
              path="/menu/products/:name/:id/:type"
              element={<Product />}
            />
            <Route path="/best-seller" element={<Bestseller />} />
            {/* <Route path="about" element={<About />} />
  
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
  
          <Route path="concerts">
            <Route index element={<ConcertsHome />} />
            <Route path=":city" element={<City />} />
            <Route path="trending" element={<Trending />} />
          </Route> */}
          </Routes>
        </MealsProvider>
      </main>

      <footer className="home__footer">
        <div className="home__footer__copyright">
          © KIDDO, Inc. or its affiliates
        </div>
      </footer>
    </div>
  );
};

export default App;
