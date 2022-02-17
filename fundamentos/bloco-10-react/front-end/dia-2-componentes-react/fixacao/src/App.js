import React from "react";
import './App.css';
import UserProfile from "./componentes/userProfile";

class App extends React.Component {
  render(){
    const joao = {
      id: 102,
      name: "Joao",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    return (
      <>
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </>
    )
  }
}

export default App;
