import React from 'react'
import "../styles/footer.css";

export const Footer = function() {
  return (
    <div className="footer">
        <div className="copyright">
              Copyright © 2012-2022 by Skilla
        </div>
        <div className="footerLinks">
            <a href="#">Privacy</a>
            <a href="#">Terms of Use</a>
        </div>
    </div>
  )
}
