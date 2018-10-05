#!/bin/sh

tag="v0.6"
container="my-room-admin-dev"
registryUrl="registrydev.azurecr.io"
registryUsername="registrydev"
registryPassword="moipE9jEzbi993OA6M6oIHPsGgqJut+e"
queueStorageSettings="DefaultEndpointsProtocol=https;AccountName=sharedstoragedev;AccountKey=g/wH841yxZ+jMYiArCGy3a4FH9BqopGw5Ntn4OfdPnpf0g0v3gHOHmqM819TYkYjXfnz8srjM065CEbjeMCUFw==;EndpointSuffix=core.windows.net"
configuration=""

# Build the docker image
docker build -t $container:$tag . --build-arg configuration=$configuration

# Tag the docker image
docker tag $container:$tag $registryUrl/$container:$tag

# Push the docker image to the Azure Docker registry
docker push $registryUrl/$container:$tag

# Create the container
az container create --resource-group myroom --location eastus --name $container --image $registryUrl/$container:$tag --cpu 2 --memory 4 --os-type Linux --registry-username $registryUsername --registry-password $registryPassword --dns-name-label $container --ip-address public --environment-variables KoridorBaseUrl=http://$container.eastus.azurecontainer.io KoridorQueueStorageSettings=$queueStorageSettings KoridorWriteLogToStdOut=Yes


#http://my-room-admin-dev.eastus.azurecontainer.io/