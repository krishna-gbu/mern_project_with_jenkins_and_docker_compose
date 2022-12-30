# docker_compose_react_node_docker

### setup client and server directory 
![image](https://user-images.githubusercontent.com/40553867/209130593-b0a991ee-13d7-4541-b672-8d79f43bccc4.png)
##### remove '/' from node_modules and build folder
![image](https://user-images.githubusercontent.com/40553867/209130692-c46e3902-d650-46f2-ae0b-a87f43697ae7.png)

![image](https://user-images.githubusercontent.com/40553867/209364658-25ae5dbf-2e52-4aed-b131-f51af99a4167.png)

### install docker 
 https://docs.docker.com/engine/install/rhel/ 
 ![image](https://user-images.githubusercontent.com/40553867/209365667-cbe23059-06c8-4c0c-840f-db32eb7e708b.png)
 
 change ` 'rhel => centos' `  shown bellow

```
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```
```sudo yum install docker-ce```
### install docker compose
`sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose`

```ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose```
### stack over flow
``` https://stackoverflow.com/questions/36685980/why-is-docker-installed-but-not-docker-compose```


### node and express
![image](https://user-images.githubusercontent.com/40553867/210096826-6f025fa3-97b8-4174-b7ef-8540d8244f45.png)

![image](https://user-images.githubusercontent.com/40553867/210096859-b1b3831d-cc92-423f-aaf6-1977764c4022.png)

### react 
![image](https://user-images.githubusercontent.com/40553867/210097016-41cf46e2-de60-44ad-a60e-b4bd76b2d4a9.png)

![image](https://user-images.githubusercontent.com/40553867/210097042-1a709c66-b787-4a24-ad39-54c22b347e28.png)

##### connection between react and nodejs
