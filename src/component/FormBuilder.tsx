import React from "react";
import { type FormFields, useFormStore } from "../store/useFormStore";
import FormField from "./FormField";

const FormBuilder = () => {
  const { formFields, updateField, removeField, resetForm, addField } =
    useFormStore();
  const [newField, setNewField] = React.useState<FormFields>({
    label: "",
    type: "text",
    value: "",
  });
  const handleAddField = ()=>{
    addField(newField)
    setNewField({ label: "", type: "text", value: "" })
  }
  const handleFieldChange =(e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>{
    const {name , value} = e.target
    setNewField((prev)=>( { ...prev , [name] : value}) )
  }
  const handleFieldUpdate = (index: number, updatedField: FormFields) => {
      updateField(index, updatedField)
  }
  const handleRemoveField = (index: number) => {
      removeField(index)
  }
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Form builder</h1>
      <div className="flex flex-col mb-6">
        <input
          type="text"
          name="label"
          placeholder="Field label"
          value={newField?.label}
          onChange={handleFieldChange}
          className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select name="type" value={newField?.type} onChange={handleFieldChange}>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="password">Password</option>
          <option value="textarea">Textarea</option>
          <option value="date">Date</option>
          <option value="file">File</option>
        </select>
        <div className="flex justify-between">
          <button type="button" onClick={handleAddField}>
            Add Field
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Reset Form
          </button>
        </div>
      </div>
      <form action="">
        {formFields.map((field, index) => (
          <FormField
            index={index}
            field={field}
            onUpdate={handleFieldUpdate}
            onRemove={handleRemoveField}
          />
        ))}
      </form>
    </div>
  );
};

export default FormBuilder;
