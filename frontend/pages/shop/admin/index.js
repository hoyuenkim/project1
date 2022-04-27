import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Card, Button, Modal, List, Comment, Form, Input } from "antd";
import { ADD_SHOP_REQUEST } from "../../../reducers/user";
import { useInput } from "../../../components/Generalui/CustomHooks";
import ShopAddForm from "../../../components/Forms/ShopAddForm";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { session, isLoggedIn } = useSelector((state) => state.user);
  const [modal, setModal] = useState(false);
  const [shopName, onChangeShopName] = useInput();
  const [address, setAddress] = useState();
  const [addressDetail, onChangeAddressDetail] = useInput();
  const [coordinates, setCoordinates] = useState();

  if (!session || !isLoggedIn) {
    router.push("/");
  }

  const onClickAddShop = () => {
    return setModal((prev) => !prev);
  };

  const onFinish = () => {
    dispatch({
      type: ADD_SHOP_REQUEST,
      data: {
        UserId: session.id,
        shopName,
        address,
        addressDetail,
        bizcode: session.Shops[0].bizcode,
        coordinates,
      },
    });
    return setModal(false);
  };

  return (
    <>
      <Modal visible={modal} onCancel={onClickAddShop} title={"점포 추가"} footer={null}>
        <ShopAddForm
          onFinish={onFinish}
          onChangeShopName={onChangeShopName}
          address={address}
          setAddress={setAddress}
          onChangeAddressDetail={onChangeAddressDetail}
          setCoordinates={setCoordinates}
        />
      </Modal>
      <Card
        title={session ? `${session.name}님의 매장 리스트` : "매장 리스트"}
        extra={<Button onClick={onClickAddShop}>매장추가</Button>}
      >
        {session.Shops.map((shop) => (
          <Card
            title={shop.name}
            actions={[
              <div onClick={() => router.push(`/shop/admin/${shop.id}`)}>매장관리</div>,
              <div>매장삭제</div>,
            ]}
          ></Card>
        ))}
      </Card>
    </>
  );
};

export default Index;
