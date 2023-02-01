import Popup from 'reactjs-popup'
import {Component} from 'react'
import OptionItem from '../OptionItem'
import ResultsView from '../ResultsView'
import {
  GameBgContainer,
  GameViewContainer,
  ScoreContainer,
  GameNameContainer,
  GameName,
  Score,
  ScoreHeading,
  ScoreParagraph,
  ButtonRules,
  RulesContainer,
  ButtonClose,
  RulesImg,
  CloseIcon,
  ChoiceContainer,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissorGame extends Component {
  state = {
    score: 0,
    userOption: '',
    opponentOption: choicesList[Math.floor(Math.random() * 3) - 1].id,
    isGameRunning: true,
    gameResult: '',
  }

  onClickChoice = id => {
    const isWon = this.checkTheResults(id)
    if (isWon === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        userOption: id,
        isGameRunning: false,
        gameResult: isWon,
      }))
    } else if (isWon === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        userOption: id,
        isGameRunning: false,
        gameResult: isWon,
      }))
    } else {
      this.setState({userOption: id, isGameRunning: false, gameResult: isWon})
    }
  }

  onPlayAgain = () => {
    const randomChoice = choicesList[Math.floor(Math.random() * 3) - 1].id
    this.setState({opponentOption: randomChoice, isGameRunning: true})
  }

  renderResultsView = () => {
    const {userOption, opponentOption, gameResult} = this.state
    const userChoice = choicesList.find(
      eachChoice => eachChoice.id === userOption,
    )
    const opponentChoice = choicesList.find(each => each.id === opponentOption)
    return (
      <ResultsView
        userDetails={userChoice}
        opponentDetails={opponentChoice}
        result={gameResult}
        onPlayAgain={this.onPlayAgain}
      />
    )
  }

  renderGameView = () => (
    <ChoiceContainer>
      {choicesList.map(each => (
        <OptionItem
          key={each.id}
          details={each}
          onClickChoice={this.onClickChoice}
        />
      ))}
    </ChoiceContainer>
  )

  checkTheResults = id => {
    const {opponentOption} = this.state
    let result
    if (id === 'ROCK' && opponentOption === 'SCISSORS') {
      result = 'YOU WON'
    } else if (id === 'ROCK' && opponentOption === 'PAPER') {
      result = 'YOU LOSE'
    } else if (id === 'SCISSORS' && opponentOption === 'PAPER') {
      result = 'YOU WON'
    } else if (id === 'SCISSORS' && opponentOption === 'ROCK') {
      result = 'YOU LOSE'
    } else if (id === 'PAPER' && opponentOption === 'ROCK') {
      result = 'YOU WON'
    } else if (id === 'PAPER' && opponentOption === 'SCISSORS') {
      result = 'YOU LOSE'
    } else {
      result = 'IT IS DRAW'
    }
    return result
  }

  render() {
    const contentStyles = {
      backgroundColor: '#fff',
      width: '350px',
      height: '350px',
      padding: '10px',
    }
    const {isGameRunning, score} = this.state
    return (
      <GameBgContainer>
        <GameViewContainer>
          <ScoreContainer>
            <GameName>Rock Paper Scissors</GameName>
            <Score>
              <ScoreHeading>Score</ScoreHeading>
              <ScoreParagraph>{score}</ScoreParagraph>
            </Score>
          </ScoreContainer>
          {isGameRunning ? this.renderGameView() : this.renderResultsView()}
          <>
            <Popup
              modal
              trigger={<ButtonRules type="button">Rules</ButtonRules>}
              contentStyle={contentStyles}
            >
              {close => (
                <RulesContainer>
                  <ButtonClose type="button" onClick={() => close()}>
                    <CloseIcon />
                  </ButtonClose>
                  <RulesImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                    alt="rules"
                  />
                </RulesContainer>
              )}
            </Popup>
          </>
        </GameViewContainer>
      </GameBgContainer>
    )
  }
}

export default RockPaperScissorGame
