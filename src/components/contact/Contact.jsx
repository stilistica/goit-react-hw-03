import s from "./Contact.module.css";
import { GrUserManager } from "react-icons/gr";
import { RiPhoneLine } from "react-icons/ri";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <p>
          <GrUserManager /> {name}
        </p>
        <p>
          <RiPhoneLine /> {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} className={s.btn}>
        Delete
      </button>
    </div>
  );
}
