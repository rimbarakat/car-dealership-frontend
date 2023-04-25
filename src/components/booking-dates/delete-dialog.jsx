import React from "react";
import "./delete-dialog.css";

function DeleteDialog({ open, onClose, onDelete }) {
  if (!open) {
    return null;
  }

  return (
    <div className="delete-dialog-backdrop">
      <div className="delete-dialog">
        <h2>Delete</h2>
        <p>Are you sure you want to delete this item?</p>
        <div className="delete-dialog-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteDialog;
