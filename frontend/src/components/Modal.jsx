import React from "react";

const Modal = ({ user}) => {
  return (
    <dialog
      id="my_modal_3"
      className="max-w-xl max-h-xl p-6 overflow-hidden rounded-3xl"
    >
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
        <div className="flex flex-col items-center justify-center">
          <img
            src={user?.image || user?.profilePic || "/avatar.png"}
            alt="Profile"
            className="size-7/12 rounded-3xl"
          />
          <div className="flex flex-col justify-start items-start">
            <h3 className="font-bold text-lg">Name: {user?.fullName}</h3>
            <p className="text-sm">
              <span className="font-semibold">Email: </span>
              {user?.email || "N/A"}
            </p>
          </div>
        </div>
    </dialog>
  );
};

export default Modal;
