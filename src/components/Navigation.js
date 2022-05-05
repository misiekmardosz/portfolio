import React, { useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  if (showMenu === false) {
    return <button onClick={() => setShowMenu(!showMenu)}>BURGER</button>;
  } else {
    return (
      <ul>
        <l1>e</l1>
        <l1>e</l1>
        <l1>e</l1>
        <l1>e</l1>
      </ul>
    );
  }
};

export default Navigation;
