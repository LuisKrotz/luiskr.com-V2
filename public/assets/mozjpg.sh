#!/bin/bash
FOLDER=./
find "$FOLDER" -name '*.jpg' -exec sh -c 'convert "$0" pnm:- | mozcjpeg -quality 25 > "${0%%.jpg}.min.jpg"' {} \;
exit;
