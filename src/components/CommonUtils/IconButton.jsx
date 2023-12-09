import React from "react";
import { GiPowerButton } from "react-icons/gi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useCrud } from "../../contexts";

function IconButton({ btnColor, typeOfBtn, userId, handleClick='' }) {
  const { updateUser, deleteUser } = useCrud();
  const btnType = () => {
    switch (typeOfBtn) {
      case "edit":
        return <FaEdit />;
      case "delete":
        return <RiDeleteBin2Fill />;
      default:
        return <GiPowerButton />;
    }
  };

  const handleOnClick = () => {
    if (typeOfBtn === "delete") {
      deleteUser(userId);
    } else if (typeOfBtn === "edit") {
      handleClick(userId)
      updateUser(userId);
    }
  };
  return (
    <button className={`${btnColor} cursor-pointer`} onClick={handleOnClick}>
      {btnType()}
    </button>
  );
}

export default IconButton;
