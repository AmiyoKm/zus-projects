import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import useNoteStore from "../store/useNotesStore";
import { AiOutlinePlus } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Notes = () => {
  const {
    editorContent,

    noteColor,
    currentNoteIndex,
    setEditorContent,
    setNoteColor,
    addOrUpdateNote,
  } = useNoteStore();
  return (
    <div className="h-screen flex ">
      <Sidebar />
      <div className="w-2/3 p-8">
        <ReactQuill
          value={editorContent}
          onChange={setEditorContent}
          placeholder="Write your note here"
          theme="snow"
          className="h-96 bg-white mb-[2rem]"
        />

        <div className="flex ml-[1rem] items-center mt-4 space-x-4">
          <input
            className="w-10 h-10 p-1 bounded-full"
            type="color"
            value={noteColor}
            onChange={(e) => setNoteColor(e.target.value)}
          />
          <p>Choose a note Color</p>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={addOrUpdateNote}
        >
          <AiOutlinePlus className="mr-2" />
          {currentNoteIndex ? "Update Note" : "Add Note"}
        </button>
      </div>
    </div>
  );
};

export default Notes;
