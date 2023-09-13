import './index.css'

const ResultSection = props => {
  const {
    ImagesList,
    onPlayAgain,
    gameResult,
    opponentChoice,
    yourChoice,
  } = props

  return (
    <div className="result-section">
      <div className="result-section-imgs">
        <div className="each-player">
          <h3>YOU</h3>
          <img
            className="choice-img"
            src={ImagesList[yourChoice]}
            alt="your choice"
          />
        </div>
        <div className="each-player">
          <h3>OPPONENT</h3>
          <img
            className="choice-img"
            src={ImagesList[opponentChoice]}
            alt="opponent choice"
          />
        </div>
        {/* buttons */}
      </div>
      <p className="your-result">{gameResult}</p>
      <button
        onClick={() => onPlayAgain()}
        className="play-again-button"
        type="button"
      >
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ResultSection
