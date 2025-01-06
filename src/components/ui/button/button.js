import styles from '@components/ui/button/button.module.scss';

// components/ui/button.js
export function Button({ children, onClick, }) {

    return (
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    );
  };
