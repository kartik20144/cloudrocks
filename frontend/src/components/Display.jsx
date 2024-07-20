import React from 'react'
import "./Display.css"
import Stocks from './Stocks'
import Options from './Options'
import Tips from './Tips/Tips'

const Display = () => {
    return (
        <div className="upperbox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="box">
          <Stocks />
          {/* Your Stocks content here */}
        </div>
        <div className="box">
         <Options />
          {/* Your Options content here */}
        </div>
        <div className="box">
          <Tips />
        </div>
      </div>
      )
}

export default Display