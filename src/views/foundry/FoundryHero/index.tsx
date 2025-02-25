import { useTranslation } from 'next-i18next'
import styled, { keyframes } from 'styled-components/macro'
import { ContentSmall, Headline } from 'styles/typography'
import Bg from './foundry_bg.jpg'
import Fg from './foundry_fg.png'
import Otto from './otto_smith.png'
import Arrow from './arrow.svg'

const StyledFoundryHero = styled.div`
  width: 100%;
  position: relative;
`

const FgAnimation = keyframes`
  0%   { width: 0 }
  50%  { width: 100% }
`

const StyledBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 520px;
  background: no-repeat center / cover url(${Bg.src});
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    width: 100%;
    padding-bottom: 60%;
    background: no-repeat left top / auto 100% url(${Fg.src});
    animation: ${FgAnimation} 2000ms steps(1) infinite;
  }

  &::after {
    background-position: right top;
    animation-delay: 1s;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: 400px;
  }
`

const OttoAnimation = keyframes`
  0%   { background-position: 0% top }
  50%  { background-position: 100% top }
`

const StyledOtto = styled.div`
  width: 382px;
  height: 414px;
  position: absolute;
  bottom: 0;
  right: 15%;
  background: no-repeat left top / auto 100% url(${Otto.src});
  animation: ${OttoAnimation} 2000ms steps(1) infinite;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 179px;
    height: 194px;
    right: 5%;
  }
`

const StyledDialog = styled.div`
  color: ${({ theme }) => theme.colors.otterBlack};
  background: white;
  position: absolute;
  top: 20%;
  left: 15%;
  width: 35%;
  border-radius: 20px;
  border: 4px solid ${({ theme }) => theme.colors.otterBlack};
  padding: 20px;

  &:after {
    content: '';
    width: 28px;
    height: 20px;
    background-image: url(${Arrow.src});
    background-size: 100% 100%;
    position: absolute;
    top: calc(50% - 9px);
    right: -30px;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    top: 20px;
    left: 20px;
    right: 20px;
    width: auto;

    &:after {
      transform: rotate(90deg);
      left: calc(50% - 9px);
      right: unset;
      bottom: -29px;
      top: unset;
    }
  }
`

const StyledTitle = styled(Headline)``

const StyledSubtitle = styled(ContentSmall)``

export default function FoundryHero() {
  const { t } = useTranslation('', { keyPrefix: 'foundry' })
  return (
    <StyledFoundryHero>
      <StyledBg />
      <StyledOtto />
      <StyledDialog>
        <StyledTitle as="h1">{t('dialog.title')}</StyledTitle>
        <StyledSubtitle as="p">{t('dialog.content')}</StyledSubtitle>
      </StyledDialog>
    </StyledFoundryHero>
  )
}
