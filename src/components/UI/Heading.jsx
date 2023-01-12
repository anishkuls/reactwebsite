import React from 'react'

const Heading = ({text}) => {
const style = {
    main:{
        padding: "58px 0px",
        textTransform:"Captialize"
    }
}
  return (
    <>
     <div className="col-12 text-center" style={style.main}>
        <h2>{text}</h2>
     </div>
    </>
  )
}

export default Heading