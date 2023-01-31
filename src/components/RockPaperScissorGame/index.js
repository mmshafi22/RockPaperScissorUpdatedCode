import Popup from 'reactjs-popup'
import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
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
    score: '',
    userOption: '',
    opponentChoice: choicesList[Math.floor(Math.random() * 3) - 1].id,
    isGameRunning: true,
  }

  render() {
    const contentStyles = {
      backgroundColor: '#fff',
      width: '350px',
      height: '350px',
      padding: '10px',
    }
    return (
      <GameBgContainer>
        <GameViewContainer>
          <ScoreContainer>
            <GameNameContainer>
              <GameName>ROCK</GameName>
              <GameName>PAPER</GameName>
              <GameName>SCISSORS</GameName>
            </GameNameContainer>
            <Score>
              <ScoreHeading>Score</ScoreHeading>
              <ScoreParagraph>0</ScoreParagraph>
            </Score>
          </ScoreContainer>
          <>
            <Popup
              modal
              trigger={<ButtonRules type="button">RULES</ButtonRules>}
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
