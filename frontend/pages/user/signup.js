import { Button, Form, Input, Card, Space, Switch } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInput, useChecked } from '../../components/Generalui/CustomHooks';
import DaumPostcode from 'react-daum-postcode';
import Terms from '../../components/Generalui/Terms';
import axios from 'axios';
import { SIGN_UP_REQUEST } from '../../reducers/user';
import Router from 'next/router';
import { PAGE_CHANGE_SUCCESS } from '../../reducers/admin';

axios.defaults.baseURL = `${process.env.BACKEND_IP}`;
const Signup = () => {
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();
  const [passwordCheck, onChangePasswordCheck] = useInput();
  const [name, onChangeName] = useInput();
  const [shopName, onChangeShopName] = useInput();
  const [bizcode, setBizcode] = useState();
  const [address, setAddress] = useState();
  const [addressDetail, onChangeAddressDetail] = useInput();
  const [termToggle, setTermToggle] = useState(false);
  const [termError, setTermError] = useState(false);
  const [divisionToggle, setDivisionToggle] = useState(false);
  const [addressToggle, setAddressToggle] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  const [
    personalInformationTerm,
    togglePersonalInformationTerm,
    setPersonalInformationTerm,
  ] = useChecked(false);
  const [
    thirdPartyIngormationTerm,
    toggleThirdPartyInformationTerm,
    setThirdPartyInformationTerm,
  ] = useChecked(false);

  const [locationTerm, toggleLocationTerm, setLocationTerm] = useChecked(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: PAGE_CHANGE_SUCCESS, data: 'signup' });
  });

  const onClickTermToggle = () => {
    return setTermToggle(!termToggle);
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddress(fullAddress);

    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${fullAddress}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.KAKAO_APIKEY}`,
          },
        }
      )
      .then((res) => {
        const location = res.data.documents[0];
        console.log(location.address);
        setCoordinates([
          Number(location.address.x),
          Number(location.address.y),
        ]);
      });

    setAddressToggle(false);
  };

  const onFinish = () => {
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        username: email,
        password,
        name,
        bizcode,
        address,
        addressDetail,
        coordinates,
        shopName,
        division: divisionToggle,
      },
    });
    Router.push(`/user/certificate/${email}`);
  };

  const onChangeDivisionToggle = () => {
    setDivisionToggle(!divisionToggle);
  };

  const onChangeBizcode = (e) => {
    setBizcode(e.target.value);
  };

  return (
    <>
      <Card
        title={
          <Space direction="horizental" align={`baseline`} size={`large`}>
            {divisionToggle ? <h1>가맹점</h1> : <h1>일반회원</h1>}
            <Switch
              onClick={onChangeDivisionToggle}
              checkedChildren={`가맹점`}
              unCheckedChildren={`일반회원`}
              size={'middle'}
            />
          </Space>
        }
      >
        <Form onFinish={onFinish} encType={'multipart/form-data'}>
          <Space direction="vertical" size={'large'} style={{ width: '100%' }}>
            <Terms
              setTerms={[
                [
                  personalInformationTerm,
                  togglePersonalInformationTerm,
                  setPersonalInformationTerm,
                ],
                [
                  thirdPartyIngormationTerm,
                  toggleThirdPartyInformationTerm,
                  setThirdPartyInformationTerm,
                ],
              ]}
            />

            <Form.Item
              name="email"
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  message: '이메일를 입력해 주세요!',
                },
                () => ({
                  async validator(rule, value) {
                    const regex = new RegExp(
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
                    );
                    if (value && value.match(regex)) {
                      const result = await axios.post('/user/confirm/email', {
                        email: value,
                      });
                      if (result.data) {
                        return Promise.reject('이미 존재하는 이메일입니다');
                      } else {
                        return Promise.resolve();
                      }
                    } else {
                      return Promise.reject('형식에 맞지 않는 이메일입니다');
                    }
                  },
                }),
              ]}
            >
              <Input
                size={`large`}
                prefix={`* Email`}
                value={email}
                onChange={onChangeEmail}
                placeholder="Email을 입력해주세요"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '비밀번호를 확인해주세요',
                },
                {
                  pattern: /^[A-Za-z0-9]{6,12}$/,
                  message: '비밀번호가 형식에 맞지 않습니다',
                },
              ]}
            >
              <Input.Password
                prefix={`* 비밀번호`}
                size={`large`}
                value={password}
                onChange={onChangePassword}
                placeholder="비밀번호를 입력해주세요"
              />
            </Form.Item>
            <Form.Item
              name="passwordCheck"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: '비밀번호를 확인해 주세요',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('비밀번호가 일치하지 않습니다.');
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={`* 비밀번호 확인`}
                size={`large`}
                value={passwordCheck}
                onChange={onChangePasswordCheck}
                placeholder="다시 비밀번호를 입력해주세요"
              />
            </Form.Item>
            <Form.Item
              name="name"
              rules={[{ required: true, message: '이름을 입력해주세요' }]}
            >
              <Input
                prefix={divisionToggle ? '* 대표자명' : '* 이름'}
                size={`large`}
                onChange={onChangeName}
                value={name}
              />
            </Form.Item>
            {divisionToggle && (
              <>
                <Form.Item
                  name={'shopName'}
                  rules={[{ required: true, message: '점포명을 입력해주세요' }]}
                >
                  <Input
                    prefix={'* 점포명'}
                    size={`large`}
                    onChange={onChangeShopName}
                    value={shopName}
                  />
                </Form.Item>
                <Form.Item
                  name="bizcode"
                  validateTrigger="onBlur"
                  rules={[
                    {
                      required: true,
                      message: '사업자 등록번호를 입력해주세요',
                    },
                    () => ({
                      async validator(rule, value) {
                        if (
                          !value ||
                          !value.match(/\d{1}/g) ||
                          !value.length === 10
                        ) {
                          return Promise.reject(
                            '형식에 맞지 않은 사업자 등록번호입니다'
                          );
                        } else {
                          function checkBizID(bizID) {
                            var checkID = new Array(
                              1,
                              3,
                              7,
                              1,
                              3,
                              7,
                              1,
                              3,
                              5,
                              1
                            );
                            var tmpBizID,
                              i,
                              chkSum = 0,
                              c2,
                              remander;
                            bizID = bizID.replace(/-/gi, '');

                            for (i = 0; i <= 7; i++)
                              chkSum += checkID[i] * bizID.charAt(i);
                            c2 = '0' + checkID[8] * bizID.charAt(8);
                            c2 = c2.substring(c2.length - 2, c2.length);
                            chkSum +=
                              Math.floor(c2.charAt(0)) +
                              Math.floor(c2.charAt(1));
                            remander = (10 - (chkSum % 10)) % 10;

                            if (Math.floor(bizID.charAt(9)) == remander)
                              return true;
                            return false;
                          }
                          if (checkBizID(value)) {
                            const result = await axios.post(
                              '/user/confirm/bizcode',
                              {
                                bizcode: value,
                              }
                            );
                            if (!result.data) {
                              return Promise.resolve();
                            } else {
                              return Promise.reject(
                                '이미 존재하는 사업자 등록번호입니다'
                              );
                            }
                          } else {
                            return Promise.reject(
                              '형식에 맞지 않은 사업자 등록번호입니다'
                            );
                          }
                        }
                      },
                    }),
                  ]}
                >
                  <Input
                    prefix={'* 사업자등록번호'}
                    size={`large`}
                    name={'bizcode'}
                    value={bizcode}
                    onChange={onChangeBizcode}
                  />
                </Form.Item>
              </>
            )}
            {addressToggle ? (
              <Card>
                <DaumPostcode
                  onComplete={handleComplete}
                  autoClose={true}
                  height={'10'}
                />
              </Card>
            ) : (
              <Form.Item
                name="address"
                initialValue={address}
                rules={[{ required: true, message: '주소를 입력해주세요' }]}
              >
                <Input
                  prefix="* 주소"
                  name={'address'}
                  readOnly
                  onClick={() => setAddressToggle(true)}
                  size={'large'}
                />
              </Form.Item>
            )}
            <Form.Item>
              <Input
                prefix="* 상세주소"
                name={'addressDetail'}
                onChange={onChangeAddressDetail}
                size={'large'}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: `100%` }}
              >
                제출
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </Card>
    </>
  );
};

export default Signup;
