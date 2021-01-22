# DSPlab Static Website
this is a basic website without database
(because the school does not allow it...)

## Usage
```bash
docker run -itd --rm --name dsplab-web -p 8080:80  -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4
```
