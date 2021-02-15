#!/bin/bash

# Upload coverage
bash <(curl -s https://codecov.io/bash) -t $CODECOV_GET_DATE
