import React, { useEffect, useState } from 'react';
import * as restHooks from 'rest-hooks';
import * as rest from '@rest-hooks/rest';
import * as graphql from '@rest-hooks/graphql';
import BigNumber from 'bignumber.js';

import Playground from './Playground';

const mockFetch = ({ id, delay = 150 }) =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          id,
          updatedAt: new Date().toISOString(),
        }),
      delay,
    ),
  );
class TimedEntity extends rest.Entity {
  pk() {
    return this.id;
  }

  static schema = {
    updatedAt: Date,
  };
}

const lastUpdated = new restHooks.Endpoint(mockFetch, { schema: TimedEntity });

function CurrentTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const intervalID = setInterval(() => setTime(new Date()));
    return () => clearInterval(intervalID);
  }, []);
  return (
    <time>
      {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(time)}
    </time>
  );
}

function ResetableErrorBoundary({ children }) {
  const [i, setI] = React.useState(0);
  const { resetEntireStore } = restHooks.useController();

  return (
    <restHooks.NetworkErrorBoundary
      key={i}
      fallbackComponent={({ error }) => (
        <>
          <div>
            {error.message} <i>{error.status}</i>
          </div>
          <button
            onClick={() => {
              resetEntireStore();
              setI(i => i + 1);
            }}
          >
            Reset
          </button>
        </>
      )}
    >
      {children}
    </restHooks.NetworkErrorBoundary>
  );
}

const scope = {
  ...restHooks,
  ...rest,
  ...graphql,
  BigNumber,
  lastUpdated,
  TimedEntity,
  CurrentTime,
  ResetableErrorBoundary,
};

const HooksPlayground = ({ children, groupId, defaultOpen }) => (
  <Playground
    scope={scope}
    noInline
    groupId={groupId}
    defaultOpen={defaultOpen}
  >
    {typeof children === 'string'
      ? children
      : children.props.children.props.children}
  </Playground>
);
export default HooksPlayground;
