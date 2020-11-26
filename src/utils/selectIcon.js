import iconFacebook from '../images/icon-facebook.svg'
import iconInstagram from '../images/icon-instagram.svg'
import iconTwitter from '../images/icon-twitter.svg'
import iconYoutube from '../images/icon-youtube.svg'

export default function selectIcon(media) {
  switch (media) {
    case 'facebook':
      return iconFacebook
    case 'twitter':
      return iconTwitter
    case 'instagram':
      return iconInstagram
    case 'youtube':
      return iconYoutube
    default:
      return iconFacebook
  }
}
