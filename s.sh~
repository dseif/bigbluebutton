#!/bin/bash

DATA=`find . -name "metadata.xml"`
for path in $DATA
do
  sed -i "s/http:\/\/bbbdev1.googool.com/http:\/\/192.168.209.145/g" $path
done
