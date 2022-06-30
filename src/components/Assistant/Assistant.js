import style from "./Assistant.module.scss";
const Assistant = (props) => {
  return (
    <div className={style.card}>
      <div className={style.card__name}>{props.name}</div>
      <div className={style.card__group}>{props.group}</div>
      <div className={style.card__assistant}>{props.assistant}</div>
    </div>
  );
};

export default Assistant;
