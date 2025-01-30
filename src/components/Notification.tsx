import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.tsx";

function Notification() {
  const { state } = useContext(AppContext);
  const { showNotification } = state;
  const { notificationMessage } = state;
  const { notificationType } = state;
  return (
    <section
      className={`duration-200 rounded-lg py-1 px-4 fixed z-30 left-[50%] translate-x-[-50%] text-center w-fit
        ${notificationType=='normal'?'bg-green-500':''}
        ${notificationType=='danger'?'bg-red-500 text-white':''}
        ${notificationType=='warning'?'bg-yellow-500':''}
        ${showNotification?'top-[20px]':'translate-y-[-100%]'}
        `}
    >
      {notificationMessage}
    </section>
  );
}

export default Notification;
