import React, { useState, useContext } from "react";
import FormRow from "../components/FormRow.tsx";
import { AppContext } from "../context/AppContext.tsx";
import ButtonComponent from "../components/ButtonComponent.tsx";
import {
  getCurrentUserData,
  updateUserName,
  updateUserPassword,
} from "../services/usersService.ts";
import NotificationActions from "../context/actions/notification-actions.ts";
import UsersActions from "../context/actions/users-actions.ts";

const Settings = () => {
  const { state } = useContext(AppContext);
  const { userData } = state;
  const [settingsName, setSettingsName] = useState(userData[0]?.name);
  const [settingsPassword, setSettingsPassword] = useState("");
  const [settingsConfirmPassword, setSettingsConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateName = async () => {
    if (settingsName) {
      setLoading(true);
      await updateUserName(userData[0].id, settingsName);
      let newUserData = (await getCurrentUserData()) as any;
      UsersActions.setUserData(newUserData);
      setLoading(false);
      NotificationActions.showNotification("Name updated!", "normal");
    } else
      NotificationActions.showNotification("Name cannot be empty", "warning");
  };

  const handleChangePassword = () => {
    console.log(settingsPassword, settingsConfirmPassword);
    if (settingsPassword.length >= 6 && settingsConfirmPassword.length >= 6) {
      if (settingsPassword === settingsConfirmPassword) {
        updateUserPassword(settingsConfirmPassword);
        setSettingsPassword("");
        setSettingsConfirmPassword("");
        NotificationActions.showNotification("Passwords updated!", "normal");
      } else
        NotificationActions.showNotification("Passwords do no match", "danger");
    } else
      NotificationActions.showNotification(
        "Password must be at least 6 characters long",
        "danger"
      );
  };

  return (
    <div className="w-full p-2 lg:p-4 flex flex-col overflow-y-scroll h-[calc(100vh-75px)] md:h-full gap-y-4 lg:max-w-[600px]">
      <h2 className="text-lg md:text-2xl ">Settings</h2>
      <FormRow labelText="Name">
        <input
          type={"text"}
          value={settingsName}
          onChangeFunction={(e) => {
            setSettingsName(e.target.value);
          }}
        />
      </FormRow>
      <ButtonComponent
        text="Update Name"
        type="primary"
        onClickFunction={handleUpdateName}
        loader={loading}
      />
      <FormRow labelText="New password">
        <input
          type={"password"}
          value={settingsPassword}
          onChangeFunction={(e) => {
            setSettingsPassword(e.target.value);
          }}
        />
      </FormRow>
      <FormRow labelText="Confirm password">
        <input
          type={"password"}
          value={settingsConfirmPassword}
          onChangeFunction={(e) => {
            setSettingsConfirmPassword(e.target.value);
          }}
        />
      </FormRow>
      <ButtonComponent
        text="Change password"
        type="primary"
        onClickFunction={handleChangePassword}
        loader={loading}
      />
    </div>
  );
};

export default Settings;
