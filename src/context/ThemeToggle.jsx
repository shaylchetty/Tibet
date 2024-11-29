import React from "react";
import { Button, Space } from "antd";
import { BulbOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";

const ThemeToggle = ({
  onToggle,
  backgroundColor,
  color,
  theme,
  themeName,
}) => {
  const icon = theme === "light" ? <MoonOutlined /> : <SunOutlined />;
  const oppositeThemeName = theme === "light" ? "Dark" : "Light";

  return (
    <Space>
      <Button
        type="primary"
        onClick={onToggle}
        style={{
          fontFamily: '"Times", san-serif',
          backgroundColor: backgroundColor,
          color: color,
          outline: "2px solid white",
          outline: theme === "light" ? "2px solid black" : "2px solid white",
        }}
      >
        {icon}
        {oppositeThemeName} Theme
      </Button>
    </Space>
  );
};

export default ThemeToggle;
