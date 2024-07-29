import React, { useContext } from 'react';
import { Context } from "../store/appContext";

const Modal = ({ show }) => {
    const { actions, store } = useContext(Context);

    const onClose = () => {
        actions.setShowModal(false);
    };

    const onDelete = () => {
        actions.deleteContact(store.selectedContactId);
        actions.setShowModal(false);
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-5">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                    </div>
                    <div className="modal-body">
                        <p>If you delete this contact, it will be permanently deleted!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;