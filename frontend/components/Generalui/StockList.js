import Product from "../Product";
import { Col, Row, Card, Space, Affix, Empty } from "antd";
import MenuNavibarLayout from "../Layout/MenuNavibarLayout ";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useWindowSize } from "@react-hook/window-size";
import { useRef, useState } from "react";
import useSize from "@react-hook/size";
import AffixBottom from "./AffixBottom";

export default () => {
  const { naviSize, categories } = useSelector((state) => state.menu);
  const { stocks, originalStocks } = useSelector((state) => state.stock);

  const { session } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  const target = useRef(null);
  const [menuNaviWidth, menuNaviHeight] = useSize(target);
  const [windowWidth, windowHeight] = useWindowSize();
  const [category, setCategory] = useState(0);
  return (
    <>
      <Affix offsetTop={naviSize && naviSize.naviHeight ? naviSize.naviHeight : 0}>
        <div ref={target}>
          <MenuNavibarLayout
            type={"menu"}
            categories={categories}
            setCategory={setCategory}
            products={stocks}
            originProducts={originalStocks}
          />
        </div>
      </Affix>
      {stocks[0] ? (
        <Card>
          {cart[0] && (
            <AffixBottom
              cart={cart}
              windowSize={{ windowWidth, windowHeight }}
              menuNaviSize={{ menuNaviWidth, menuNaviHeight }}
            />
          )}
          <Space direction="vertical" size={"middle"}>
            <Row gutter={[16, 16]}>
              {stocks &&
                stocks.map((stock) => {
                  return (
                    <Col span={24} key={stock.id}>
                      <Product
                        product={stock.Product}
                        quantity={stock.quantity}
                        discount={stock.discount}
                        id={stock.id}
                        stock={stock.stock}
                        shop={stock.Shop}
                        dueDate={stock.dueDate}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Space>
        </Card>
      ) : (
        <Card style={{ height: "100vh" }}>
          <Row justify="center" align={"middle"} style={{ height: "100%", textAlign: "center" }}>
            {session && session.division == true ? (
              <Link href={"/shop/admin"}>
                <a>
                  <Col>
                    <h1>메뉴정보가 존재하지 않습니다.</h1>
                    <Empty />
                  </Col>
                </a>
              </Link>
            ) : (
              <Col>
                <div style={{ marginTop: windowHeight * 0.3 }}>
                  <h1>메뉴정보가 존재하지 않습니다.</h1>
                  <Empty />
                </div>
              </Col>
            )}
          </Row>
        </Card>
      )}
    </>
  );
};
