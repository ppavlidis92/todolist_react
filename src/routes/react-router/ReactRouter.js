import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { First, Second, Home } from './components';

const ReactRouter = () => (
    <BrowserRouter basename="/react-router">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/first" element={<First />} />
            <Route path="/second" element={<Second />} />
        </Routes>
    </BrowserRouter>
);

export default ReactRouter;
