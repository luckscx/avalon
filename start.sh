#!/bin/sh
export AVALON_LISTEN=0.0.0.0:8888
export AVALON_BROKER=8
export AVALON_STATIC=./static/
skynet/skynet etc/config 2>>logs/error.log &
