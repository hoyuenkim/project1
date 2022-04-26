import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { ADD_QUANTITY_SUCCESS, SUBSTRACT_QUANTITY_SUCCESS } from '../../reducers/menu';
import { Input } from 'antd';

const AmountToggle = ({ id, quantity }) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    try {
      dispatch({ type: ADD_QUANTITY_SUCCESS, data: { id } });
    } catch (e) {
      console.log(e);
    }
  };
  const onClickSubstract = () => {
    dispatch({ type: SUBSTRACT_QUANTITY_SUCCESS, data: { id } });
  };
  return (
    <Input
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
      }}
      value={quantity}
      size={'large'}
      readOnly
      maxLength={1}
      addonBefore={<PlusOutlined onClick={onClickAdd} />}
      addonAfter={<MinusOutlined onClick={onClickSubstract} />}
    />
  );
};

export default AmountToggle;
