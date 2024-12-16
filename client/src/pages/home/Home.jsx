/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
import Button from "../../components/button/Button";
import pasta from "../../assets/images/pasta.png";
import salad from "../../assets/images/salad.png";
import table from "../../assets/images/table.png";
import tableUp from "../../assets/images/tableUp.png";
import tableDown from "../../assets/images/tableDown.png";
import Card from "../../components/card/Card";
import "./home.css";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/product";
import { getAllCategories } from "../../api/category";
import { getAllChefs } from "../../api/chef";
import CustomerReview from "../../components/customerReview/CustomerReview";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories(setCategories);
  }, []);

  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    getAllChefs(setChefs);
  }, []);

  const [mealCategory, setMealCategory] = useState("All categories");
  const handleCategoryChange = (e) => {
    setMealCategory(e.target.textContent);
  };
  const matchesFilter = (product, mealCategory) => {
    return (
      mealCategory === "All categories" ||
      product?.attributes?.category.toLowerCase() === mealCategory.toLowerCase()
    );
  };

  const filteredProducts = products.filter((product) => {
    return matchesFilter(product, mealCategory);
  });

  return (
    <>
      <section className="italian_cuisine">
        <div className="reservation_info">
          <Button className="restaurant" content="Restaurant" />
          <h2 className="cuisine">Italian Cuisine</h2>
          <p className="cuisineText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            senectus dictum arcu sit tristique donec eget.
          </p>
          <div className="order_buttons">
            <Link to="/menu">
              <Button className="order" content="Order now" />
            </Link>
            <Button className="reservation" content="Reservation" />
          </div>
        </div>
        <div className="pasta">
          <img src={pasta} alt="pasta" />
        </div>
      </section>
      <section className="welcomeSection">
        <div className="salad">
          <img src={salad} alt="salad" />
        </div>
        <div className="welcomePost">
          <h2 className="welcome">
            Welcome to <span>Delizioso</span>
          </h2>
          <p className="welcomeText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>
          <Link to="/menu">
            <Button className="seeMenu" content="See our menu" />
          </Link>
        </div>
      </section>
      <section className="popularMenu">
        <h3>Our popular menu</h3>
        <div className="categoryButtons">
          <Button
            className="allCategory"
            content="All categories"
            value="All categories"
            onClick={handleCategoryChange}
            isActive={
              mealCategory.toLowerCase() == "All categories".toLowerCase()
            }
          />
          {categories.map((category) => (
            <Button
              key={category.id}
              className="eachCategory"
              content={category.attributes.title}
              value={category.attributes.title}
              onClick={handleCategoryChange}
              isActive={
                category.attributes.title.toLowerCase() ==
                mealCategory.toLowerCase()
              }
            />
          ))}
        </div>
        <div className="menuCardContainer">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="menuCard"
              image={
                import.meta.env.VITE_BASE_URL +
                product.attributes.coverImage.data.attributes.url
              }
              title={product.attributes.title}
              info={product.attributes.description}
              price={product.attributes.price}
              showRating={true}
              showPrice={true}
              showButton={true}
            />
          ))}
        </div>
      </section>
      <section className="reserveSection">
        <div className="outerCircle">
          <div className="middleCircle">
            <div className="tableUp">
              <img src={tableUp} alt="table uo" />
            </div>
            <div className="tableImage">
              <img src={table} alt="table" />
            </div>
            <div className="tableDown">
              <img src={tableDown} alt="table down" />
            </div>
          </div>
        </div>
        <div className="reserveInfo">
          <h3>
            Let's reserve <span>a table</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>
          <Button className="reserveButton" content="Reservation" />
        </div>
      </section>
      <section className="greatChefs">
        <h3>Our Greatest Chefs!</h3>
        <div className="chefsContainer">
          {chefs.map((chef) => (
            <Card
              key={chef.id}
              className="chefCard"
              image={
                import.meta.env.VITE_BASE_URL +
                chef.attributes.image.data.attributes.url
              }
              title={chef.attributes.name}
              info={chef.attributes.title}
            />
          ))}
        </div>
        <Button className="viewAllButton" content="View all" />
      </section>
      <CustomerReview />
      <section className="businessHours">
        <h4>we are open from</h4>
        <span className="days">Monday-Sunday</span>
        <p>Lunch : Mon-Sun : 11:00am-02:00pm</p>
        <p>Dinner : sunday : 04:00pm-08:00pm</p>
        <p>04:00pm-09:00pm</p>
        <div className="order_buttons">
          <Link to="/menu">
            <Button className="order" content="Order now" />
          </Link>
          <Button className="reservation" content="Reservation" />
        </div>
      </section>
    </>
  );
};

export default Home;
