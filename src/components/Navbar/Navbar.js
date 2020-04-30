import React from "react";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import { Menu } from "antd";
import Icon from "@ant-design/icons";

export const Navbar = () => (
  <Menu mode="horizontal">
    <Menu.Item>
      <Link to="/">
        <Icon type="home" /> Home
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="popular">
        <Icon type="heart-o" /> Popular
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="upcoming">
        <Icon type="like-o" /> Coming Soon
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="nowplaying">
        <Icon type="rocket" /> Now Playing
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="toprated">
        <Icon type="star-o" /> Top Rated
      </Link>
    </Menu.Item>
  </Menu>
);
