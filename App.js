import { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: 40.452107,
    longitude: 93.742118,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };
  const [localizacao, setLocalizacao] = useState({
    latitude: 40.452107,
    longitude: 93.742118,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  const marcarLocal = (event) => {
    setLocalizacao({
      ...localizacao,
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
    console.log(localizacao);
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          onPress={marcarLocal}
          style={estilos.mapa}
          initialRegion={regiaoInicial}
          liteMode={false} //somente android
          mapType="satellite"
        >
          <Marker
            coordinate={localizacao}
            title="Aqui"
            onPress={(e) => console.log(e.nativeEvent)}
          />
        </MapView>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  mapa: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
});
