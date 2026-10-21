import styles from "../styles/button.module.css";

export default function Button({ Label }: { Label: string }) { 
    return (
        <button className={styles.primary}>
            {Label}
        </button>
    );
}