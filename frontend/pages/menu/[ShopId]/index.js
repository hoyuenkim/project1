import { LOAD_PRODUCTS_REQUEST } from "../../../reducers/menu";
import MenuBoard from "../../../components/Generalui/MenuBoard";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { PAGE_CHANGE_SUCCESS } from "../../../reducers/admin";
import { io } from "socket.io-client";

const Index = () => {
  const [IMP, setIMP] = useState(null);
  const dispatch = useDispatch();
  const { query } = useRouter();

  useEffect(() => {
    dispatch({ type: PAGE_CHANGE_SUCCESS, data: "menu" });
  });

  useEffect(() => {
    const { IMP } = window;
    setIMP(IMP);
    dispatch({ type: LOAD_PRODUCTS_REQUEST, data: { ShopId: query.ShopId } });
  }, []);

  useEffect(() => {
    // console.log("socket");
    const socket = io(process.env.BACKEND_IP, {
      // path: "/stock",
      cors: { origin: true },
    });

    socket.on("connection", (data) => {
      console.log(data);
    });

    socket.emit("client:id", { id: query.ShopId });

    socket.on("server:id", (data) => {
      console.log(data);
    });
  });

  const isMenu = true;

  return (
    <>
      <MenuBoard isMenu={isMenu} />
    </>
  );
};

export default Index;
