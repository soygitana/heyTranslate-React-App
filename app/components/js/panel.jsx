import React from 'react'
import "../styles/main.scss";

const Suggestions = (props) => {
  const options = props.results.map(el => (
    <li key={el.id}>
      {el.name} {el.lastname} {el.language}
    </li>
  ))
  return (
    <div className="app-container">
    <div className="app-panel">
    <ul>{options}</ul>
    </div>
</div>
  )
}

export default Suggestions