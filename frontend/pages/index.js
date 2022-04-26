import { Card, Carousel, Image } from "antd";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import OneSignal from "react-onesignal";
import axios from "axios";
import { useRouter } from "next/router";
import { LOAD_EVENTS_REQUEST, PAGE_CHANGE_SUCCESS } from "../reducers/admin";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Index = () => {
  axios.defaults.baseURL = `${process.env.BACKEND_IP}`;

  const dispatch = useDispatch();
  const router = useRouter();

  const [coordinates, setCoordinates] = useState();

  useEffect(() => {
    dispatch({ type: LOAD_EVENTS_REQUEST });
  });

  useEffect(() => {
    dispatch({ type: PAGE_CHANGE_SUCCESS, data: "index" });
  });

  const { events } = useSelector((state) => state.admin);
  const { isLoggedIn, session } = useSelector((state) => state.user);

  if (session && coordinates == null) {
    axios
      .post("/", { id: session.id })
      .then((result) => {
        setCoordinates(result.data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      {isLoggedIn && session ? (
        <Map
          center={{ lat: session.lat, lng: session.lng }}
          style={{ width: "100%", height: "360px" }}
          level={5}
        >
          {session && session.division === false && (
            <MapMarker key={session.id} position={{ lat: session.lat, lng: session.lng }}>
              <div style={{ textAlign: "center" }}>{session && session.name}</div>
            </MapMarker>
          )}
          {coordinates &&
            coordinates.length > 0 &&
            coordinates.map((result) => {
              return (
                <MapMarker
                  key={result.id}
                  position={{
                    lat: result.location.coordinates[1],
                    lng: result.location.coordinates[0],
                  }}
                  infoWindowOptions={{
                    className: "shop-maker",
                    style: {
                      display: "inline-block",
                      fontSize: 5,
                    },
                  }}
                  onClick={() => router.push(`/menu/${result.ShopId}`)}
                >
                  <div style={{ textAlign: "center" }}>{result.name}</div>
                </MapMarker>
              );
            })}
        </Map>
      ) : (
        <Card>
          <Card.Meta
            description={
              <div style={{ height: "100vh", width: "100%" }}>
                <Carousel autoplay dots={false}>
                  {events.map((event) => (
                    <Image
                      onClick={router.push(`/event/${event.id}`)}
                      style={{ height: "100vh", width: "100%" }}
                      src={`${process.env.BACKEND_IP}/uploads/${event.Images[0].url}`}
                    />
                  ))}
                </Carousel>
              </div>
            }
          />
        </Card>
      )}
    </>
  );
};

export default Index;
