import React from 'react';

const ConfirmationModal = ({ title, message, successAction, modalData, closeModal, successButtonName }) => {
    return (
        <div>
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmationModal" className="btn btn-sm btn-secondary">{successButtonName}</label>
                        <label onClick={closeModal} className="btn btn-sm btn-error">Cancel</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ConfirmationModal;