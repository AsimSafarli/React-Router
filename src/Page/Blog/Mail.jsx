import React from 'react'
import { useParams } from 'react-router-dom'
function Mail() {
    const {url}=useParams()
    console.log(url) 
     return (
    <div>
      Mail page {url}
    </div>
  )
}

export default Mail
