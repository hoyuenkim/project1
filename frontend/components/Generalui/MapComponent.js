import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import { Card, Tag } from "antd";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const MapComponent = ({ session }) => {
  const router = useRouter();
  const { userCoordinates, shopCoordinates } = useSelector((state) => state.shop);

  const [centerCoordinates, setCenterCoordinates] = useState({
    lat: session.lat,
    lng: session.lng,
  });

  useEffect(() => {
    if (userCoordinates) {
      return setCenterCoordinates({ lat: userCoordinates[1], lng: userCoordinates[0] });
    }
  }, [userCoordinates]);

  return (
    <Map center={centerCoordinates} style={{ width: "100%", height: "360px" }} level={5}>
      {session && session.division === false && (
        <CustomOverlayMap key={session.id} position={{ lat: session.lat, lng: session.lng }}>
          <Tag key={session.id}>{session && session.name}</Tag>
        </CustomOverlayMap>
      )}
      {shopCoordinates &&
        shopCoordinates.length > 0 &&
        shopCoordinates.map((result, index) => {
          const ids = session.Shops.filter((v) => v.id == result.ShopId);
          return (
            <CustomOverlayMap
              position={{
                lat: result.location.coordinates[1],
                lng: result.location.coordinates[0],
              }}
              key={result.id}
            >
              <Tag
                key={index}
                style={{ cursor: "pointer" }}
                color={ids.length === 0 ? null : "magenta"}
                onClick={() => {
                  if (ids.length == 0) {
                    return router.push(`/menu/${result.ShopId}`);
                  } else {
                    return router.push(`/shop/admin`);
                  }
                }}
              >
                {result.name}
              </Tag>
            </CustomOverlayMap>
          );
        })}
    </Map>
  );
};

export default MapComponent;
