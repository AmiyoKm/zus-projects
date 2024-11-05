import React from 'react'
import { FormFields } from '../store/useFormStore'


interface FormFieldProps {
    field: FormFields
    index: number
    onUpdate : ( index : number , updatedField : FormFields ) => void
    onRemove : (index : number) => void
}
const FormField  : React.FC<FormFieldProps>= ({ field , index ,onUpdate , onRemove}) => {
    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>{
      onUpdate( index , {...field , value : e.target.value})
    }
  if (field.type === "textarea") {
    return (
      <div>
        <label>
          {field.label}
          <textarea value={field.value} onChange={handleChange} />
        </label>
        <button type="button" onClick={() => onRemove(index)}>
          Remove
        </button>
      </div>
    );
  }
  if(field.type === 'file'){
    return <div>
      <label htmlFor="">{field.label}
      <input type='file' onChange={(e) => onUpdate(index , { ...field ,value : e.target.files ? Array.from(e.target.files).map((file)=> file.name ).join( ', ') : '' })} />
      </label>
      <button type="button" onClick={() => onRemove(index)}>
          Remove
        </button>
    </div>
  }

  return <div>
    <label htmlFor="">
      {field.label}

      <input type={field.type}   value={field.value} onChange={handleChange}/>
    </label>
     <button type="button" onClick={() => onRemove(index)}>
        Remove
      </button>
  </div>
}

export default FormField