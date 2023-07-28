import { Link } from 'react-router-dom';

const Home = () => (
    <span>
        <Link to="first" style={{ marginRight: '8px' }}>First</Link>
        <Link to="second">Second</Link>
    </span>
);

export default Home;
