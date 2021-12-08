import React from "react";
const Slot=(props)=>{
  return(
    <>
    <div className="container">
      <div className="image_div"><img src={props.img} className="img" alt="IMAGE"/></div>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <p>{props.review}</p>
        <div className="about"><p>{props.sale}</p><p>{props.price}</p></div>
        <div className="but"><a href={props.detail} target="_blank"><button>Details</button></a><a href={props.forward} target="_blank"><button>Forward</button></a></div>
      </div>
    </div>
  </>);
  }
  export default Slot;