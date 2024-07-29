import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "./modal";

export const ContactCard = ({ contact }) => {
  const { actions, store } = useContext(Context);

  const handleDelete = () => {
    actions.setSelectedContactId(contact.id);
    actions.setShowModal(true);
  };

  return (
    <div className="container border border-secondary mb-4 rounded-5 bg-body-tertiary" style={{ padding: "25px", maxWidth: "600px" }}  >
      <div className="row align-items-center">
        <div className="col-auto">
          <img src="https://res.cloudinary.com/dyvut6idr/image/upload/v1722201716/portrait-1332624_1280_tmanaj.jpg" alt="Logo" className="img-fluid rounded-pill" style={{ maxWidth: "100px", height: "auto" }} />
        </div>
        <div className="col">
          <li className="list-group-item">
            <div className="d-flex justify-content-between p-0">
              <div className="mx-auto">
                <label className="name lead text-body-emphasis">{contact.name}</label>
                <br />
                <i className="fas fa-map-marker-alt mr-3 mt-1 me-2"></i>
                <span className="text-body-emphasis small">{contact.address}</span>
                <br />
                <span className="fa fa-phone fa-fw mr-3 mt-1 me-2" data-toggle="tooltip" title="" data-original-title=""></span>
                <span className="text-body-emphasis small">{contact.phone}</span>
                <br />
                <span className="fa fa-envelope fa-fw mr-3 mt-1 me-2" data-toggle="tooltip" data-original-title="" title=""></span>
                <span className="text-body-emphasis small text-truncate">{contact.email}</span>
              </div>
              <div className="ml-auto">
                <Link to={`edit-contact/${contact.id}`} className="btn"><i className="fas fa-pencil-alt mr-3"></i></Link>
                <button className="btn" onClick={handleDelete}><i className="fas fa-trash-alt"></i></button>
                <Modal show={store.showModal} />
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>

  );
}