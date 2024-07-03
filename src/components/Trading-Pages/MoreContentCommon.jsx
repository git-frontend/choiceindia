import React from 'react'

function MoreContentCommon({data}) {
  return (
    <>
       <div dangerouslySetInnerHTML={{ __html: data[0].moreContentDetails }}></div>
    </>
  )
}

export default MoreContentCommon