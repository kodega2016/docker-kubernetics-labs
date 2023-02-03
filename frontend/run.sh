image_name="kodega/frontend"
docker build . -t $image_name
docker run -p 80:80 $image_name