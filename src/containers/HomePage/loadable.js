import Loadable from 'react-loadable';

import LoadableIndicator from '../../components/LoadingIndicator';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadableIndicator,
});
