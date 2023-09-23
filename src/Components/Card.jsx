import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import './styles.css';

const quotesURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function Card() {
  const [quote, setQuote] = useState("We only know 20% of someone's life")
  const [author, setAuthor] = useState("-Taufiq Islam")
  const [randomNumber, setRandomNumber] = useState(0)

  const [quotesArray, setQuotesArray] = useState(null)

  const fetchQuotes = async (quotesURL) => {
    const response = await fetch(quotesURL)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }

  useEffect(() => {
    fetchQuotes(quotesURL)
    
    
  }, [quotesURL])
  

  const changeQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random())
    setRandomNumber(randomInteger)
    setQuote(quotesArray[randomNumber].quote)
    setAuthor(quotesArray[randomNumber].author)
  }

  return (
    <>
        <div className='card quoteWidth'>
          <div className="card-body" id="quote-box">
            <h3 className="card-title" id="text">{quote}</h3>
            <p className="card-text" id="author">{author}</p>
            <div className='row'>
              <a href={encodeURI(`https://www.twitter.com/intent/tweet?text=${quote} -${author}`)} target="_blank" className="btn btn-primary col-sm-1" id="tweet-quote" title="Tweet this quote!"> <FontAwesomeIcon icon={faTwitter} /> </a>
              {/* <a href={encodeURI(`https://www.facebook.com/sharer/tweet?text=${quote}  ${author}`)} target="_blank" className="btn btn-primary col-sm-1" id="share-quote"  title="Post this quote on facebook!"><FontAwesomeIcon icon={faFacebook} /></a> */}
              <p className='col-sm-9 border-0'></p>
              <button className="btn btn-danger col-sm-2" id="new-quote" onClick={changeQuote}>Next Quote</button>
            </div>
            
            
          </div>
        </div>
    </>
    
  )
}

export default Card;