import React from 'react'
import '../styles/page404.css'
import icon404 from '../images/error-404.png'
function Page404() {
  return (
      <div className="page404">
        <div >
          <h2>404</h2>
          <h3 style={{marginTop : ""}}>Page Not Found</h3>
        </div>
        {/* <img className="icon404" src={icon404} alt="" /> */}
      </div>
  )
}

export default Page404