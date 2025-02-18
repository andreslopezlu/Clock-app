
import styles from './Quote.module.css'

import useQuotesApi from '../../hooks/useQuotesApi'

const Quote = ({quotesData, getQuotesData}) => {
 
    let quote = quotesData.quote
    let author = quotesData.author

    const handleRefreshClick = () => {
        getQuotesData()
        quote = quotesData.quote
        author = quotesData.author
    }

    return (
        <div className={styles.quoteContainer}>
            <div className={styles.quoteTextContainer}>
                <p className={styles.text}>"{quote}"</p>
                <div className={styles.refreshButton} onClick={handleRefreshClick}></div>
            </div>
            <p className={styles.quoteAuthor}>{author}</p>
        </div>
    )
}

export default Quote