import customer1 from "../../assets/images/customer1.png";
import quotesLeft from "../../assets/icons/quotesLeft.svg";
import quotesRight from "../../assets/icons/quotesRight.svg";
import middleCustomer from "../../assets/images/middleCustomer.png";
import leftCustomer1 from "../../assets/images/leftCustomer1.png";
import leftCustomer2 from "../../assets/images/leftCustomer2.png";
import leftCustomer3 from "../../assets/images/leftCustomer3.png";
import rightCustomer1 from "../../assets/images/rightCustomer1.png";
import rightCustomer2 from "../../assets/images/rightCustomer2.png";
import rightCustomer3 from "../../assets/images/rightCustomer3.png";
import "./customerReview.css";


import Card from "../card/Card";
const CustomerReview = () => {
  return (
    <section className="customersReview">
      <h4>Our customers say</h4>
      <Card
        className="customerCard"
        image={customer1}
        title="Starla Virgoun"
        info="Financial Advisor"
      />

      <p className="reviewText">
        <div className="quotesLeft">
          <img src={quotesLeft} alt="quotes" />
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
        ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
        quam
        <div className="quotesRight">
          <img src={quotesRight} alt="quotes" />
        </div>
      </p>

      <div className="customersContainer">
        <div className="outerCustomers">
            <div className="leftCustomer3"><img src={leftCustomer3} alt="customer" /></div>
            <div className="rightCustomer3"><img src={rightCustomer3} alt="customer" /></div>
        </div>
        <div className="middleCustomers">
            <div className="leftCustomer2"><img src={leftCustomer2} alt="customer" /></div>
            <div className="rightCustomer2"><img src={rightCustomer2} alt="customer" /></div>
        </div>
        <div className="bottomCustomers">
            <div className="leftCustomer1"><img src={leftCustomer1} alt="customer" /></div>
            <div className="middleCustomer"><img src={middleCustomer} alt="customer" /></div>
            <div className="rightCustomer1"><img src={rightCustomer1} alt="customer" /></div>
        </div>
        <div className="greenCircle"></div>
        <div className="pingCircle"></div>
        <div className="orangeCircle"></div>
        <div className="purpleCircle"></div>
        <div className="lightOrangeCircle"></div>
      </div>
    </section>
  );
};
export default CustomerReview;