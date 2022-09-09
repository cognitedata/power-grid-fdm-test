# fdm-test
This repo shows an example of how to use advanced features of FDM.
Since some of these features are experimental, they might break in the future.

## Requirements
1. Install node > 14.x
1. Run `npm install`
1. Enable experimental CLI commands to run the example commands shown later: `export ENABLE_EXPERIMENTAL_CMDS=true`
1. Run `npm run configure your-project-name` to rename this template

## Sign-in
1. Sign-in to your project by running `npm run sign-in`

## How to setup storage
The storage definition is found in `src/dms.yml`
Run the following commands to apply it:
1. `npm run upsert-space`
1. `npm run upsert-storage`

## How to setup an API
There are two files neccessary to create a queryable GraphQL API.
It's the schema defined in `src/api.graphql` and then there is the `src/bindings.yml` file to define the implementation of this schema.
Run the following commands to create an API and version.

1. `npm run upsert-api`
1. `npm run upsert-api-version`

## Generate SDK & docs
Docs:
1. `npm run generate-docs`

Python SDK:
1. `npm run generate-python-sdk`

JS SDK:
1. `npm run generate-js-sdk`

## Run queries
Navigate here after replacing your-project and your-cluster to find a query explorer:

https://cog-appdev.fusion.cognite.com/[your-project]/data-models/fdm-test/latest/data/query-explorer?cluster=[your-cluster]
