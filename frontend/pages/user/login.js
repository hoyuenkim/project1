import { Input, Card, Button, Space, Form, PageHeader } from "antd";
import { useInput } from "../../components/Generalui/CustomHooks";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { LOG_IN_REQUEST } from "../../reducers/user";
import Link from "next/link";
import Router from "next/router";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const [username, onChangeUsername] = useInput();
  const [password, onChangePassword] = useInput();
  const dispatch = useDispatch();

  const onFinish = useCallback(() => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        username,
        password,
      },
    });
    Router.push("/");
  }, [username, password]);

  const { session } = useSelector((state) => state.user);

  return (
    <>
      <Card style={{ height: `100vh`, verticalAlign: `middle` }}>
        <Form onFinish={onFinish}>
          <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
            <h1>Login</h1>
            <Form.Item
              name={"email"}
              rules={[
                { required: true, message: "이메일을 입력해주세요" },
                { type: "email", message: "형식에 맞지 않는 아이디입니다" },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                size={`large`}
                name={"email"}
                value={username}
                onChange={onChangeUsername}
              />
            </Form.Item>
            <Form.Item
              name={"password"}
              rules={[
                { required: true, message: "비밀번호를 입력해주세요" },
                { pattern: /^[0-9a-zA-Z]{6,12}$/, message: "형식에 맞지 않는 비밀번호입니다" },
              ]}
            >
              <Input.Password
                name={"password"}
                value={password}
                prefix={<LockOutlined />}
                size={`large`}
                onChange={onChangePassword}
              />
            </Form.Item>
            <Button type={`primary`} htmlType={`submit`} style={{ width: `100%` }}>
              Login
            </Button>
            <Link href={"/user/signup"}>
              <a>
                <Button style={{ width: `100%` }}>회원가입</Button>
              </a>
            </Link>
          </Space>
        </Form>
      </Card>
    </>
  );
};

export default Login;
