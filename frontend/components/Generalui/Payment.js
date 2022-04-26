import axios from 'axios';
import { CLEAR_CART_REQUEST } from '../../reducers/cart';

export const onClickPayment = (
  type,
  product,
  isLoggedIn,
  session,
  onChangeToggleModal,
  dispatch,
  cart,
  router,
  ShopId,
  TableId
) => {
  const onWindowScroll = () => {
    window.scrollTo({ top: 0 });
  };

  let originData;
  let amount = 0;
  let name;
  if (isLoggedIn) {
    if (type == 'single') {
      originData = {
        UserId: session.id,
        UserName: session.name,
        ProductId: product.id,
        ShopId: product.Shop.id,
        price: product.discount
          ? product.price * (100 - product.discount) * 0.01 * product.quantity
          : product.price * product.quantity,
        quantity: product.quantity,
        ShopName: product.Shop.name,
        ProductTitle: product.title,
      };
    } else {
      cart.map(
        (product) =>
          (amount += product.Discount
            ? product.price *
              (100 - product.Discount.rate) *
              0.01 *
              product.quantity
            : product.price * product.quantity)
      );
      name =
        cart.length > 1
          ? `${product.title} 외 ${cart.length - 1} 건`
          : product.title;
      originData = cart.map((product) => {
        return {
          ProductId: product.id,
          ShopId: product.Shop.id,
          UserId: session.id,
          UserName: session.name,
          price: product.Discount
            ? product.price * (100 - product.Discount.rate) * 0.01
            : product.price,
          quantity: product.quantity,
          ShopName: product.Shop.name,
          ProductTitle: product.title,
        };
      });
    }

    const custom_data = JSON.stringify(
      type == 'single' ? [originData] : originData
    );

    if (IMP !== null) {
      onWindowScroll();
      IMP.init(process.env.IAMPORT_KEY);
      const today = Date.now();
      IMP.request_pay(
        {
          pay_method: 'card',
          name: type !== 'cart' ? product.title : name,
          Merchant_uid: 'uid' + today,
          amount:
            type !== 'cart'
              ? product.Discount
                ? product.price *
                  (100 - product.Discount.rate) *
                  0.01 *
                  product.quantity
                : product.price * product.quantity
              : amount,
          custom_data,
        },
        (response) => {
          const { success, merchant_uid, error_msg } = response;
          if (success) {
            axios
              .post(`${process.env.BACKEND_IP}/payments/complete`, {
                data: response,
              })
              .then((res) => {
                console.log(
                  `type: ${type}, ShopId: ${ShopId}, TableId: ${TableId}`
                );
                dispatch({ type: CLEAR_CART_REQUEST });
                if (type == 'cart') {
                  router.push(
                    TableId === undefined
                      ? `/menu/${ShopId}`
                      : `/menu/${ShopId}/${TableId}`
                  );
                }
              })
              .catch((err) => {
                return console.error(err);
              });
          } else {
            alert(`결제 실패: ${error_msg}`);
          }
        }
      );
    }
  } else {
    onChangeToggleModal();
  }
};
