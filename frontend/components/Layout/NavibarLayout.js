import { Menu, Input, Modal, Popover, Space } from 'antd';
import { ArrowLeftOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { LOG_OUT_SUCCESS } from '../../reducers/user';
import LoginModal from '../Forms/Login';
import SearchBarModal from '../Forms/SearchBar';
import ChangePassword from '../Forms/ChangePassword';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useInput } from '../Generalui/CustomHooks';

const NavibarLayout = () => {
  const router = useRouter();
  const [username, onChangeUsername, setUsername] = useInput();
  const [password, onChangePassword, setPassword] = useInput();

  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleChangePassword, setToggleChangePassword] = useState(false);
  // const [searchShow, setSearchShow] = useState(false);
  const [show, setShow] = useState(false);

  const hideHandler = () => {
    setShow(false);
  };

  const showHandler = (show) => {
    setShow(show);
  };

  const onToggleChangePassword = () => {
    hideHandler();
    setToggleChangePassword((prev) => !prev);
  };

  const dispatch = useDispatch();
  const onClickLogout = () => {
    setPassword('');
    setUsername('');
    dispatch({ type: LOG_OUT_SUCCESS });
  };

  const onToggleLogin = () => {
    setPassword('');
    setUsername('');
    setToggleLogin((prev) => !prev);
  };

  const onToggleSearch = () => {
    setToggleSearch((prev) => !prev);
  };

  const onClickPayments = () => {
    router.push('/payments');
    hideHandler();
  };

  const onClickAdmin = () => {
    router.push('/shop/admin');
    hideHandler();
  };

  const { isLoggedIn, session } = useSelector((state) => state.user);
  const { originProducts } = useSelector((state) => state.menu);

  return (
    <>
      <Modal
        title={'Login'}
        visible={toggleLogin}
        onCancel={onToggleLogin}
        footer={null}
      >
        <LoginModal
          setToggleLogin={setToggleLogin}
          username={username}
          onChangeUsername={onChangeUsername}
          password={password}
          onChangePassword={onChangePassword}
        />
      </Modal>
      <Modal
        title={'Search'}
        visible={toggleSearch}
        onCancel={onToggleSearch}
        footer={null}
      >
        <SearchBarModal type={'product'} setToggleSearch={setToggleSearch} />
      </Modal>
      <Modal
        title={'Change Password'}
        visible={toggleChangePassword}
        onCancel={onToggleChangePassword}
        footer={null}
      >
        <ChangePassword setToggleChangePassword={setToggleChangePassword} />
      </Modal>
      <div style={{ marginTop: '10px', backGroundColor: 'white' }}>
        <Menu mode="horizontal">
          <Menu.Item key={'back'}>
            <ArrowLeftOutlined onClick={() => Router.back()} />
          </Menu.Item>

          <Menu.Item key={'search'} style={{ float: 'right' }}>
            {originProducts.length > 0 ? (
              <Input.Search
                enterButton
                style={{ verticalAlign: 'middle' }}
                onClick={onToggleSearch}
                readOnly
              />
            ) : (
              <Input.Search
                enterButton
                style={{ verticalAlign: 'middle', visibility: 'hidden' }}
                disabled={true}
                onClick={onToggleSearch}
                readOnly
              />
            )}
          </Menu.Item>

          {!isLoggedIn
            ? [
                <Menu.Item key={'login'}>
                  <a onClick={onToggleLogin}>로그인</a>
                </Menu.Item>,
              ]
            : [
                <Menu.Item key={'profile'}>
                  <Popover
                    trigger={'click'}
                    placement={'bottom'}
                    title={session.name}
                    visible={show}
                    onVisibleChange={showHandler}
                    content={
                      <>
                        <Space direction={'vertical'}>
                          <div onClick={onToggleChangePassword}>
                            비밀번호 변경
                          </div>
                          <div onClick={onClickPayments}>결제이력</div>
                          {session.division === true && (
                            <div onClick={onClickAdmin}>매장관리 페이지</div>
                          )}
                        </Space>
                      </>
                    }
                  >
                    <UserOutlined />
                  </Popover>
                </Menu.Item>,
                <Menu.Item style={{ float: 'right' }} key={'logout'}>
                  <a onClick={onClickLogout}>로그아웃</a>
                </Menu.Item>,
              ]}
        </Menu>
      </div>
    </>
  );
};

export default NavibarLayout;
