# build single JS bundle
yarn build

# copy js bundle to GCP bucket
gsutil rsync -R build/ gs://alxahn/build
gsutil cp app.yaml gs://alxahn

# deploy ops-place project
gcloud app --project alxahn deploy
