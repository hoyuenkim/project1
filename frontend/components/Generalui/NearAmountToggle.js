import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { NEAR_ADD_QUANTITY_REQUEST, NEAR_SUBSTRACT_QUANTITY_REQUEST } from "../../reducers/shop";
import { Col, Row, Typography, Input, Space } from "antd";
import NumberFormat from "react-number-format";

const NearAmountToggle = ({ id, quantity, price, discount }) => {
  console.log(quantity);
  const dispatch = useDispatch();
  const onClickAdd = () => {
    try {
      dispatch({ type: NEAR_ADD_QUANTITY_REQUEST, data: { id } });
    } catch (e) {
      console.log(e);
    }
  };
  const onClickSubstract = () => {
    dispatch({ type: NEAR_SUBSTRACT_QUANTITY_REQUEST, data: { id } });
  };
  console.log(discount);
  return (
    <Row>
      <Col span={16}>
        <div style={{ display: "inline-block" }}>
          할인가:{" "}
          <NumberFormat
            thousandSeparator={true}
            value={price * ((100 - discount.rate) * 0.01)}
            displayType={"text"}
          />
          원
        </div>
      </Col>
      <Col span={8} style={{ textAlign: "right" }}>
        <Input
          style={{
            textAlign: "center",
            verticalAlign: "middle",
          }}
          value={quantity}
          size={"small"}
          readOnly
          maxLength={1}
          addonBefore={<PlusOutlined onClick={onClickAdd} />}
          addonAfter={<MinusOutlined onClick={onClickSubstract} />}
        />
      </Col>
    </Row>
  );
};

export default NearAmountToggle;
