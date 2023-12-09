import React, { useState, useRef } from "react";
import { useCrud } from "../../../contexts";
import InputField from "../../CommonUtils/InputField"
function Registration() {
  const intialFormData = {
    name: '',
    email: '',
    title: '',
    contact: ''
  }

  const inputFields = [
    { id: 1, field: "name", require:true },
    { id: 2, field: "email", require:true },
    { id: 3, field: "title", require:false },
    { id: 4, field: "contact", require:false }
  ];

  const [formData, setFormData] = useState(intialFormData);
  const formRef = useRef(null);

  // Context API

  const { addUser } = useCrud();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(formData);
    setFormData(intialFormData)
    formRef.current.reset();

  }

  const handleInputChanges = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value
    }));

  };

  return (
    <>
      <div className="w-[90%] text-center font-bold md:text-3xl mx-auto h-15 py-5 my-3">
        <h1 className="text-black">
          Please fill the needful details in the below form
        </h1>
      </div>
      <div className="md:w-[60%] w-[80%] bg-black mx-auto h-auto p-4 m-2 shadow-md">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
          {inputFields.map((field) => (
            <div
              key={field.id}
              className="flex items-center text-2xl md:w-[70%] w-[90%] border-cyan-400 border-[3px] rounded-md h-12 my-2"
            >
             <InputField field={field} onChangeHandle={handleInputChanges}/>
            </div>
          ))}

          <button type="submit" className="w-[100px] p-2 h-10 bg-cyan-400 text-black hover:bg-cyan-200 font-bold rounded-lg cursor-pointer mt-2">SUBMIT</button>
        </form>
      </div>
    </>
  );
}

export default Registration;
