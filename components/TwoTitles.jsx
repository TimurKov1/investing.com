import styles from '../styles/TwoTitles.module.scss';

const TwoTitles = ({ children }) => {
    return (
        <div className={styles.flex}>
            <div>{children[0]}</div>
            <div className={styles.right}>{children[1]}</div>
        </div>
    )
}

export default TwoTitles