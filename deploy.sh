#!/bin/bash

npm test
TEST_STATUS=$?

if [[ $TEST_STATUS -eq 0 ]]; then
  npm run deploy-after-testing
  DEPLOY_STATUS=$?
fi

exit $TEST_STATUS || $DEPLOY_STATUS
