import styles from "./index.module.less";

function RhTitle(props: {
  title: string;
  fontSize?: number;
  justifyContent?: string;
}) {
  const { title, fontSize = 18, justifyContent = "start" } = props;
  return (
    <div className={styles.flexDiv} style={{ justifyContent }}>
      <div className={styles.borderDiv} />
      <div className={styles.content} style={{ fontSize: `${fontSize}px` }}>
        {title}
      </div>
    </div>
  );
}

export default RhTitle;
