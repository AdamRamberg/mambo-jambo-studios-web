import Loadable from 'react-loadable';

import LoadableIndicator from '../LoadingIndicator';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadableIndicator,
});
