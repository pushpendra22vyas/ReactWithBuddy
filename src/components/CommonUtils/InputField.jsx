import React, { useEffect } from "react";
import {
  AiFillEdit,
  AiFillMail,
  AiOutlineSolution,
  AiFillContacts,
} from "react-icons/ai";

function InputField({ field, onChangeHandle }) {

  const getIconForField = (field) => {
    switch (field) {
      case "name":
        return <AiFillEdit />;
      case "email":
        return <AiFillMail />;
      case "title":
        return <AiOutlineSolution />;
      case "contact":
        return <AiFillContacts />;
      default:
        return <AiFillEditDefault />;
    }
  };

  const getPlacehodler = (field) => {
    switch (field) {
      case "name":
        return "WHAT IS YOUR GOOD NAME?";
      case "email":
        return "ENTER YOUR EMAIL ADDRESS";
      case "title":
        return "WHAT IS YOUR ROLE?";
      case "contact":
        return "HOW CAN WE REACH AT YOU?";
      default:
        return `ENTER YOUR ${field}`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangeHandle(name, value);
  }
  return (
    <>
      <div className="p-2 text-cyan-400 hidden md:block">
        {getIconForField(field.field)}
      </div>
      <input
        type="text"
        name= {field.field}
        placeholder={ getPlacehodler(field.field) }
        onChange={ handleChange }
        className="w-full block bg-black font-bold text-white text-sm h-[100%] border-cyan-400 placeholder-slate-400
                        focus:outline-none md:border-l-[3px] pl-2"
        required={field.require}
      />
    </>
  );
}

export default InputField;
