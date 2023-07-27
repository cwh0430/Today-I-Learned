import { CATEGORIES } from "./data";
import React, { useState, useEffect } from "react";
import supabase from "./supabase";

function isValidUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ setfacts, setshowForm }) {
  const [text, settext] = useState("");
  const [source, setsource] = useState("");
  const [category, setcategory] = useState("");
  const [isUploading, setisUploading] = useState(false);
  const textLength = text.length;

  async function addData(e) {
    e.preventDefault();

    if (
      text.trim() &&
      isValidUrl(source.trim()) &&
      category &&
      textLength <= 200
    ) {
      setisUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();

      setisUploading(false);

      if (!error) setfacts((facts) => [newFact[0], ...facts]);

      settext("");
      setsource("");
      setcategory("");

      setshowForm(false);
    }
  }

  return (
    <form className="create-fact" onSubmit={addData}>
      <input
        type="text"
        placeholder="Share Your Facts..."
        onChange={(e) => settext(e.target.value)}
        value={text}
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="Place Your Source..."
        onChange={(e) => setsource(e.target.value)}
        value={source}
        disabled={isUploading}
      />
      <select
        onChange={(e) => setcategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Select a category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}

export default NewFactForm;

// const newFact = {
//   id: 4,
//   text,
//   source,
//   category,
//   votesInteresting: 0,
//   votesMindblowing: 0,
//   votesFalse: 0,
//   createdIn: new Date().getFullYear(),
// };
