import { Menu, Input, PageHeader } from "antd";
import Link from "next/link";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import Router from "next/router";
import { LOG_OUT_REQUEST } from "../../reducers/user";
const NavibarLayout = () => {
  const dispatch = useDispatch();
  const onClickLogout = () => {
    dispatch({ type: LOG_OUT_REQUEST });
  };

  const { session, isLoggedIn } = useSelector((state) => state.user);
  return (
    <div style={{ marginTop: "10px", backGroundColor: "white" }}>
      <Menu mode="horizontal">
        <Menu.Item>
          <ArrowLeftOutlined onClick={() => Router.back()} />
        </Menu.Item>
        {!isLoggedIn
          ? [
              <Menu.Item style={{ float: "right" }} key={"login"}>
                <Link href={"/user/login"} key={"login"}>
                  <a>로그인</a>
                </Link>
              </Menu.Item>,
            ]
          : [
              <Menu.Item style={{ float: "right" }} key={"logout"}>
                <a onClick={onClickLogout}>로그아웃</a>
              </Menu.Item>,
              <Menu.Item key={"profile"} style={{ float: "right" }} key={"profile"}>
                <Link href={"/user/profile"}>
                  <a>
                    <UserOutlined />
                  </a>
                </Link>
              </Menu.Item>,
            ]}
        <Menu.Item key={"search"} style={{ float: "right" }} key={"search"}>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} size={`large`} />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavibarLayout;
