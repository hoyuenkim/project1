import { Card, Col, Space, Row, Divider, message, Typography, Modal, Tag } from "antd";
import NumberFormat from "react-number-format";
import StockToggle from "./Generalui/StockToggle";
import { useDispatch } from "react-redux";
import { ADD_CART_ITEM_REQUEST, CLEAR_CART_REQUEST } from "../reducers/cart";
import { INITIATE_QUANTITY_REQUEST } from "../reducers/menu";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import OneSignal from "react-onesignal";
import { onClickPayment } from "./Generalui/Payment";
import ModalInterface from "./Generalui/Modal";

const Product = ({ product, quantity, discount, stock, id }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [IMP, setIMP] = useState();
  const onChangeToggleModal = () => setToggleModal((prev) => !prev);
  const dispatch = useDispatch();

  const { isLoggedIn, session } = useSelector((state) => state.user);

  useEffect(() => {
    const { IMP } = window;
    setIMP(IMP);
  }, []);

  const onClickAddCart = () => {
    const discountedProduct = {
      ...product,
      price: product.price * discount,
      amount: product.price * discount * quantity,
    };
    dispatch({
      type: ADD_CART_ITEM_REQUEST,
      product: discountedProduct,
    });
    dispatch({ type: INITIATE_QUANTITY_REQUEST, data: product });
  };

  const paymentStart = async () => {
    await dispatch({ type: CLEAR_CART_REQUEST });
    return onClickPayment("single", product, isLoggedIn, session, onChangeToggleModal);
  };

  return (
    <>
      <ModalInterface
        content={"로그인을 하셔야 합니다."}
        toggleModal={toggleModal}
        onChangeToggleModal={onChangeToggleModal}
        title={"경고"}
      />
      <Card
        key={product.id}
        title={
          <Space>
            <Typography.Title level={3}>{product.title}</Typography.Title>{" "}
            <Tag color={"magenta"}>-{discount * 100}%</Tag>
          </Space>
        }
        actions={[
          <div onClick={paymentStart}>즉시 구매</div>,
          <div onClick={onClickAddCart}>장바구니</div>,
        ]}
        cover={
          <img
            style={{ border: `1px solid #EFF2F5` }}
            src={
              product &&
              product.Images[0] &&
              `${process.env.BACKEND_IP}/uploads/${product.Images[0].url}`
            }
          />
        }
        hoverable
      >
        <Card.Meta
          description={
            <>
              <Row gutter={[16, 16]} align={"middle"} justify={"end"}>
                <Col md={16} xs={16} style={{ display: "inline-block" }}>
                  <>
                    <h5>가격</h5>
                    <Space align="center">
                      <h1 style={{ color: "#FF5733", fontWeight: "bold" }}>
                        <NumberFormat
                          value={product.price * (1 - discount)}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                        원
                      </h1>
                      <Tag>
                        <NumberFormat
                          value={product.price}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                        원
                      </Tag>
                      {"  "}
                    </Space>
                  </>
                </Col>
                <Col md={8} xs={8}>
                  <StockToggle id={id} quantity={quantity} stock={stock} />
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
                        value={product.price * (1 - discount) * quantity}
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
    </>
  );
};

export default Product;
