const common = {
  up: 'hsl(163, 72%, 41%)',
  down: 'hsl(356, 69%, 56%)',
  facebook: 'hsl(195, 100%, 50%)',
  twitter: 'hsl(203, 89%, 53%)',
  instagram: 'linear-gradient(90deg, hsl(37, 97%, 70%) 0%, hsl(329, 70%, 58%) 100%)',
  youtube: 'hsl(348, 97%, 39%)',
  backgroundToggle: {
    backgroundColor: 'hsl(210, 78%, 56%)',
    background: 'linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%)'
  },
  backgroundModal: 'rgba(0, 0, 0, 0.5)'
}

const fonts = {
  headline1: {
    fontSize: '96px',
    letterSpacing: -1.5
  },
  headline2: {
    fontSize: '60px',
    letterSpacing: -0.5
  },
  headline3: {
    fontSize: '48px',
    letterSpacing: 0
  },
  headline4: {
    fontSize: '34px',
    letterSpacing: 0.25
  },
  headline5: {
    fontSize: '24px',
    letterSpacing: 0
  },
  headline6: {
    fontSize: '20px',
    letterSpacing: 0.15
  },
  subtitle1: {
    fontSize: '16px',
    letterSpacing: 0.15
  },
  subtitle2: {
    fontSize: '14px',
    letterSpacing: 0.1
  },
  body1: {
    fontSize: '16px',
    letterSpacing: -1.5
  },
  body2: {
    fontSize: '14px',
    letterSpacing: 0.5
  },
  button: {
    fontSize: '14px',
    letterSpacing: 1.25
  }
}

export const lightTheme = Object.assign(
  {
    background: 'hsl(0, 0%, 100%)',
    backgroundSecond: 'hsl(225, 100%, 98%)',
    cardBackground: 'hsl(227, 47%, 96%)',
    cardBackgroundHover: 'hsl(236, 32%, 91%)',
    textFirst: 'hsl(228, 12%, 44%)',
    textTwo: 'hsl(230, 17%, 14%)',
    chart: 'hsl(243, 51%, 70%)',
    circleToggle: 'hsl(0, 0%, 100%)'
  },
  common,
  fonts
)

export const darkTheme = Object.assign(
  {
    background: 'hsl(230, 17%, 14%)',
    backgroundSecond: 'hsl(232, 19%, 15%)',
    cardBackground: 'hsl(228, 28%, 20%)',
    cardBackgroundHover: 'hsl(226, 26%, 27%)',
    textFirst: 'hsl(228, 34%, 66%)',
    textTwo: 'hsl(0, 0%, 100%)',
    chart: 'hsl(243, 51%, 70%)',
    circleToggle: 'hsl(230, 22%, 74%)'
  },
  common,
  fonts
)
