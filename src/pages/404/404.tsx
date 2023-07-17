import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>404,
        <br /> Page Not Found
      </h1>
      <Link to='/'>Вернуться на главную</Link>
    </>
  );
}

export default NotFound;
