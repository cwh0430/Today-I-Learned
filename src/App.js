import React, { useState, useEffect } from "react";
import "./styles.css";
import supabase from "./supabase";
import Header from "./Header";
import NewFactForm from "./NewFactForm";
import CategoryList from "./CategoryList";
import FactList from "./FactList";
import { CATEGORIES } from "./data";
import Loader from "./Loader";

function App() {
  const [showForm, setshowForm] = useState(false);
  const [facts, setfacts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [currentCategory, setcurrentCategory] = useState("all");

  useEffect(
    function () {
      setisLoading(true);
      async function getFacts() {
        let query = supabase.from("facts").select("*");

        if (currentCategory !== "all")
          query = query.eq("category", currentCategory);

        let { data: facts, error } = await query
          .order("votesInteresting", {
            ascending: false,
          })
          .limit(1000);

        setisLoading(false);
        if (!error) setfacts(facts);
      }

      getFacts();
    },
    [currentCategory]
  );

  return (
    <>
      <Header showForm={showForm} setshowForm={setshowForm} />
      {showForm ? (
        <NewFactForm setfacts={setfacts} setshowForm={setshowForm} />
      ) : null}

      <main>
        <CategoryList setcurrentCategory={setcurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} setfacts={setfacts} />
        )}
      </main>
    </>
  );
}

export default App;
