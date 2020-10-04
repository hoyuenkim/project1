import { Card, Col, Space, Row, Divider, Badge } from "antd";
import NumberFormat from "react-number-format";
import AmountToggle from "./Generalui/AmountToggle";
import { useDispatch } from "react-redux";
import { ADD_CART_ITEM_REQUEST } from "../reducers/menu";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const onClickAddCart = () => {
    const { id } = product;
    dispatch({
      type: ADD_CART_ITEM_REQUEST,
      id,
    });
  };

  return (
    <Card
      key={product.id}
      title={
        <>
          <h1 style={{ display: "inline" }}>{product.title}</h1>
        </>
      }
      actions={[<div>즉시 구매</div>, <div onClick={onClickAddCart}>장바구니</div>]}
      cover={
        <img
          style={{ border: `1px solid #EFF2F5` }}
          src={product.Images[0] && `http://localhost:3065/uploads/${product.Images[0].url}`}
        />
      }
      hoverable
    >
      <Card.Meta
        description={
          <>
            <Row gutter={[16]} align={"middle"} justify={"center"}>
              <Col md={16} xs={16}>
                {product.discount ? (
                  <div>
                    <h1 style={{ color: "#FF5733", fontWeight: "bold", display: "inline-block" }}>
                      <NumberFormat
                        value={product.price * (1 - discount)}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                      원
                    </h1>
                    {"  "}
                    <h3 style={{ color: "#AA9C99", display: "inline-block" }}>
                      {(1 - product.discount) * 100}%
                    </h3>
                  </div>
                ) : (
                  <div>
                    <h5>가격</h5>
                    <h1>
                      <NumberFormat
                        value={product.price}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                      원
                    </h1>
                  </div>
                )}{" "}
              </Col>
              <Col md={8} xs={8}>
                <AmountToggle id={product.id} quantity={product.quantity} />
              </Col>
            </Row>
            <Divider />
            <Row align={"middle"} justify={"center"}>
              <Col span={8} xs={8}>
                <div>총 주문금액</div>
              </Col>
              <Col span={16} xs={16}>
                <div style={{ textAlign: "right" }}>
                  <h1>
                    <NumberFormat
                      value={
                        product.discount
                          ? product.price * (1 - product.discount) * product.quantity
                          : product.price * product.quantity
                      }
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                    원
                  </h1>
                </div>
              </Col>
            </Row>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;
