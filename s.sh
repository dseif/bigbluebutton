#!/bin/bash
DATA=`find . -name "metadata.xml"`
for path in $DATA
do
  sed -i "s/http:\/\/192.168.209.145/YOUR_IP_HERE/g" $path
done
