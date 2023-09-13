import './index.css'

const PlayingSection = props => {
  const {choicesList, clickOnYourChoice} = props

  return (
    <ul className="Playing-section">
      <button
        value={choicesList[0].id}
        type="button"
        data-testid="rockButton"
        className="each-item-button"
        onClick={() => {
          clickOnYourChoice(choicesList[0].id)
        }}
      >
        <img
          className="choice-img"
          src={choicesList[0].imageUrl}
          alt={choicesList[0].id}
        />
      </button>
      <button
        value={choicesList[1].id}
        type="button"
        data-testid="scissorsButton "
        className="each-item-button"
        onClick={() => {
          clickOnYourChoice(choicesList[1].id)
        }}
      >
        <img
          className="choice-img"
          src={choicesList[1].imageUrl}
          alt={choicesList[1].id}
        />
      </button>
      <button
        value={choicesList[2].id}
        type="button"
        data-testid="paperButton "
        className="each-item-button"
        onClick={() => {
          clickOnYourChoice(choicesList[2].id)
        }}
      >
        <img
          className="choice-img"
          src={choicesList[2].imageUrl}
          alt={choicesList[2].id}
        />
      </button>
    </ul>
  )
}

export default PlayingSection
