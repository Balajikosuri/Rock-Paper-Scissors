import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import PlayingSection from '../PlayingSection'

import ResultSection from '../ResultSection'

import './index.css'

import ScoreBoard from '../ScoreBoard'

const ImagesList = {
  ROCK:
    'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  SCISSORS:
    'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  PAPER:
    'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
}

// const initialState = {isGameRunning: false, ImagesList: []}

class RockPaperScissorsSection extends Component {
  state = {
    isGameRunning: true,
    yourChoice: '',
    opponentChoice: 0,
    gameResult: '',
    score: 0,
  }

  generateOpponentChoice = () => {
    const {choicesList} = this.props
    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    return opponentChoice
  }

  clickOnYourChoice = yourChoice => {
    const oppChoice = this.generateOpponentChoice()
    const winner = this.determineWinner(yourChoice, oppChoice)

    this.setState({
      yourChoice,
      opponentChoice: oppChoice,
      gameResult: winner,
      isGameRunning: false,
    })
  }

  onPlayAgain = () => {
    this.setState({isGameRunning: true})
  }

  renderRulesPopUp = () => (
    <div>
      <Popup
        trigger={
          <button className="rules-button" type="button">
            Rules
          </button>
        }
        modal
      >
        {close => (
          <div className="popup-container">
            <button type="button" className="close" onClick={close}>
              <RiCloseLine />
            </button>

            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="rules-img"
            />
          </div>
        )}
      </Popup>
    </div>
  )

  //   checkResultAndScore
  determineWinner = (youChoice, oppChoice) => {
    if (youChoice === oppChoice) {
      return 'IT IS DRAW'
    }
    if (
      (youChoice === 'ROCK' && oppChoice === 'SCISSORS') ||
      (youChoice === 'SCISSORS' && oppChoice === 'PAPER') ||
      (youChoice === 'PAPER' && oppChoice === 'ROCK')
    ) {
      this.setState(prevState => ({score: prevState.score + 1}))
      return 'YOU WON'
    }
    this.setState(prevState => ({score: prevState.score - 1}))
    return 'YOU LOSE'
  }

  render() {
    const {choicesList} = this.props
    const {
      isGameRunning,
      score,
      opponentChoice,
      gameResult,
      yourChoice,
    } = this.state
    console.log(`you :${yourChoice} \nopp: ${opponentChoice}`)
    // this.checkResultAndScore(yourChoice, opponentChoice)

    return (
      <div className="app">
        <div className="responsive">
          <ScoreBoard score={score} />

          {isGameRunning ? (
            <>
              <h2 style={{color: '#ffff'}}>Rock Paper Scissors</h2>
              <PlayingSection
                choicesList={choicesList}
                clickOnYourChoice={this.clickOnYourChoice}
              />
            </>
          ) : (
            <>
              <h2 style={{color: '#ffff'}}>Rock Paper Scissors</h2>
              <ResultSection
                onPlayAgain={this.onPlayAgain}
                gameResult={gameResult}
                ImagesList={ImagesList}
                yourChoice={yourChoice}
                opponentChoice={opponentChoice}
              />
            </>
          )}
        </div>
        <div className="rules-container">{this.renderRulesPopUp()}</div>
        {/* my conatiner */}
        <div className="my-dev-container">
          <p className="my-text">
            WebApp built by <br />
            <a
              className="anchor"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/balajikosuri"
            >
              Balaji Kosuri.
            </a>{' '}
            <br />
            Visit My LinkedIn Profile
            <br />
            <a
              className="anchor"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/balajikosuri"
            >
              Click Here
            </a>
          </p>
        </div>
        {/* **************** */}
      </div>
    )
  }
}

export default RockPaperScissorsSection
