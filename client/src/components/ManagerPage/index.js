import React from "react";


var str = "This is a variable inside the component";
function ManagerPage({ children }) {
  return (
     <div >
        <h2 >{children}</h2>
     </div>
  );
}

export default ManagerPage;
