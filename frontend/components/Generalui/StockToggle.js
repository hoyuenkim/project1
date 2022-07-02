import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { PLUS_QUANTITY_SUCCESS, MINUS_QUANTITY_SUCCESS } from "../../reducers/stock";
import { Input } from "antd";

const AmountToggle = ({ id, quantity, stock }) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    try {
      dispatch({ type: PLUS_QUANTITY_SUCCESS, data: { id } });
    } catch (e) {
      console.log(e);
    }
  };
  const onClickSubstract = () => {
    dispatch({ type: MINUS_QUANTITY_SUCCESS, data: { id } });
  };
  return (
    <Input
      style={{
        textAlign: "center",
        verticalAlign: "middle",
      }}
      value={quantity}
      size={"large"}
      readOnly
      maxLength={1}
      addonBefore={<PlusOutlined onClick={onClickAdd} />}
      addonAfter={<MinusOutlined onClick={onClickSubstract} />}
    />
  );
};

export default AmountToggle;
