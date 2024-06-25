# dwolla-technical-problem

The infrastructure needs to be deployed in multiple step 1

1. Deploy the `bootstrap.yaml` template via the console or CLI
2. Package the lambda template using `aws cloudformation package`, specifying the S3 bucket created in step 1
3. Deploy the lambda template using `aws cloudformation deploy` and the template outputted in the previous step
