import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.tsx";

function Notification() {
  const { state } = useContext(AppContext);
  const { showNotification } = state;
  const { notificationMessage } = state;
  const { notificationType } = state;
  const notificationClasses = {
      'normal': 'bg-green-500',
      'danger': 'bg-red-500 text-white',
      'warning': 'bg-yellow-500',
  }
  
  return (
    <section
      className={`duration-200 rounded-lg py-1 px-4 fixed z-30 left-[50%] translate-x-[-50%] text-center w-fit
        ${notificationClasses[notificationType]}
        ${showNotification?'top-[20px]':'translate-y-[-100%]'}
        `}
    >
      {notificationMessage}
    </section>
  );
}

export default Notification;
