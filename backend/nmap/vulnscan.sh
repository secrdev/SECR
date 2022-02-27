#!/bin/bash
cp /root/supervisor/${RUN_SERVICE}.ini /etc/supervisor/conf.d/
sleep 1
service supervisor start
/bin/bash

nmap --script nmap/nmap-vulners -sV $1