import { View, styled } from 'tamagui'

export const FormCard = styled(View, {
  tag: 'form',
  flexDirection: 'row',
  maxWidth: '100%',
  borderRadius: 30,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#f5f5f5',
  '$gtSm': {
    padding: '$6',
    shadowColor: '$shadowColor',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
  },
  '$theme-dark': {
    borderWidth: 1,
    borderColor: '$borderColor',
  },
  '$xs': {
    borderWidth: 0,
    borderRadius: 0,
    paddingHorizontal: '$1',
  },
})