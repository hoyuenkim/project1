import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import MenuNavibarLayout from "../components/Layout/MenuNavibarLayout ";
import { Col, Row, Card, Space, Affix } from "antd";
import { LOAD_PRODUCTS_REQUEST } from "../reducers/menu";
import { useEffect } from "react";

const Index = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.menu);
  useEffect(() => {
    dispatch({
      type: LOAD_PRODUCTS_REQUEST,
    });
  }, []);
  return (
    <>
      <Card>
        <Space direction="vertical" size={"middle"}>
          <Affix offSet={"top"}>
            <MenuNavibarLayout menus={[`메인`, `요리`, `주류`]} />
          </Affix>
          <Row gutter={[16, 16]}>
            {products &&
              products.map((product) => {
                return (
                  <Col sm={12} xs={24} key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                );
              })}
          </Row>
        </Space>
      </Card>
    </>
  );
};

export default Index;
