import styles from "./style.module.css";

import ilustracao from "../../Assets/illustration.svg";
const Modal = ({children, isOpen}) => {
    
    if (!isOpen) return null

  return (
    <section className={styles.containerModal}>
        <span className={styles.fundoModal}></span>
        <div className={styles.containerContent}>
            <div className={styles.contentText}>
                <h2>
                    <span>Nu</span> Kenzie
                </h2>
                <p>Centralize o controle das suas finanças</p>
                <blockquote>de forma rápida e segura</blockquote>
                {children}
            </div>
            <div className={styles.contentImg}>
                <img src={ilustracao} alt="" />
            </div>
        </div>
    </section>
  );
};

export default Modal;
