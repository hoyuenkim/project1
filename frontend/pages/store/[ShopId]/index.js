import StockList from "../../../components/Generalui/StockList";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { PAGE_CHANGE_SUCCESS } from "../../../reducers/admin";
import { LOAD_LIST_REQUEST } from "../../../reducers/stock";

export default () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [IMP, setIMP] = useState(null);

  useEffect(() => {
    dispatch({ type: PAGE_CHANGE_SUCCESS, data: "store" });
  });

  useEffect(() => {
    const { IMP } = window;
    setIMP(IMP);
    dispatch({
      type: LOAD_LIST_REQUEST,
      data: { ShopId: query.ShopId },
    });
  }, []);

  return (
    <>
      <StockList />
    </>
  );
};
