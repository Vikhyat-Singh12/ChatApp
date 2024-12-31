import React from 'react'

const Modal = () => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Soon Here, ProfilePic Will be Shown  :)</h3>
      </div>
    </dialog>
  );
}

export default Modal
