#!/bin/bash

find public/assets -type f -print0 | xargs -0 chmod 644
which xattr && xattr -rc public/assets
