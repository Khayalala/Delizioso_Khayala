import "./menu.css";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/product";
import { getAllCategories } from "../../api/category";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";

function Menu() {
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

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [mealCategory, setMealCategory] = useState("All categories");
  const handleCategoryChange = (e) => {
    setMealCategory(e.target.textContent);
  };

  const [orderList, setOrderList] = useState([]);

  const addToOrderList = (product) => {
    setOrderList((prevList) => {
      const existingItem = prevList.find((item) => item.id === product.id);
      if (existingItem) {
        return prevList.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevList, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (itemId) => {
    setOrderList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setOrderList(
      (prevList) =>
        prevList
          .map((item) =>
            item.id === itemId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.id !== itemId || item.quantity > 1) 
    );
  };

  const matchesFilter = (product, mealCategory) => {
    return (
      mealCategory === "All categories" ||
      product?.attributes?.category.toLowerCase() === mealCategory.toLowerCase()
    );
  };

  const matchesSearchTerm = (product, searchTerm) => {
    return (
      product?.attributes?.title &&
      product.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredProducts = products.filter((product) => {
    return (
      matchesSearchTerm(product, searchTerm) &&
      matchesFilter(product, mealCategory)
    );
  });
  const totalPrice = orderList.reduce((total, item) => {
    return total + item.attributes.price * item.quantity;
  }, 0);

  return (
    <section className="popularMenuContainer">
      <div className="popularMenu">
        <h3>Our popular menu</h3>
        <div className="categoryButtons">
          <Button
            className="allCategory"
            content="All categories"
            value="All categories"
            onClick={handleCategoryChange}
            isActive={
              mealCategory.toLowerCase() === "All categories".toLowerCase()
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
                category.attributes.title.toLowerCase() ===
                mealCategory.toLowerCase()
              }
            />
          ))}
        </div>
        <input
          className="searchInput"
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
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
              onOrder={() => addToOrderList(product)}
            />
          ))}
        </div>
      </div>

      <div className="orderListContainer">
        <h3>Order List</h3>
        <div className="orderList">
          {orderList.map((item) => (
            <div key={item.id} className="orderListItem">
              <span>
                {item.attributes.title} x {item.quantity}
              </span>
              <span>${(item.attributes.price * item.quantity).toFixed(2)}</span>
              <div className="quantityButtons">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="totalPrice">
          <strong>Total: ${totalPrice.toFixed(2)}</strong>
        </div>

        <div className="voucherSection">
          <input
            type="text"
            className="voucherInput"
            placeholder="Voucher Code"
          />
          <button className="voucherButton">Apply</button>
        </div>

        <button className="checkoutButton">Checkout</button>
      </div>
    </section>
  );
}

export default Menu;
