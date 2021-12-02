import styles from "../styles/Home.module.css";
import React, { useContext } from "react";
import { Context } from "../context";

export default function Home() {
  const { setCategory } = useContext(Context);
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <div className={styles.main}>
      <h1> Next.js News App</h1>

      <h3>Choose a category</h3>
      <div className={styles.cat_container}>
        {categories.map((cat, index) => {
          
          return (
            <button
              key={index}
              className={styles[cat]}
              onClick={() => {
                setCategory(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
