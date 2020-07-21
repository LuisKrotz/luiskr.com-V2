#!/bin/bash
FOLDER=./
find "$FOLDER" -name '*.mp4' -exec sh -c 'ffmpeg -i "$0" -profile:v baseline -level 3.0 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls "${0%%.mp4}.m3u8"' {} \;
exit;
