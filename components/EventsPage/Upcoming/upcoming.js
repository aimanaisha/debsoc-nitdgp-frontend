import styles from "./upcoming.module.scss";
import { useState, useEffect, useCallback } from "react";

export default function UpcomingEvents() {
  const posterurl = process.env.NEXT_PUBLIC_IMG_URL;
  const url = process.env.NEXT_PUBLIC_EVENT_URL;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const registerHandler = () => {
    window.location.href = "/takedebait";
  };

  const getData = useCallback(async () => {
    setLoading(true);
    const response = await fetch(url);
    const upComing = await response.json();
    const events = upComing.upcoming;
    setData(events);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return (
    <>
      <div className={styles.upcoming}>
        {loading && <span className={styles.loaderSpinner} />}
        {data.map((pass) => (
          <div className={styles.col1} key={pass.id}>
            <div className={styles.cols2}>
              <img src={posterurl + pass.poster} alt="" key={pass.id} />
              <div className={styles.head} key={pass.event_name}>
                {pass.event_name}
              </div>
              <div className={styles.content} key={pass.event_description}>
                {pass.event_description}
              </div>
            </div>
            <div>
              <button className={styles.btn} onClick={registerHandler}>REGISTER NOW!</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
