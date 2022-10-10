import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, name, price, quantity, img, shipping } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>
            <small>
              {" text-orange"}
              <span>Price:${price}</span>
            </small>
          </p>
          <p>
            <p>
              <small>Shipping:${shipping}</small>
            </p>
            <small>Quantity:{quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveItem(id)} className="btn-delete">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrash}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
