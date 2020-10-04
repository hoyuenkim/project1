import React from "react";
import Head from "next/head";
import wrapper from "../store/configureStore";
import withReduxSaga from "next-redux-saga";
import CentralAppLayout from "../components/Layout/CentralAppLayout";
import { LOAD_USER_REQUEST } from "../reducers/user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_USER_REQUEST });
  });

  return (
    <>
      <Head>
        <title>Order</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.4/antd.compact.css"
        />
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        />
        <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false"></script>
        <style>
          {`body {
            background-color: #EFF2F5!important;
            font-family: 'Noto Sans KR', sans-serif;
          }`}
        </style>
      </Head>
      <CentralAppLayout>
        <Component {...pageProps} />
      </CentralAppLayout>
    </>
  );
};

App.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default wrapper.withRedux(withReduxSaga(App));
