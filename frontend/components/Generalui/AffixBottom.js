import { Button, Affix } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { GET_SHOP_TABLE_ID } from '../../reducers/cart';

const AffixBottom = ({ cart, windowSize, menuNaviSize, naviSize, children }) => {
  const { windowHeight, windowWidth } = windowSize;
  const { menuNaviHeight, menuNaviWidth } = menuNaviSize;
  const router = useRouter();
  const dispatch = useDispatch();

  const { ShopId, TableId } = router.query;

  let amount = 0;
  cart.map((product) => (amount += product.quantity));

  return (
    <>
      <Affix
        style={{ position: 'absolute', left: menuNaviWidth * 0.05 }}
        offsetTop={windowHeight * 0.9 - menuNaviHeight}
      >
        <Button
          onClick={() => {
            dispatch({ type: GET_SHOP_TABLE_ID, data: { ShopId, TableId } });
            router.push(`/cart`);
          }}
          type="primary"
          size="large"
          icon={<ShoppingCartOutlined />}
        >
          {amount}개의 상품이 담겨 있습니다.
        </Button>
      </Affix>
    </>
  );
};

export default AffixBottom;
