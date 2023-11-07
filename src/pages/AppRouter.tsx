import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Ingresar, Cola, CrearTicket, Escritorio } from "./";
import { Layout, Menu, theme } from "antd";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UiContext } from "../context/UiContext";

const { Header, Sider, Content } = Layout;

export const AppRouter = () => {
  const { ocultarMenu } = useContext(UiContext);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={ocultarMenu}
          collapsedWidth="0"
          breakpoint="md"
        >
          <div className="logo" />
          <Menu
            style={{ padding: "10px" }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link to="/ingresar">Login</Link>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <Link to="/cola">Cola</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link to="/crear">Crear</Link>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header></Header>
          <Content
            className="site-layout-background"
            style={{
              // margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/ingresar" element={<Ingresar />}></Route>
              <Route path="/cola" element={<Cola />}></Route>
              <Route path="/crear" element={<CrearTicket />}></Route>
              <Route path="/escritorio" element={<Escritorio />}></Route>
              {/* <Route path="/create" element={< />}></Route> */}

              <Route path="/*" element={<Navigate to="/ingresar" />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
