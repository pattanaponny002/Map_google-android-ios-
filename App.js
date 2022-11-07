import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Callout, Circle, Marker } from "react-native-maps";
import styles from "./STYLE/style";

import MapView from "react-native-maps";
import style from "./STYLE/style";
import { BlurView } from "expo-blur";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
export default function App() {
  const [pin, setPin] = useState({
    latitude: 13.736717,
    longitude: 100.523186,
  });

  const [region, setRegion] = useState({
    latitude: 13.736717,
    longitude: 100.523186,
    latitudeDelta: 0.1022,
    longitudeDelta: 0.01,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.TitleHead}>Map your Location..!!!</Text>
      <View style={styles.Box_View}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          GooglePlacesSearchQuery={{
            rankby: "distance",
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data);

            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.1022,
              longitudeDelta: 0.01,
            });
          }}
          query={{
            key: "AIzaSyAYZBr0qTVEI7ZRU6ZFuTiDLQPzlXIJeXg",
            language: "en",
            components: "country:th",
            type: "establishment",
            radius: 20000,
            location: `${region.latitude},${region.longitude}`,
          }}
          styles={{
            container: {
              width: "100%",
              height: 200,

              borderColor: "black",
              top: -150,
              position: "absolute",
              zIndex: 500,
            },
          }}
        />
        <MapView
          style={styles.Mapview}
          initialRegion={{
            latitude: 13.736717,
            longitude: 100.523186,
            latitudeDelta: 0.1022,
            longitudeDelta: 0.01,
          }}
          provider="google"
        >
          {/*lognpree to drag*/}
          <Marker
            icon={require("./material_logo/camera-drone.png")}
            pinColor="lightgreen"
            draggable={true}
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
              latitudeDelta: 0.1022,
              longitudeDelta: 0.01,
            }}
            onDragStart={(e) => {
              setRegion({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
              console.log(`drag start ${e.nativeEvent.coordinate}`);
            }}
            onDragEnd={(e) => {
              setRegion({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
              console.log(`drag end ${e.nativeEvent.coordinate}`);
            }}
          >
            <Callout>
              <Text>HERE!</Text>
            </Callout>
          </Marker>
          <Marker
            icon={require("./STYLE/sun_2.png")}
            coordinate={pin}
            pinColor="lightpink"
            draggable={true}
            onDragStart={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
              console.log(`DRAG POINT start ${e.nativeEvent.coordinate}`);
            }}
            onDragEnd={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
              console.log(`DRAG ${e.nativeEvent.coordinate}`);
            }}
          >
            <Callout tooltip={false} alphaHitTest={true}>
              <Text>I'm right here</Text>
            </Callout>
          </Marker>

          <Circle
            center={region}
            radius={2000}
            strokeColor="lightgreen"
            strokeWidth={5}
            zIndex={0}
            lineCap={"butt"}
          />

          <Circle
            center={pin}
            radius={2000}
            strokeColor="purple"
            strokeWidth={5}
            zIndex={0}
            lineCap={"butt"}
          />
        </MapView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
