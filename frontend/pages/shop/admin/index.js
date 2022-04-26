import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import {
  Empty,
  Card,
  Space,
  List,
  Button,
  Avatar,
  Modal,
  Popconfirm,
} from 'antd';
import {
  ADMIN_PRODUCTS_REQUEST,
  DELETE_CATEGORY_REQUEST,
} from '../../../reducers/shop';

import CategoryForm from '../../../components/Forms/CategoryForm';

import { PAGE_CHANGE_SUCCESS } from '../../../reducers/admin';

const Index = () => {
  const dispatch = useDispatch();
  const { session, division } = useSelector((state) => state.user);
  const router = useRouter();

  if (!session || session.division === false) {
    return router.back();
  } else {
    useEffect(() => {
      dispatch({ type: ADMIN_PRODUCTS_REQUEST, ShopId: session.Shops[0].id });
    }, []);
  }

  const { products, categories } = useSelector((state) => state.shop);

  if (division === false || session === undefined) {
    router.back();
  }

  const [category, setCategory] = useState(false);
  const [item, setItem] = useState();

  const onToggleCategory = (item) => {
    setItem(item);
    setCategory((prev) => !prev);
  };

  const onClickDelete = (item) => {
    dispatch({ type: DELETE_CATEGORY_REQUEST, data: { id: item.id } });
  };

  useEffect(() => {
    dispatch({ type: PAGE_CHANGE_SUCCESS, data: 'admin' });
  }, []);

  return (
    <>
      {category && (
        <Modal
          title={'카테고리'}
          visible={category}
          onCancel={() => {
            setCategory(false);
          }}
          footer={null}
        >
          <CategoryForm
            item={item}
            ShopId={session.Shops[0].id}
            setCategory={setCategory}
            setItem={setItem}
          />
        </Modal>
      )}
      <Space direction={'vertical'} style={{ width: '100%' }}>
        <Card
          title={'카테고리 관리'}
          extra={
            categories && categories.length < 5 ? (
              <Button onClick={() => onToggleCategory()}>카테고리 추가</Button>
            ) : (
              <div>카테고리는 최대 5개까지 설정하실 수 있습니다.</div>
            )
          }
        >
          {categories.length > 0 ? (
            <List
              dataSource={categories}
              renderItem={(item, i) => (
                <>
                  <List.Item
                    key={i}
                    actions={[
                      <div onClick={() => onToggleCategory(item)}>수정</div>,
                      <Popconfirm
                        title={
                          <>
                            {item.name}을 정말로 삭제하시겠습니까?
                            <br />
                            카테고리에 해당하는 모든 상품이 삭제됩니다.
                          </>
                        }
                        onConfirm={() =>
                          dispatch({
                            type: DELETE_CATEGORY_REQUEST,
                            data: { id: item.id },
                          })
                        }
                        onCancel={() => console.log('cancel')}
                        okText="Yes"
                        cancelText="No"
                      >
                        <div>삭제</div>
                      </Popconfirm>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar>{i + 1}</Avatar>}
                      title={item.name}
                    />
                  </List.Item>
                </>
              )}
            />
          ) : (
            <Empty>카테고리를 추가해주세요.</Empty>
          )}
        </Card>
        {products.length > 0 && (
          <Card
            title={'상품정보'}
            extra={
              <Button onClick={() => router.push('/shop/admin/product')}>
                상품관리
              </Button>
            }
          >
            <Card.Meta
              title={
                <Avatar.Group maxCount={10}>
                  {products.map((product, i) => (
                    <Avatar
                      key={i}
                      src={`${process.env.BACKEND_IP}/uploads/${product.Images[0].url}`}
                    />
                  ))}
                </Avatar.Group>
              }
              description={
                products.length > 1
                  ? `${products[0].title} 외 ${
                      products.length - 1
                    }개의 상품이 존재하고 있습니다.`
                  : `${products[0].title} 상품이 존재하고 있습니다.`
              }
            />
          </Card>
        )}
        {categories.length > 0 && products.length < 1 && (
          <Card title={'상품정보'}>
            <Empty onClick={() => router.push('/shop/admin/product/add')}>
              상품을 추가해주세요
            </Empty>
          </Card>
        )}
      </Space>
    </>
  );
};

export default Index;
