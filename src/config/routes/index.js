import React, { Suspense } from "react";
import { ConnectedRouter } from "connected-react-router";

import { Switch, Route } from "react-router-dom";

import history from "./History";
import ScrollToTop from "./ScrollToTop";

import ApplicationLayout from "@views/layouts/ApplicationLayout";
import fakeDelay from "@utils/fakeDelay";

const HomeView = React.lazy(() => fakeDelay(3 * 1000)(import("@views/home")));
const ProjectView = React.lazy(() =>
  fakeDelay(3 * 1000)(import("@views/project"))
);
const NotFoundView = React.lazy(() =>
  fakeDelay(3 * 1000)(import("@views/errors/NotFound"))
);

import Loader from "@components/loader";

export default () => {
  return (
    <ConnectedRouter history={history}>
      <ApplicationLayout history={history}>
        <ScrollToTop />

        <Suspense fallback={<Loader visible full />}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/:projectSlug" component={ProjectView} />
            <Route path="*" component={NotFoundView} />
          </Switch>
        </Suspense>
      </ApplicationLayout>
    </ConnectedRouter>
  );
};
