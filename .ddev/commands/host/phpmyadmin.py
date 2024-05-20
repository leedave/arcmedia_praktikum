import os

with open('phpmyadmin.txt', 'r') as file:
    data = file.read().replace('\n', '')
    needle = '0.0.0.0'
    pos = data.find(needle)
    print("PHPMyAdmin is running in:\n")
    print('http://' + os.environ['DDEV_HOSTNAME'] + ':' + data[pos+8:pos+8+5])
