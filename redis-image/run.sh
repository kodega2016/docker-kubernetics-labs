image_name="kodega/redis-image"
docker build . -t $image_name
docker run $image_name