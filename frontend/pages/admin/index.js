import { Card, List, Button, Row, Col } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PAGE_CHANGE_SUCCESS } from '../../reducers/admin';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: PAGE_CHANGE_SUCCESS, data: 'admin' });
  });
  return (
    <>
      <Card title={'관리자페이지'}>
        <Card.Meta
          style={{ height: '100vh', width: '100%' }}
          description={
            <Row>
              <Col span={12}>
                <Card>hello0</Card>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={24}>
                    <Card>hello</Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card>hello2</Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          }
        />
      </Card>
    </>
  );
};

export default Index;
