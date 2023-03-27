import "./product-item.css";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const handleEdit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    props.onEdit(props.id);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    event.preventDefault();

    props.onDelete(props.id);
  };

  return (
    <Link key={props.id} to={`/cars/${props.id}`} className="dashboard-link">
      <div className="dashboard-item">
        <p>
          <img src={props.image} alt="#" />
        </p>
        <h3 className="dashboard-item-title">{props.title}</h3>
        <p className="dashboard-item-description">{props.description}</p>
        <p className="dashboard-item-price">Price: ${props.price}</p>
        <div className="dashboard-item-buttons">
          <button
            className="dashboard-item-edit"
            onClick={(event) => handleEdit(event)}
          >
            Edit
          </button>
          <button
            className="dashboard-item-delete"
            onClick={(event) => handleDelete(event)}
          >
            Delete
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
