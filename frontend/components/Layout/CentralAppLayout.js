import { Col, Row } from 'antd';
import NavibarLayout from './NavibarLayout';

const CentralAppLayout = ({ children }) => {
  return (
    <>
      <Row gutter={10}>
        <Col xs={0} md={7} />
        <Col xs={24} md={10}>
          <NavibarLayout />
          {children}
        </Col>
        <Col xs={0} md={7} />
      </Row>
    </>
  );
};

export default CentralAppLayout;
