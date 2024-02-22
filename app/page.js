import React from 'react'

import Main from './Main'
import Fut from './Fut'
import Hedr from './Hedr'


function page() {
  return (
    <div className="bg-[url('/Oimg.svg')] bg-no-repeat orqa">
      <Hedr/>
      <Main/>
      <Fut/>
    </div>
  )
}

export default page