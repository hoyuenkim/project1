import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import MenuNavibarLayout from "../components/Layout/MenuNavibarLayout ";
import { Col, Row, PageHeader, Card, Space, Affix } from "antd";
import { LOAD_PRODUCTS_REQUEST } from "../reducers/menu";
import { useEffect } from "react";

const Menu = ({ shopId, tableId }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.menu);
  useEffect(() => {
    dispatch({
      type: LOAD_PRODUCTS_REQUEST,
      data: { shopId, tableId },
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
                    <ProductCard product={product} quantity={1} />
                  </Col>
                );
              })}
          </Row>
        </Space>
      </Card>
    </>
  );
};

Menu.getInitialProps = async (context) => {
  const { shopId, tableId } = context.query;
  return { shopId: parseInt(shopId, 10), tableId: parseInt(tableId, 10) };
};

export default Menu;
