import React from "react";
const Footer=()=>{
    // let [cnt,setCnt] = React.useState(0);
    // let cnt = 1;
    // setInterval(()=>{
    //     setCnt(cnt+1);
    //     cnt+=1;
    // },2000);
    
    return(
        <>
            <div className="footer">
                <img src="/images/white.png" className="fl" />
                <p id="p1"></p>
                <h3 className="tm">CopyRight @2021 Vrasm</h3>
            </div>
        </>
    );
}
export default Footer;