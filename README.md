# How to get started with this Personal Business Card website template end-to-end

## Setting Up

1. Create a Google App Engine project (https://cloud.google.com/appengine) with a google account.

2. Go to GAE (google app engine) console, and go to Cloud Storage to confirm that the corresponding bucket is created for the newly created GAE project. Namely, it would have created a bucket with the name of "{PROJECT_NAME}.appspot.com".

3. Now, update the `/deploy.sh` file with the corresponding project name and GCP bucket accordingly.

4. Download Google Cloud SDK (https://cloud.google.com/sdk/docs/install) and install for your terminal, along with authenticating your google account that has the created project above.

## Updating Information

1. Go to file `/data/constants.js`. Update text descriptions regarding with profile, highlights, and work experiences.

2. For every `logo` file addresses, make sure to add image files into `/public/img/logo` folder.


## Deploying

Run the following command on terminal

`./deploy.sh`

## Test

Verify that the corresponding website has been deployed / updated

Example project URL: https://alxahn.wl.r.appspot.com/