import { useState, useCallback } from "react";
import { Form, Input, Button, Upload, PageHeader, Space, Card } from "antd";
import { useInput } from "../../../components/Generalui/CustomHooks";
import ImgCrop from "antd-img-crop";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT_REQUEST } from "../../../reducers/shop";
import { GiftOutlined, DollarOutlined, ProfileOutlined } from "@ant-design/icons";

const Regist = () => {
  const dispatch = useDispatch();

  const [title, onChangeTitle] = useInput();
  const [price, setPrice] = useState();
  const [description, onChangeDecription] = useInput();
  const [fileList, setFileList] = useState([]);

  const onChangePrice = (e) => {
    const regx = /[^0-9]/gi;
    const value = e.target.value.replace(regx, "");
    setPrice(value);
    return;
  };

  const onImagesChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const onFinish = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    fileList.forEach(({ originFileObj }) => {
      formData.append("files", originFileObj);
    });
    dispatch({
      type: ADD_PRODUCT_REQUEST,
      formData,
    });
  };

  return (
    <Form encType={"multipart/form-data"} onFinish={onFinish}>
      <Card
        title={<PageHeader className="site-page-header" title="상품등록" />}
        style={{ height: "100vh" }}
      >
        <Space direction="vertical" size={"middle"} style={{ width: "100%" }}>
          <Input prefix={<GiftOutlined />} size={"large"} onChange={onChangeTitle} />
          <Input
            prefix={<DollarOutlined />}
            value={price}
            size={"large"}
            value={price}
            onChange={onChangePrice}
          />
          <Input prefix={<ProfileOutlined />} size={"large"} onChange={onChangeDecription} />
          <Card title={`image`}>
            <ImgCrop rotate aspect={4 / 3}>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onImagesChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </Card>
          <Button type="primary" htmlType="submit" style={{ width: `100%` }}>
            제출
          </Button>
        </Space>
      </Card>
    </Form>
  );
};

export default Regist;
