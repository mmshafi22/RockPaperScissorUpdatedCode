import {ChoiceItem, BtnChoice, ChoiceImg} from './styledComponents'

const OptionItem = props => {
  const {details, onClickChoice} = props
  const {id, imageUrl} = details

  const onClickBtnChoice = () => {
    onClickChoice(id)
  }

  const checkVal = () => {
    let value
    if (id === 'ROCK') {
      value = 'rockButton'
    } else if (id === 'SCISSORS') {
      value = 'scissorsButton'
    } else {
      value = 'paperButton'
    }
    return value
  }

  const val = checkVal()

  return (
    <ChoiceItem>
      <BtnChoice type="button" onClick={onClickBtnChoice} data-testid={val}>
        <ChoiceImg src={imageUrl} alt={id} />
      </BtnChoice>
    </ChoiceItem>
  )
}

export default OptionItem
