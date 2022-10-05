import CroppedImage from 'components/CroppedImage'
import { Trait } from 'models/Otto'
import styled from 'styled-components/macro'
import React from 'react'
import lockImage from './lock.svg'

const StyledButton = styled.button<{ trait?: Trait; locked?: boolean }>`
  position: relative;
  background: ${({ theme, trait }) => (trait ? theme.colors.rarity[trait.rarity] : theme.colors.darkGray400)};
  padding: 2px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: 1px ${({ theme }) => theme.colors.otterBlack} solid;
  border-radius: 2px;

  &::before {
    position: absolute;
    top: 50%;
    ${({ locked }) => (locked ? 'left: 0' : 'right: 0')};
    transform: ${({ locked }) => (locked ? 'translate(-14px, -11px)' : 'translate(14px, -11px)')};
    z-index: 1;
    display: ${({ trait }) => (trait ? 'block' : 'none')};
    content: '';
    background: center / 16px 16px url(${({ trait }) => encodeURI(`/trait-icons/${trait?.type}.png`)}) no-repeat;
    background-color: ${({ theme }) => theme.colors.white};
    width: 22px;
    height: 22px;
    border: 1px ${({ theme }) => theme.colors.otterBlack} solid;
    box-sizing: border-box;
    border-radius: 11px;
  }

  &:disabled::after {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
    content: '';
    background: url(${lockImage.src});
    width: 18px;
    height: 18px;
  }
`

const StyledImage = styled.div`
  width: 34px;
  height: 34px;
  box-sizing: border-box;
  border: 1px ${({ theme }) => theme.colors.otterBlack} solid;
`

export interface TraitButtonProps {
  trait?: Trait
  locked?: boolean
  onSelect: (trait?: Trait) => void
}

export default React.memo(
  function TraitButton({ trait, locked, onSelect }: TraitButtonProps) {
    return (
      <StyledButton disabled={locked} trait={trait} locked={locked} onClick={() => onSelect(trait)}>
        <StyledImage>{trait && <CroppedImage src={trait.image} width={34} height={34} />}</StyledImage>
      </StyledButton>
    )
  },
  (propsA, propsB) => propsA.trait?.id === propsB.trait?.id && propsA.locked === propsB.locked
)
