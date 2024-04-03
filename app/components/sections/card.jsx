import { Grid } from "@mui/material";
import styles from "@/app/styles/page.module.scss";

const Card = ({ data }) => {
  return (
    <div className={styles.experience_card}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <div className={styles.experience_card_date}>
            {data.image ? <img src={data.image} /> : <small>{data.date}</small>}
          </div>
        </Grid>
        <Grid item sm={9}>
          <div className={styles.experience_card_detail}>
            <h3>
              <a href={data.link} target="_blank">
                {data.title}
              </a>
            </h3>
            <p>{data.text}</p>

            <div className={styles.experience_card_tags}>
              {data.tags.map((tag, index) => {
                return <span key={index}>{tag} </span>;
              })}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
