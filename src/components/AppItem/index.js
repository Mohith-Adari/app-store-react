// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="apps">
      <img src={imageUrl} alt={appName} className="img-style" />
      <p className="heading">{appName}</p>
    </li>
  )
}

export default AppItem
