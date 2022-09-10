import { Card, Carousel, Image, List, Switch } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import { LOAD_EVENTS_REQUEST, PAGE_CHANGE_SUCCESS } from "../reducers/admin";
import { CLEAR_CART_REQUEST } from "../reducers/cart";
import MapComponent from "../components/Generalui/MapComponent";
import { SET_SHOPCOORDINATES_SUCCESS } from "../reducers/shop";
import { onClickPayment } from "../components/Generalui/Payment";
import ModalInterface from "../components/Generalui/Modal";
import StockList from "../components/Generalui/StockList";
import { LOAD_LIST_SUCCESS } from "../reducers/stock";

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
  const { stocks } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch({ type: LOAD_EVENTS_REQUEST });
  }, []);

  useEffect(() => {
    dispatch({ type: PAGE_CHANGE_SUCCESS, data: "index" });
  }, []);

  const { events } = useSelector((state) => state.admin);
  const { isLoggedIn, session } = useSelector((state) => state.user);

  useEffect(() => {
    if (session && shopCoordinates === undefined) {
      console.log("start");
      axios
        .post("/stock", { id: session.id })
        .then((result) => {
          console.log(result);
          dispatch({ type: SET_SHOPCOORDINATES_SUCCESS, data: result.data });
          dispatch({ type: LOAD_LIST_SUCCESS, data: result.data });
        })
        .catch((err) => console.error(err));
    }
  }, [session, shopCoordinates]);

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
            <StockList />
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
