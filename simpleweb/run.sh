image_name="kodega/simpleweb"
docker build . -t $image_name
docker run -p 80:3000 $image_name