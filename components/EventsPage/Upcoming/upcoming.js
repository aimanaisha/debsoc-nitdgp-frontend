import styles from "./upcoming.module.scss";
import { useState, useEffect, useCallback } from "react";

export default function UpcomingEvents() {
    const url = "data/events/upcoming.json";
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const upcoming = await response.json();
    setData(upcoming);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return (
    <>
      <div className={styles.upcoming}>
        {data.map((pass) => (
          <div className={styles.col1} key={pass.id}>
            <div className={styles.col2}>
              <img src={pass.img} alt="" key={pass.id} />
              <div className={styles.head} key={pass.name}>
                {pass.name}
              </div>
              <div className={styles.content} key={pass.desc}>
                {pass.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
