import { Breadcrumb, Space } from "antd";
import Link from "next/link";

const MenuNavibarLayout = ({ menus }) => {
  return (
    <div style={{ backgroundColor: "white", borderBottom: `1px solid #EFF2F5` }}>
      <Space size={`middle`} direction="horizontal">
        <Breadcrumb separator={" "}>
          {menus.map((menu) => (
            <Breadcrumb.Item key={menu}>
              <Link href={`/menu/:shop/:table/:category`}>
                <a>{menu}</a>
              </Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Space>
    </div>
  );
};

export default MenuNavibarLayout;
