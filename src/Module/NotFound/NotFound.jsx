import './NotFound.scss'

import { CGap, CLink } from '../../Components'

const NotFound = () => {
  return (
    <>
      <div className="pageWrapper">
        <p className="title">pageNotFound !</p>
        <CGap height={30} />
        <CLink title="Back to home!" to="/" />
      </div>
    </>
  )
}

export default NotFound
