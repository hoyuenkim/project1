import { List, Avatar, Card, Button, Row, Col, Divider, Empty, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RestOutlined } from "@ant-design/icons";
import CartAmountToggle from "../../components/Generalui/CartAmoutToggle";
import NumberFormat from "react-number-format";
import { REMOVE_ITEM_REQUEST, CLEAR_CART_REQUEST } from "../../reducers/cart";
import { useState, useEffect } from "react";
import { useWindowSize } from "@react-hook/window-size";
import axios from "axios";
import { useRouter } from "next/router";
import { onClickPayment } from "../../components/Generalui/Payment";
import ModalInterface from "../../components/Generalui/Modal";
import { PAGE_CHANGE_SUCCESS } from "../../reducers/admin";
import { io } from "socket.io-client";

const Cart = () => {
  const dispatch = useDispatch();
  const [IMP, setIMP] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);
  const { cart, ShopId, TableId } = useSelector((state) => state.cart);
  const { isLoggedIn, session } = useSelector((state) => state.user);
  const [windowWidth, windowHeight] = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    const socket = io(process.env.BACKEND_IP, {
      cors: { origin: true },
    });

    socket.on("connection", (data) => {
      return console.log(data);
    });

    socket.emit("client:id", { id: 0 });

    socket.on("server:id", (data) => {
      return console.log(data);
    });

    socket.on("server:sold:cart", (data) => {
      return dispatch({ type: SOLD_CART_SUCCESS, data });
    });

    socket.on("server:update", (data) => {
      return dispatch({ type: UPDATE_STOCK_SUCCESS, data });
    });
  });

  const onChangeToggleModal = () => setToggleModal((prev) => !prev);

  const product = cart[0];
  console.log(product);

  const paymentStart = async () => {
    onClickPayment({
      type: "cart",
      product,
      isLoggedIn,
      session,
      onChangeToggleModal,
      dispatch,
      cart,
      router,
      ShopId,
      TableId,
    });
  };

  useEffect(() => {
    dispatch({ type: PAGE_CHANGE_SUCCESS, data: "cart" });
  }, []);

  return (
    <>
      <ModalInterface
        content={"로그인을 하셔야 합니다."}
        toggleModal={toggleModal}
        onChangeToggleModal={onChangeToggleModal}
        title={"경고"}
      />
      {cart.length === 0 ? (
        <Card style={{ height: "100vh" }}>
          <div style={{ marginTop: windowHeight * 0.3, textAlign: "center" }}>
            <Empty />
            <h1>장바구니가 비었습니다</h1>
          </div>
        </Card>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={cart}
          renderItem={(item) => (
            <List.Item>
              <Card
                title={<h1>{item.product.title}</h1>}
                style={{ width: "100%" }}
                extra={
                  <h2>
                    <RestOutlined
                      onClick={() => {
                        dispatch({ type: REMOVE_ITEM_REQUEST, id: item.id });
                      }}
                    />
                  </h2>
                }
              >
                <Card.Meta
                  description={
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          size={100}
                          shape="square"
                          src={`${process.env.BACKEND_IP}/uploads/${item.product.Images[0].url}`}
                        />
                      }
                      description={
                        <Row gutter={[8, 16]}>
                          <Col span={24}>{item.description}</Col>
                          <Col span={16}>
                            가격:{" "}
                            <NumberFormat
                              value={
                                item.Discount
                                  ? item.price * (100 - item.Discount.rate) * 0.01
                                  : item.discount
                                  ? item.product.price * (1 - item.discount)
                                  : item.price
                              }
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </Col>
                          <Col span={8}>
                            <Space direction={"vertical"}>
                              <Row gutter={[0, 10]}>
                                <Col span={14}>남은수량:</Col>
                                <Col span={10}>{item.stock}개</Col>
                              </Row>
                              <CartAmountToggle
                                id={item.id}
                                quantity={item.quantity}
                                price={item.product.price}
                                discount={item.discount}
                              />
                            </Space>
                          </Col>
                        </Row>
                      }
                    />
                  }
                />
                <Divider />
                <Row gutter={[8, 16]}>
                  <Col style={{ textAlign: "right" }} span={24}>
                    총액:{" "}
                    <NumberFormat
                      value={
                        item.Discount
                          ? item.product.price * (100 - item.Discount.rate) * 0.01 * item.quantity
                          : item.discount
                          ? item.product.price * (1 - item.discount) * item.quantity
                          : item.product.price * item.quantity
                      }
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      )}
      {cart.length > 0 && (
        <Button onClick={paymentStart} type={"primary"} style={{ width: "100%" }}>
          결제하기
        </Button>
      )}
    </>
  );
};

export default Cart;
