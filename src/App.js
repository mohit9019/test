import React from "react";
import Slot from "./Slot";
import Data from "./Data";
import Navbar from "./Navbar";
import Footer from "./Footer"; 


function details(val){
  return(
    <>
      <div className="templetes">
      <Slot 
        img={val.img}
        title={val.title}
        desc={val.desc}
        review={val.review}
        sale={val.sale}
        price={val.price}
        detail={val.detail}
        forward={val.forward}
      />
      </div>
    </>
  );
}
const App=()=>{
  return(
    <> 
      <Navbar />
      {/* <Link to="/second"> */}
      <h3>second link</h3>
      {/* </Link> */}
      {Data.map(details)}
    
      <Footer />
    </>
  );
};
export default App;