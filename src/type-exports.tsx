import * as React from 'react'

type IReExportedType = {
  bg?: any,
  children?: any
}

let TypesTester = (props: IReExportedType) => {
  let styles = {
    background: props.bg || 'orange',
    border: '5px solid purple',
  }
  return <div style={styles}>{props.children || "typething works"}</div>
}

//this fails with create react app and next.. opinions are like ..a {object read spread} get it
export {IReExportedType, TypesTester}