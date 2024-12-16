/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import "./list.css";

const List = ({className, listItems}) => {
  return (
    <ul className={className}>
      {
        listItems.map((listItem, index)=>{
            return(
                <li key={index}><Link to={listItem.path}>{listItem.content}</Link></li>
            )
        })
      }
    </ul>
  );
};

export default List; 
