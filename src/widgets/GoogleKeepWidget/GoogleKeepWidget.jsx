import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // using v4 For generating unique IDs

const GoogleKeepWidget = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [noteColor, setNoteColor] = useState("#ffffff");
  const [message, setMessage] = useState("");
  const [messageTextColor, setMessageTextColor] = useState("text-black");

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { id: uuidv4(), text: newNote, color: noteColor }]);
      setNewNote("");
      setNoteColor("#ffffff"); 
      setMessage("Note added successfully!");
      setMessageTextColor(
        noteColor === "#ffffff" ? "text-black" : "text-white"
      );
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setMessage("Note deleted successfully!");
    setMessageTextColor("text-white"); // Default color for messages
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="bg-gradient-to-r transition-transform transform hover:scale-105 duration-300 from-blue-900 via-blue-700 to-blue-600 shadow-lg rounded-2xl p-4 m-4 text-center flex flex-col items-center w-70 h-96">
      <h2 className="text-xl font-bold mb-2 text-white italic">
        Google Keep Widget
      </h2>
      <div className="w-full mb-2">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Type your note here..."
          className="w-full min-h-[4rem] max-h-24 p-2 mb-2 rounded-lg border border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition duration-300 ease-in-out transform hover:scale-105"
          rows="1"
        />
        <input
          type="color"
          value={noteColor}
          onChange={(e) => setNoteColor(e.target.value)}
          className="mb-2 border border-gray-300 rounded"
        />
        <button
          onClick={addNote}
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          Add Note
        </button>
      </div>
      {message && (
        <div className={`text-sm font-semibold mb-2 ${messageTextColor}`}>
          {message}
        </div>
      )}
      <div className="w-full flex flex-wrap gap-2 overflow-y-auto max-h-[calc(100%-10rem)]">
        {" "}
       
        {notes.map((note) => (
          <div
            key={note.id}
            className="relative w-48 h-auto p-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
            style={{ backgroundColor: note.color }}
          >
            <button
              onClick={() => deleteNote(note.id)}
              className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 text-xs hover:bg-red-700 transition-colors"
            >
              X
            </button>
            <p
              className={`text-${
                note.color === "#ffffff" ? "black" : "white"
              } italic`}
            >
              {note.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleKeepWidget;
