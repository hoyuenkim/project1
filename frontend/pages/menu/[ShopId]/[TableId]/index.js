import { LOAD_PRODUCTS_REQUEST } from '../../../../reducers/menu';
import MenuBoard from '../../../../components/Generalui/MenuBoard';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { PAGE_CHANGE_SUCCESS } from '../../../../reducers/admin';

const Menu = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [IMP, setIMP] = useState(null);

  useEffect(() => {
    dispatch({ type: PAGE_CHANGE_SUCCESS, data: 'menu' });
  });

  useEffect(() => {
    const { IMP } = window;
    setIMP(IMP);
    dispatch({
      type: LOAD_PRODUCTS_REQUEST,
      data: { ShopId: query.ShopId, TableId: query.TableId },
    });
  }, []);

  return (
    <>
      <MenuBoard />
    </>
  );
};

export default Menu;
