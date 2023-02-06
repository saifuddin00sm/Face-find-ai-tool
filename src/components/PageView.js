import ReactGA from 'react-ga';

ReactGA.initialize('G-7167EM6PPJ');

function PageView() {
  ReactGA.pageview(window.location.pathname + window.location.search);
  return null;
}

export default PageView;
