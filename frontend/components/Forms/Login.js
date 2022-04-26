import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, message, Card, Space } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { LOG_IN_REQUEST } from '../../reducers/user';
import Link from 'next/link';
import Router from 'next/router';

const Login = ({
  setToggleLogin,
  username,
  onChangeUsername,
  setUsername,
  password,
  onChangePassword,
  setPassword,
}) => {
  const dispatch = useDispatch();

  const { loginError } = useSelector((state) => state.user);

  useEffect(() => {
    if (loginError) {
      message.error(loginError);
    }
  }, [loginError]);

  const { isLoggedIn } = useSelector((state) => state.user);
  useEffect(() => {
    if (isLoggedIn) {
      setToggleLogin(false);
    }
  });

  const onClickSignUp = () => {
    setToggleLogin(false);
    Router.push('/user/signup');
  };

  const onFinish = useCallback(() => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        username,
        password,
      },
    });
  }, [username, password]);

  return (
    <>
      <Card style={{ verticalAlign: 'middle' }}>
        <Form onFinish={onFinish}>
          <Space direction="vertical" size={'large'} style={{ width: '100%' }}>
            <Form.Item
              name={'email'}
              rules={[
                { required: true, message: '이메일을 입력해주세요' },
                { type: 'email', message: '형식에 맞지 않는 아이디입니다' },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                size={'large'}
                name={'email'}
                onChange={onChangeUsername}
              />
            </Form.Item>
            <Form.Item
              name={'password'}
              rules={[
                { required: true, message: '비밀번호를 입력해주세요' },
                {
                  pattern: /^[0-9a-zA-Z]{6,12}$/,
                  message: '형식에 맞지 않는 비밀번호입니다',
                },
              ]}
            >
              <Input.Password
                name={'password'}
                prefix={<LockOutlined />}
                size={'large'}
                onChange={onChangePassword}
              />
            </Form.Item>
            <Button
              type={'primary'}
              htmlType={'submit'}
              style={{ width: '100%' }}
            >
              Login
            </Button>

            <Button style={{ width: '100%' }} onClick={onClickSignUp}>
              회원가입
            </Button>
          </Space>
        </Form>
      </Card>
    </>
  );
};

export default Login;
