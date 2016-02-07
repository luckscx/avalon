#! /bin/bash
ps aux | grep skynet | grep -v grep | awk '{print $2}' | xargs kill -9
sh ./start.sh




