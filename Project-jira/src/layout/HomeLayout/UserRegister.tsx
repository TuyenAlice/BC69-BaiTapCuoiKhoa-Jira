import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Register from "../../pages/Register";

const { Header, Footer, Sider, Content } = Layout;

export default function UserRegister() {
  const [{ width, height }, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Effect để xử lý thay đổi kích thước cửa sổ
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: Math.round(window.innerWidth),
        height: Math.round(window.innerHeight),
      });
    };

    // Gán sự kiện resize
    window.addEventListener("resize", handleResize);

    // Cleanup sự kiện resize khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* Sider chứa hình ảnh */}
      <Sider
        width={width}
        style={{
          height: "100vh",
          backgroundImage: `url(https://picsum.photos/${Math.round(
            width / 2
          )}/${height})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
        }}
      />
      <Content
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Register />
      </Content>
    </Layout>
  );
}
