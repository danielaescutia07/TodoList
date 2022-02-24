import React from "react";


import { Menu, Typography } from "antd";
const { Title } = Typography;


function AppHeader() {

    return (
      <Menu>
      <Title style={{textAlign: "center"}}>Dani's To-do List</Title>
      </Menu>
    )
}

export default AppHeader;