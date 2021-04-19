import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadNewsThunk } from "../../store/newsReduser/newsActions";

const News = () => {
  const { news, loading } = useSelector(({ news }) => news);
  const dispatch = useDispatch();
  useEffect(() => {
    if (news.length < 1) dispatch(loadNewsThunk);
  }, []);

  return (
    <div className="container">
      {loading
        ? "Loading..."
        : news.map((el) => {
            return (
              <div key={el.id} style={{ marginTop: "25px" }}>
                <h3>{el.title}</h3>
                <p>{el.body}</p>
                <hr />
              </div>
            );
          })}
    </div>
  );
};
export default News;
