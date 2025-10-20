import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import App from './pages/App.tsx';
import Game from './pages/Game.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Game' element={<Game />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </StrictMode>,
)
