import StockList from "../../../components/Generalui/StockList";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { PAGE_CHANGE_SUCCESS } from "../../../reducers/admin";
import {
  ADD_STOCK_SUCCESS,
  LOAD_LIST_REQUEST,
  SOLD_STOCK_FAILURE,
  SOLD_STOCK_SUCCESS,
  UPDATE_STOCK_SUCCESS,
} from "../../../reducers/stock";
import { io } from "socket.io-client";
import { message } from "antd";
import { SOLD_CART_SUCCESS } from "../../../reducers/cart";

const Store = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [IMP, setIMP] = useState(null);

  const { errorMesssage } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch({ type: PAGE_CHANGE_SUCCESS, data: "store" });
  });

  useEffect(() => {
    if (errorMesssage) {
      message.error(errorMesssage);
    }
  }, [errorMesssage]);

  useEffect(() => {
    const { IMP } = window;
    setIMP(IMP);
    dispatch({
      type: LOAD_LIST_REQUEST,
      data: { ShopId: query.ShopId },
    });
  }, []);

  useEffect(() => {
    const socket = io(process.env.BACKEND_IP, {
      cors: { origin: true },
    });

    socket.on("connection", (data) => {
      return console.log(data);
    });

    socket.emit("client:id", { id: query.ShopId });

    socket.on("server:id", (data) => {
      console.log("server:id");
      return console.log(data);
    });

    socket.on("server:add", (data) => {
      console.log(data);
      return dispatch({
        type: ADD_STOCK_SUCCESS,
        data,
      });
    });
    socket.on("server:sold", (data) => {
      return dispatch({ type: SOLD_STOCK_SUCCESS, data });
    });

    socket.on("server:sold:error", (data) => {
      return dispatch({ type: SOLD_STOCK_FAILURE, data });
    });

    socket.on("server:update", (data) => {
      return dispatch({ type: UPDATE_STOCK_SUCCESS, data });
    });
  });

  return (
    <>
      <StockList />
    </>
  );
};

export default Store;
