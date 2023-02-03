image_name="kodega/frontend"
docker build . -t $image_name -f Dockerfile.dev
docker run -p 80:3000 -v /usr/app/node_modules -v $(pwd):/usr/app $image_name