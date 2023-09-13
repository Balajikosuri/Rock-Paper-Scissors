import './index.css'

const ScoreBoard = props => {
  const {score} = props

  return (
    <div className="scoreboard">
      <div className="scoreboard-items">
        <h2>ROCK</h2>
        <h2>PAPER</h2>
        <h2>SCISSORS</h2>
      </div>
      <div className="score">
        <p className="score-title">Score</p>
        <p className="resulted-score">{score}</p>
      </div>
    </div>
  )
}

export default ScoreBoard
