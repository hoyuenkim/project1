import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import { ADD_ITEM_QUANTITY_REQUEST, SUBSTRACT_ITEM_QUANTITY_REQUEST } from '../../reducers/cart';

const CardAmountToggle = ({ id, quantity }) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    try {
      dispatch({ type: ADD_ITEM_QUANTITY_REQUEST, data: { id } });
    } catch (e) {
      console.log(e);
    }
  };
  const onClickSubstract = () => {
    dispatch({ type: SUBSTRACT_ITEM_QUANTITY_REQUEST, data: { id } });
  };
  return (
    <Input
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
      }}
      value={quantity}
      size={'middle'}
      readOnly
      maxLength={1}
      addonBefore={<PlusOutlined onClick={onClickAdd} />}
      addonAfter={<MinusOutlined onClick={onClickSubstract} />}
    />
  );
};

export default CardAmountToggle;
