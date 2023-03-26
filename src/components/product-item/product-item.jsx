import "./product-item.css";

const ProductItem = (props) => {
  
  return (
    <div className="dashboard-item" key={props.id}>
      <p>
        <img src={props.image} alt="#" />
      </p>
      <h3 className="dashboard-item-title">{props.title}</h3>
      <p className="dashboard-item-description">{props.description}</p>
      <p className="dashboard-item-price">Price: ${props.price}</p>
      <div className="dashboard-item-buttons">
        <button className="dashboard-item-edit" onClick={()=>props.onEdit(props.id)}>
          Edit
        </button>
        <button className="dashboard-item-delete" onClick={()=>props.onDelete(props.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
