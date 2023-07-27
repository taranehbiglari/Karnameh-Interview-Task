import React from'react';

const Modal = ({ isOpen, toggle, children }) => {
    return (
        <>
            {isOpen ? (
                <>
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={toggle}/>
                    <div className="absolute inset-0 mx-auto p-5 border w-2/4 h-1/2 top-20 shadow-lg rounded-md bg-white">{children}</div>
                </>
            ) : null}
        </>
    );
};

export default Modal;