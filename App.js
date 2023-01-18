import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: -10,
    longitude: -55,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  const localizacao = {
    latitude: 37.563936,
    longitude: -116.85123,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.mapa}
          initialRegion={regiaoInicial}
          liteMode={false} //somente android
          mapType="hybrid"
          userInterfaceStyle="dark" //somente IOS
          maxZoomLevel={20}
          minZoomLevel={0}
        >
          <Marker
            draggable
            coordinate={localizacao}
            title="Aqui"
            onPress={(event) => {
              console.log(event.nativeEvent);
            }}
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
