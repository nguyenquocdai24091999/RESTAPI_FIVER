import React, { useState } from "react";
import "./AdminLayout.css";
import {
  OrderedListOutlined,
  UserOutlined,
  DeploymentUnitOutlined,
  NodeIndexOutlined,
  DownOutlined 
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoAction } from "../../store/actions/userAction";
// import { setUserInfoAction } from "../../store/actions/userAction";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, path, children) {
  return {
    key,
    icon,
    children,
    label,
    path,
  };
}

const items = [
  getItem("Manage User", "1", <UserOutlined />, "/admin/user-management"),
  getItem("Manage Job", "2", <OrderedListOutlined />, "/admin/job-management"),
  getItem(
    "Manage JobType",
    "3",
    <DeploymentUnitOutlined />,
    "/admin/job-type-management"
  ),
  getItem(
    "Manage Service",
    "4",
    <NodeIndexOutlined />,
    "/admin/service-management"
  ),
];

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const renderUser = () => {
    if (userState.userInfo) {
      return (
        <>
          <div className="user-header dropdown ml-sm-4 ml-1">
            <a
              href
              className="user-profile"
              role="button"
              data-toggle="dropdown"
            >
              <div className="user-info">
                <i
                  className="fa-solid fa-user mr-1"
                  style={{ fontSize: "16px" }}
                />
                <img
                  src={userState.userInfo.user.avatar}
                  alt="User Avatar"
                  style={{ width: "16px", height: "16px", marginRight: "4px" }}
                />
                {userState.userInfo.user.name}
                <DownOutlined />
              </div>
            </a>
            <div className="dropdown-menu">
              <button
                onClick={() => navigate("/profile")}
                className="dropdown-item profile"
              >
                <i className="fa-solid fa-user" />
                Cập nhật thông tin
              </button>
              <button onClick={logout} className="dropdown-item logout">
                <i className="fa-solid fa-arrow-right-from-bracket" />
                Đăng xuất
              </button>
            </div>
          </div>
        </>
      );
    }
  };
  const logout = () => {
    if (window.confirm("Bạn có chắc muốn đăng xuất không?")) {
      localStorage.removeItem("USER_INFO");
      dispatch(setUserInfoAction(null));
      navigate("/");
      alert("Đăng xuất thành công!");
    }
  };
  const location = useLocation();
  const selectedKey =
    items.find((item) => item.path === location.pathname)?.key || "1";
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" selectedKeys={[selectedKey]} mode="inline">
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.path ? (
                <NavLink to={item.path}>{item.label}</NavLink>
              ) : (
                item.label
              )}
              {item.children &&
                item.children.map((child) => (
                  <Menu.Item key={child.key}>
                    {child.path ? (
                      <NavLink to={child.path}>{child.label}</NavLink>
                    ) : (
                      child.label
                    )}
                  </Menu.Item>
                ))}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{
              margin: "16px 0 ",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {renderUser()}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
