import './style.scss';

function Error({ errorMessage }) {
  if (errorMessage) {
    return <div className="container-error">{errorMessage}</div>;
  }
  return null;
}

export default Error;