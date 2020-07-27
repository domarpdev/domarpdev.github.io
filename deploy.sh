cd deploy
rm -r *
cd ..

yarn build

cp -r dist/* deploy/