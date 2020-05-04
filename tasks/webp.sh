#!/bin/bash
FOLDER=./
find "$FOLDER" -name '*.jpg' -exec sh -c 'cwebp -q 75 "$0" -o "${0%%.png}.webp"' {} \;
exit;

