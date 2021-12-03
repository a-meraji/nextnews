import styles from "../styles/Home.module.css";
import { useRouter } from "next/dist/client/router";
export default function Home() {
  const router = useRouter();
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
              onClick={()=>router.push(`/feed/1?cat=${cat}`)}           
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
