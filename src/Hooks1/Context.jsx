import { useState, createContext, useContext } from "react";
const UserContext = createContext();

//producer part
function Component1() {
  const [user] = useState("linus");
  return (
    <UserContext.Provider value={user}>
      <h1>Component 1</h1>
      <h2>{`Hello ${user}!`}</h2>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

//consumer part
function Component3() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Component1;
