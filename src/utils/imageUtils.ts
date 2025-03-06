import africaImg from "../assets/images/africa.webp"
import afterImg from "../assets/images/after.webp"
import blurredStudioImg from "../assets/images/blurred studio.webp"
import boringStudioImg from "../assets/images/boring studio.webp"
import canalImg from "../assets/images/canal.webp"
import darkPop2Img from "../assets/images/dark pop 2.webp"
import darkPop3Img from "../assets/images/dark pop 3.webp"
import flyer2Img from "../assets/images/flyer 2.webp"
import flyerImg from "../assets/images/flyer.webp"
import inspirationSearchImg from "../assets/images/inspiration search.webp"
import ketamineImg from "../assets/images/ketamine.webp"
import paintImg from "../assets/images/paint.webp"
import popImg from "../assets/images/pop.webp"
import producerImg from "../assets/images/producer.webp"
import rebirthImg from "../assets/images/rebirth.webp"
import tvImg from "../assets/images/tv.png"
import vitrauxImg from "../assets/images/vitraux.webp"
import amadeo1 from "../assets/images/amadeo1.jpg"

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
