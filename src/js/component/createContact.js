import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CreateContact = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({ name: '', email: '', phone: '', address: '' });

  useEffect(() => {
    if (id && store.contacts.length) {
      const contactToEdit = store.contacts.find(contact => contact.id === parseInt(id));
      if (contactToEdit) setContact(contactToEdit);
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (id) {
      actions.editContact(id, contact);
    } else {
      actions.createContact(contact);
    }
    navigate("/");
  };

  return (
    <div className="container border border-secondary rounded-5 pb-5 bg-body-tertiary" style={{ maxWidth: "600px" }}>
      <h1 className="text-center mt-5">{id ? "Edit Contact" : "Add a new contact"}</h1>
      <form>
        {["name", "email", "phone", "address"].map((field) => (
          <div className="form-group" key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              value={contact[field]}
              onChange={handleChange}
              name={field}
              type="text"
              className="form-control"
              placeholder={`Enter ${field}`}
            />
          </div>
        ))}
        <button type="button" className="btn btn-primary form-control mt-4" onClick={handleSave}>
          {id ? "Save Changes" : "Save"}
        </button>
        <Link className="mt-3 w-100 text-center" to="/">
          <i className="fa-solid fa-backward px-2 mt-4"></i>back to contacts
        </Link>
      </form>
    </div>
  );
};