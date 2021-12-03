import { useRouter } from "next/dist/client/router";
import { useEffect, useContext } from "react";
import { Context } from "../../context";
import { Actions } from "../../context/Actions";
import styles from "../../styles/Feed.module.css";

const Feed = ({ pageNumber, articles, cat }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: Actions.NOTIFY, payload: { loading: true } });
  }, [pageNumber, cat]);

  return (
    <>
      <div className={styles.main}>
        {articles.map((article, index) => {
          return (
            <div key={index} className={styles.post}>
              <h1 onClick={() => (window.location.href = article.url)}>
                {article.title}
              </h1>
              <p>{article.description}</p>
              {!!article.urlToImage && (
                <img
                  src={article.urlToImage}
                  onLoad={() =>
                    dispatch({
                      type: Actions.NOTIFY,
                      payload: { loading: false },
                    })
                  }
                />
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              dispatch({
                type: Actions.NOTIFY,
                payload: { loading: true },
              });
              router
                .push(`/feed/${pageNumber - 1}?cat=${cat}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 1 ? styles.disabled : styles.active}
        >
          Previous Page
        </div>
        <div>#{pageNumber}</div>
        <div
          onClick={() => {
            if (pageNumber < 5) {
              dispatch({
                type: Actions.NOTIFY,
                payload: { loading: true },
              });
              router
                .push(`/feed/${pageNumber + 1}?cat=${cat}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 5 ? styles.disabled : styles.active}
        >
          Next Page
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.page;
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  let cat = pageContext.query.cat;
  if (!categories.includes(cat) || cat === undefined) cat = "all";
  const newsURL =
    cat === "all"
      ? `https://newsapi.org/v2/top-headlines?language=en&pageSize=5&page=${pageNumber}`
      : `https://newsapi.org/v2/top-headlines?language=en&category=${cat}&pageSize=5&page=${pageNumber}`;
  const apiResponse = await fetch(newsURL, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
    },
  }).then((res) => res.json());

  const { articles } = apiResponse;

  return {
    props: {
      pageNumber: Number.parseInt(pageNumber),
      articles: articles,
      cat,
    },
  };
};

export default Feed;
