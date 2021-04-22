import { createBrowserHistory } from 'history';

import appConfig from '@globalConfig/App';

export default createBrowserHistory({
  basename: appConfig.path,
});
