import styles from './Quote.module.css'

const Quote = ({quotesData, getQuotesData, isQuoteVisible}) => {
 
    let quote = quotesData.quote
    let author = quotesData.author

    const handleRefreshClick = () => {
        getQuotesData()
        quote = quotesData.quote
        author = quotesData.author
    }

    return (
        <>
            {   
                isQuoteVisible && 
                <div className={styles.quoteContainer}>
                    <div className={styles.quoteTextContainer}>
                        <p className={styles.text}>&quot;{quote}&quot;</p>
                        <div className={styles.refreshButton} onClick={handleRefreshClick}></div>
                    </div>
                    <p className={styles.quoteAuthor}>{author}</p>
                </div>
            }
        </>
    )
}

export default Quote