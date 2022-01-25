# build single JS bundle
yarn build

# copy js bundle to GCP bucket
gsutil rsync -R build/ gs://alxahn.appspot.com/build
gsutil cp app.yaml gs://alxahn.appspot.com

# deploy project
gcloud app --project alxahn deploy
