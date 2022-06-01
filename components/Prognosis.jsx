import styles from '../styles/Prognosis.module.scss'

const Prognosis = ({ manyForecast, title, children }) => {

    return (
        <div>
            <div className={styles.flex}>
                <div>
                    <p className={styles.column}>Время заседания:</p>
                    <p className={styles.item}>11.02.22 (0:00)</p>
                </div>
                <div>
                    <p className={styles.column}>Цена фьючерса:</p>
                    <p className={styles.item}>99,999</p>
                </div>
            </div>
            <div className={styles.diagram}>
                <div className={styles.left} style={{width: `${100 - manyForecast} %`}} >
                    <div className={styles.left__diagram}>
                        {100 - manyForecast} %
                    </div>
                    <p className={styles.diagram__desc}>0,00-0,25</p>
                </div>
                <div className={styles.right} style={{width: `${manyForecast}%`}} >
                    <div className={styles.right__diagram}>
                        {manyForecast} %
                    </div>
                    <p className={styles.diagram__desc}>0,25-0,50</p>
                </div>
            </div>
        </div>
    )
}

export default Prognosis;