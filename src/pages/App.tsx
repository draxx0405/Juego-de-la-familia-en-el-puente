import { VStack, Heading} from "@chakra-ui/react";
import Menu from "../Components/Menu/Menu";
import Fondo from "./../../public/assets/Puente/Fondo.png";
import AudioPlayer from "../Components/AudioPlayer/AudioPlayer";

const App = () => {

  return (
    <VStack
      width="100vw"
      height="100vh"
      backgroundImage={`url(${Fondo})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      justifyContent={'center'}
      alignContent={'center'} 
      spacing={'50px'}
      >

      <Heading color={'white'}>Juego de logica familia cruzando el puente</Heading>
      <Menu />

      <audio src="./../../public/audio/Menu.mpeg" autoPlay loop />

    </VStack>
  );
}

export default App;
