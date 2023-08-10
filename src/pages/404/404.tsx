import {Link} from 'react-router-dom';
import './404-style.css';
import {Helmet} from 'react-helmet-async';

function NotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities: Page Not Found</title>
      </Helmet>
      <h1>404,
        <br /> Page Not Found
      </h1>
      <Link to='/'>Вернуться на главную</Link>
    </>
  );
}

export default NotFound;
