import { Input } from "antd";
import { useDispatch } from "react-redux";
import { SEARCH_PRODUCT_SUCCESS } from "../../reducers/menu";
import { SEARCH_HISTORY_REQUEST } from "../../reducers/payment";
import { useState } from "react";

const SearchBar = ({ setToggleSearch }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const onChangeText = (e) => setText(e.target.value);

  const onSearch = () => {
    dispatch({
      type: SEARCH_PRODUCT_SUCCESS,
      data: { text },
    });
    setText();
    console.log(text);
    setToggleSearch(false);
  };

  return (
    <Input.Search
      size={"large"}
      value={text}
      onChange={onChangeText}
      enterButton
      onSearch={onSearch}
    />
  );
};

export default SearchBar;
