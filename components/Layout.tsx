import styles from '../styles/Layout.module.css';

export const Layout: React.FC = ({ children }) => {
    return (
        <div className={styles.container}>{ children }</div>
    )
}