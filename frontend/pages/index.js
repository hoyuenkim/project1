import {
  Card,
  Carousel,
  Image,
  Tag,
  List,
  Switch,
  Avatar,
  Row,
  Col,
  Divider,
  Space,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NumberOutlined, DollarOutlined } from "@ant-design/icons";
import OneSignal from "react-onesignal";
import axios from "axios";
import { useRouter } from "next/router";
import { LOAD_EVENTS_REQUEST, PAGE_CHANGE_SUCCESS } from "../reducers/admin";
import { CLEAR_CART_REQUEST } from "../reducers/cart";
import MapComponent from "../components/Generalui/MapComponent";
import { SET_SHOPCOORDINATES_SUCCESS } from "../reducers/shop";
import NumberFormat from "react-number-format";
import { onClickPayment } from "../components/Generalui/Payment";
import ModalInterface from "../components/Generalui/Modal";
import NearAmountToggle from "../components/Generalui/NearAmountToggle";

const Index = () => {
  axios.defaults.baseURL = `${process.env.BACKEND_IP}`;

  const dispatch = useDispatch();
  const router = useRouter();

  const [toggle, setToggle] = useState(true);
  const onChangeToggle = () => {
    setToggle((prev) => !prev);
  };

  const [toggleModal, setToggleModal] = useState(false);

  const onChangeToggleModal = () => setToggleModal((prev) => !prev);

  const { shopCoordinates } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch({ type: LOAD_EVENTS_REQUEST });
  }, []);

  useEffect(() => {
    dispatch({ type: PAGE_CHANGE_SUCCESS, data: "index" });
  }, []);

  const { events } = useSelector((state) => state.admin);
  const { isLoggedIn, session } = useSelector((state) => state.user);
  const { productsNear } = useSelector((state) => state.shop);

  useEffect(() => {
    if (session && shopCoordinates == undefined) {
      axios
        .post("/", { id: session.id })
        .then((result) => {
          console.log(result);
          dispatch({ type: SET_SHOPCOORDINATES_SUCCESS, data: result.data });
        })
        .catch((err) => console.error(err));
    }
  }, [session, shopCoordinates]);

  const paymentStart = async (product) => {
    dispatch({ type: CLEAR_CART_REQUEST });
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
      {isLoggedIn && session ? (
        <Card
          title={toggle ? "주변 가게" : "추천 메뉴"}
          extra={<Switch onClick={onChangeToggle} />}
        >
          {toggle ? (
            <MapComponent session={session} shopCoordinates={shopCoordinates} />
          ) : (
            <List
              dataSource={productsNear}
              renderItem={(product) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={
                          product.Images[0] &&
                          `${process.env.BACKEND_IP}/uploads/${product.Images[0].url}`
                        }
                      />
                    }
                    description={
                      <Card
                        title={
                          <Space direction={"horizental"}>
                            <Typography.Title
                              level={5}
                            >{`[${product.Shop.name}] ${product.title}`}</Typography.Title>
                            {product.Discount && (
                              <Tag color={"magenta"}>- {product.Discount.rate}%</Tag>
                            )}
                          </Space>
                        }
                        actions={[
                          <div style={{ cursor: "pointer" }} onClick={() => paymentStart(product)}>
                            즉시구매
                          </div>,
                          <div style={{ cursor: "pointer" }}>장바구니</div>,
                        ]}
                      >
                        <Card.Meta
                          description={
                            <>
                              <NearAmountToggle
                                id={product.id}
                                quantity={product.quantity}
                                price={product.price}
                                discount={product.Discount}
                              />
                              <Divider orientation={"left"} style={{ fontSize: "5px" }}></Divider>
                              <div style={{ textAlign: "right" }}>
                                <Typography.Text>
                                  총액:{" "}
                                  <NumberFormat
                                    value={
                                      product.Discount
                                        ? product.price *
                                          (100 - product.Discount.rate) *
                                          0.01 *
                                          product.quantity
                                        : product.price * product.quantity
                                    }
                                    displayType={"text"}
                                    thousandSeparator={true}
                                  />
                                  원
                                </Typography.Text>
                              </div>
                            </>
                          }
                        />
                      </Card>
                    }
                  />
                </List.Item>
              )}
            />
          )}
        </Card>
      ) : (
        <Card>
          <Card.Meta
            description={
              <div style={{ height: "100vh", width: "100%" }}>
                <Carousel autoplay dots={false}>
                  {events.map((event) => (
                    <Image
                      onClick={router.push(`/event/${event.id}`)}
                      style={{ height: "100vh", width: "100%" }}
                      src={`${process.env.BACKEND_IP}/uploads/${event.Images[0].url}`}
                    />
                  ))}
                </Carousel>
              </div>
            }
          />
        </Card>
      )}
    </>
  );
};

export default Index;
