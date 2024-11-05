import { create } from "zustand";

export type FormFields = {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
  value: string;
}
interface StoreState {
  formFields: FormFields[];
  addField: (field: FormFields) => void;
  removeField: (index: number) => void;
  updateField: (index: number, updatedField: FormFields) => void;
  resetForm: () => void;
}
export const useFormStore = create<StoreState>((set) => ({
  formFields: [],
  addField: (field) =>
    set((state) => ({
      formFields: [...state.formFields, field],
    })),
  removeField: (index) =>
    set((state) => ({
      formFields: state.formFields.filter((_, i) => i !== index),
    })),

  updateField: (index, updatedField) =>
    set((state) => ({
      formFields: state.formFields.map((field, i) =>
        index === i ? updatedField : field
      ),
    })),

  resetForm: () => set({ formFields: [] }),
}));
