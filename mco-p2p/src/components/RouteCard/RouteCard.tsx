import styles from "./RouteCard.module.scss";

type CardProps = {
  title: string;
  src: string;
  alt: string;
}

export default function RouteCard(props: CardProps) {
  return (
    <div className={styles.cardLayout}>
      <img className={styles.routeImage} src={props.src} alt={props.alt}/>
      <h3 className={styles.cardTitle}>{props.title}</h3>
    </div>
  );
}