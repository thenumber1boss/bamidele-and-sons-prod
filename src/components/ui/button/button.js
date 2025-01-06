import styles from './button.module.scss';

// components/ui/button.js
export function Button({ children, onClick, }) {

    return (
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    );
  };
