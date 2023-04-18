import React from 'react'

const Styling = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: "1000",
    backgroundColor: 'tomato',
    textAlign:'center',
    padding: '0.75em',
    margin: "0",
    color:'white',
    fontWeight: 'bold',
    fontSize: '1.5em'
}

const headerStyle = {
    display: "flex",
    height: "100px",
    backgroundColor: "#282828"
}
  
const ulStyle = {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
}

const liStyle = {
    padding: "4px 8px",
    background: "black",
    color: "white",
    listStyle: "none"
}

const aStyle = {
    textDecoration: "none",
    color: "hotpink",
    fontWeight: "800",
    fontSize: "1.5rem"
}

const Destroy = () => {
  return (
      <div style={Styling}>
          <header style={headerStyle}>
              <ul style={ulStyle}>
                  <li style={liStyle}><a style={aStyle} href="">Home</a></li>
                  <li style={liStyle}><a style={aStyle} href="">Home</a></li>
                  <li style={liStyle}><a style={aStyle} href="">Home</a></li>
                  <li style={liStyle}><a style={aStyle} href="">Home</a></li>
                 
              </ul>
          </header>
          <h1>messing stuff upp</h1>
    </div>
  )
}

export default Destroy