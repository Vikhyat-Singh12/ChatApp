import React from "react";

const Modal = ({ selectedImage }) => {
  return (
    <dialog id="my_modal_2" className="rounded-3xl overflow-hidden p-4">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="w-full h-full max-w-4xl max-h-[100vh] flex items-center justify-center">
          <img
            src={selectedImage?.image}
            alt="Image"
            className="w-full h-full object-contain m-4 rounded-2xl"
          />
        </div>
    </dialog>
  );
};

export default Modal;
