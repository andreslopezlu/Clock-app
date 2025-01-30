
const Quote = ({quotesData}) => {

    const quote = quotesData.quote
    const author = quotesData.author

    return (
        <div className="quote-container">
            <p className="quote-text">{quote}</p>
            <p className="quote-author">{author}</p>
        </div>
    )
}

export default Quote