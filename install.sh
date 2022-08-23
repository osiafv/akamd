#!/usr/bin/bash
clear
pm2 start aka.js
pm2 save
pm2 logs