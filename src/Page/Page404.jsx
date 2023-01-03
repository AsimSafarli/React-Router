import React from 'react'
import { Link } from 'react-router-dom'
import './Page404.css'
function Page404() {
  return (
    <div>
        <Link to="/">Home</Link>
<div class="error-container">
  <span class="four"><span class="screen-reader-text">4</span></span>
  <span class="zero"><span class="screen-reader-text">0</span></span>
  <span class="four"><span class="screen-reader-text">4</span></span>
</div>
    </div>
  )
}

export default Page404
