// Group images by theme
const africaImg = "/images/africa.webp"
const afterImg = "/images/after.webp"
const blurredStudioImg = "/images/blurred studio.webp"
const boringStudioImg = "/images/boring studio.webp"
const canalImg = "/images/canal.webp"
const darkPop2Img = "/images/dark pop 2.webp"
const darkPop3Img = "/images/dark pop 3.webp"
const flyer2Img = "/images/flyer 2.webp"
const flyerImg = "/images/flyer.webp"
const inspirationSearchImg = "/images/inspiration search.webp"
const ketamineImg = "/images/ketamine.webp"
const paintImg = "/images/paint.webp"
const popImg = "/images/pop.webp"
const producerImg = "/images/producer.webp"
const rebirthImg = "/images/rebirth.webp"
const tvImg = "/images/tv.png"
const vitrauxImg = "/images/vitraux.webp"
const amadeo1 = "/images/amadeo1.jpg"
export const backgroundImages = {
  personal: [amadeo1],
  dark: [darkPop2Img, darkPop3Img],
  creative: [paintImg, vitrauxImg, rebirthImg],
  studio: [blurredStudioImg, boringStudioImg, producerImg],
  misc: [africaImg, afterImg, ketamineImg, popImg, tvImg],
  promotional: [flyerImg, flyer2Img, canalImg, inspirationSearchImg],
}

// Dynamic group selection - useful for specific pages
export const getImageGroup = (groupName: keyof typeof backgroundImages) => {
  return backgroundImages[groupName] || backgroundImages.dark
}

// Get all images as a flat array
export const getAllImages = () => {
  return Object.values(backgroundImages).flat()
}

// Get a random pair of images from different groups
export const getRandomImagePair = () => {
  const allGroups = Object.keys(backgroundImages) as Array<
    keyof typeof backgroundImages
  >
  const primaryGroupIndex = Math.floor(Math.random() * allGroups.length)
  let secondaryGroupIndex = Math.floor(Math.random() * allGroups.length)

  // Make sure we get different groups
  while (secondaryGroupIndex === primaryGroupIndex && allGroups.length > 1) {
    secondaryGroupIndex = Math.floor(Math.random() * allGroups.length)
  }

  const primaryGroup = backgroundImages[allGroups[primaryGroupIndex]]
  const secondaryGroup = backgroundImages[allGroups[secondaryGroupIndex]]

  const primaryImage =
    primaryGroup[Math.floor(Math.random() * primaryGroup.length)]
  const secondaryImage =
    secondaryGroup[Math.floor(Math.random() * secondaryGroup.length)]

  return { primary: primaryImage, secondary: secondaryImage }
}

// Page-specific image sets
export const pageBackgrounds = {
  home: {
    primary: [...backgroundImages.personal],
    secondary: [...backgroundImages.studio, ...backgroundImages.misc],
  },
  projects: {
    primary: [...backgroundImages.creative, ...backgroundImages.studio],
    secondary: [...backgroundImages.promotional, ...backgroundImages.misc],
  },
  skills: {
    primary: [...backgroundImages.dark, ...backgroundImages.studio],
    secondary: [...backgroundImages.creative],
  },
  about: {
    primary: [...backgroundImages.misc, ...backgroundImages.creative],
    secondary: [...backgroundImages.dark],
  },
  contact: {
    primary: [...backgroundImages.promotional, ...backgroundImages.misc],
    secondary: [...backgroundImages.studio],
  },
}
