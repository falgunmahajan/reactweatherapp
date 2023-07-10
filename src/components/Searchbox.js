import React from 'react'

export default function Searchbox({inputRef, enterKeyPressed, buttonClick}) {
  return (
    <div className="d-flex ">
    <input type="text" className="form-control my-5" ref={inputRef} onKeyDown={enterKeyPressed}/>
    <button type="button" className="btn btn-danger ms-2 my-5" onClick={buttonClick}>Search</button>
    </div>
  )
}
