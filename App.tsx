
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Groups } from "@screens/Groups";
import theme from "./src/theme/index";
import { Loading } from "@components/Loading";


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    // Se as fontes carregarem, vai mostrar o Groups, se não, vai mostrar um loading
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content"/>
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
