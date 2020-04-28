#!/bin/bash
FOLDER=./
find "$FOLDER" -name '*.mp4' -exec sh -c 'ffmpeg -i "$0" "${0%%.mp4}.jpg"' {} \;
find "$FOLDER" -name '*.mp4' -exec sh -c 'ffmpeg -i "$0" -c:v libvpx -crf 10 -b:v 1M -c:a libvorbis "${0%%.mp4}.webm"' {} \;
find "$FOLDER" -name '*.mp4' -exec sh -c 'ffmpeg -i "$0" -profile:v baseline -level 3.0 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls "${0%%.mp4}.m3u8"' {} \;
exit;   