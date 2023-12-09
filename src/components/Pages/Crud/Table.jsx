import React from "react";
import { useCrud } from "../../../contexts";
import { AiFillDelete } from "react-icons/ai";
import { MdEditDocument } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit, FaCheck  } from "react-icons/fa";

function Table() {
  const [editableUserId, setEditableUserId] = React.useState(null);
  const { users, updateUser, deleteUser } = useCrud();
  const [editedData, setEditedData] = React.useState(users)

  const handleOnDelete = (id) => {
    deleteUser(id);
  };

  const handleOnEdit = (id) => {
    console.log(editedData)
    if (id == editableUserId) {
        // When Edit button is Clicked for the Save the data
        setEditableUserId(null)
    } else {
        setEditableUserId(id);
        // When Edit button Clicked for Edit
    }
  };

  const handleOnChange = (e,user,fieldName) => setEditedData((prevData) => {
    prevData.map((item) => {
        if (item.id == user.id) {
            item = {...item, [fieldName]:e.target.value}
        }
    })
  })
  return (
    <div className="flex justify-center mt-4">
      <table className="border-separate border-spacing-2 border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">S.No.</th>
            <th className="border border-slate-300 p-2">Name</th>
            <th className="border border-slate-300 p-2">Email</th>
            <th className="border border-slate-300 p-2">Role</th>
            <th className="border border-slate-300 p-2">Contact</th>
            <th className="border border-slate-300 p-2">
              <MdEditDocument />
            </th>
            <th className="border border-slate-300 p-2">
              <AiFillDelete />
            </th>
          </tr>
        </thead>
        <tbody>
          {editedData.map((user, index) => (
            <tr key={user.id}>
              <td className="border border-slate-300 p-2 text-center">
                {index + 1}.
              </td>
              <td className="border border-slate-300 p-2">
                <input
                  type="text"
                  className={`outline-none ${editableUserId == user.id ? "bg-white" : "bg-[#ccefe8]" }`}
                  name="name"
                  value={user.name}
                  onChange={(e) =>handleOnChange(e,user,'name')}
                  readOnly={!editableUserId || editableUserId !== user.id}
                />
              </td>
              <td className="border border-slate-300 p-2">
                <input
                  type="text"
                  className={`outline-none ${editableUserId == user.id ? "bg-white" : "bg-[#ccefe8]" }`}
                  value={user.email}
                  onChange={(e) => updateUser(user.id, { ...user, email: e.target.value })}
                  name="email"
                  readOnly={!editableUserId || editableUserId !== user.id}
                />
              </td>
              <td className="border border-slate-300 p-2">
                <input
                  type="text"
                  className={`outline-none ${editableUserId == user.id ? "bg-white" : "bg-[#ccefe8]" }`}
                  value={user.title}
                  onChange={(e) => updateUser(user.id, { ...user, title: e.target.value })}
                  name="title"
                  readOnly={!editableUserId || editableUserId !== user.id}
                />
              </td>
              <td className="border border-slate-300 p-2">
                <input
                  type="text"
                  className={`outline-none ${editableUserId == user.id ? "bg-white" : "bg-[#ccefe8]" }`}
                  value={user.contact}
                  name="contact"
                  onChange={(e) => updateUser(user.id, { ...user, contact: e.target.value })}
                  readOnly={!editableUserId || editableUserId !== user.id}
                />
              </td>
              <td className="border border-slate-300 p-2">
                <button
                  className="text-green-700 cursor-pointer"
                  onClick={() => handleOnEdit(user.id )}
                >
                  {editableUserId == user.id ? <FaCheck  /> : <FaEdit />}
                </button>
              </td>
              <td className="border border-slate-300 p-2">
                <button
                  className="text-red-700 cursor-pointer"
                  onClick={() => handleOnDelete(user.id)}
                >
                  <RiDeleteBin2Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
