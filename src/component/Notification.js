import React from 'react';

const Notification = ({ type, message, onClose }) => {
    const getStyles = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500 text-white';
            case 'error':
                return 'bg-red-500 text-white';
            case 'info':
                return 'bg-blue-500 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    };

    return (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${getStyles()}`}>
            <p>{message}</p>
            <button
                onClick={onClose}
                className="text-white ml-4 underline"
            >
                Close
            </button>
        </div>
    );
};

export default Notification;
