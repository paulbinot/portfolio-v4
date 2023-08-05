export const screenWidths = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopM: 1200,
  laptopL: 1440,
  desktop: 1980,
  wide: 2560
}

export const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1200px',
  laptopL: '1440px',
  desktop: '1980px',
  wide: '2560px'
}

export const breakpoints = {
  mobileS: `(max-width: ${deviceSizes.mobileS})`,
  mobileM: `(max-width: ${deviceSizes.mobileM})`,
  mobileL: `(max-width: ${deviceSizes.mobileL})`,
  tablet: `(max-width: ${deviceSizes.tablet})`,
  laptop: `(max-width: ${deviceSizes.laptop})`,
  laptopM: `(max-width: ${deviceSizes.laptopM})`,
  laptopL: `(max-width: ${deviceSizes.laptopL})`,
  desktop: `(max-width: ${deviceSizes.desktop})`,
  wide: `(max-width: ${deviceSizes.wide})`
}