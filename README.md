# DSPlab Static Website
this is a website without database


## Install and RUN

1. Install [Docker](https://docs.docker.com/installation/) or [Docker Toolbox](https://www.docker.com/products/docker-toolbox) and fire it up.

2. ```git clone git@github.com:AlexHsuYu/Dsplab-website.git```

3. ```cd Dsplab-website```

4. ```docker run -itd --rm --name dsplab-web -p 8080:80  -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4```

## Link
[DSPlab-website](http://web.ncyu.edu.tw/~chiwen/#home)
