import "./footer.css";
import logoDarkBG from "../../assets/images/logoDarkBG.png";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import List from "../list/List";

const Footer = () => {
  const pageListItems = [
    { content: "Home", path: "/" },
    { content: "Menu", path: "/menu" },
    { content: "Order online", path: "/orderonline" },
    { content: "Catering", path: "/catering" },
    { content: "Reservation", path: "/reservation" },
  ];
  const infoListItems = [
    { content: "About us", path: "/aboutus" },
    { content: "Testimonial", path: "/testimonial" },
    { content: "Event", path: "/event" },
  ];
  const contactListItems = [
    {content: "3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat"},
    {content: "delizioso@gmail.com"},
    { content: "+123 4567 8901"},
  ];
  return (
    <footer>
      <div className="footerTop">
        <div className="socialMedia">
          <div className="logo">
            <img src={logoDarkBG} alt="logo" />
          </div>
          <p className="footerInfo">
            Viverra gravida morbi egestas facilisis tortor netus non duis
            tempor.
          </p>
          <div className="socialMediaContainer">
            <div className="twitter">
              <img src={twitter} alt="twitter" />
            </div>
            <div className="instagram">
              <img src={instagram} alt="instagram" />
            </div>
            <div className="facebook">
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
        <div className="page">
          <span>Page</span>
          <List className="footerListItems" listItems={pageListItems} url="#" />
        </div>
        <div className="information">
          <span>Information</span>
          <List className="footerListItems" listItems={infoListItems} url="#" />
        </div>
        <div className="getInTouch">
          <span>Get in touch</span>
          <List
            className="footerListItems"
            listItems={contactListItems}
            url="#"
          />
        </div>
      </div>
      <div className="footerBottom">
        <p className="copyright">Copyright © 2024 Delizioso</p>
      </div>
    </footer>
  );
};

export default Footer;
