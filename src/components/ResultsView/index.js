import {
  ResultBgContainer,
  ResultContainer,
  ChoiceItem,
  ParagraphElement,
  ResultElement,
  ImageElement,
  PlayBtn,
} from './styledComponents'

const ResultsView = props => {
  const {onPlayAgain, userDetails, opponentDetails, result} = props
  const userImg = userDetails.imageUrl
  const opponentImg = opponentDetails.imageUrl

  const onClickPlayBtn = () => {
    onPlayAgain()
  }

  return (
    <ResultBgContainer>
      <ResultContainer>
        <ChoiceItem>
          <ParagraphElement>YOU</ParagraphElement>
          <ImageElement src={userImg} alt="your choice" />
        </ChoiceItem>
        <ChoiceItem>
          <ParagraphElement>OPPONENT</ParagraphElement>
          <ImageElement src={opponentImg} alt="opponent choice" />
        </ChoiceItem>
      </ResultContainer>
      <ResultElement>{result}</ResultElement>
      <PlayBtn type="button" onClick={onClickPlayBtn}>
        PLAY AGAIN
      </PlayBtn>
    </ResultBgContainer>
  )
}

export default ResultsView
