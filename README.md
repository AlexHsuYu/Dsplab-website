# DSPlab Static Website
this is a basic website without database
(because the school does not allow it...)

## Usage
```bash
docker run -itd --rm --name dsplab-web -p 8080:80  -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4
```

## Dockerfile
```bulid&run
docker build -t my-apache2 . --no-cache

docker run -dit --name my-running-app -p 8080:80 my-apache2
```

