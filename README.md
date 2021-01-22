# DSPlab Static Website

## Usage
```bash
docker run -itd --rm --name dsplab-web -p 8080:80  -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4
```
