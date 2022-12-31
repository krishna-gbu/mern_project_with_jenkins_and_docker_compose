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

`check docker compose version`
```
docker-compose version
```
![image](https://user-images.githubusercontent.com/40553867/210098857-95ee61b9-3a45-462d-b909-30f0519ce54b.png)


### node and express
![image](https://user-images.githubusercontent.com/40553867/210096826-6f025fa3-97b8-4174-b7ef-8540d8244f45.png)

![image](https://user-images.githubusercontent.com/40553867/210096859-b1b3831d-cc92-423f-aaf6-1977764c4022.png)

### react 
![image](https://user-images.githubusercontent.com/40553867/210097016-41cf46e2-de60-44ad-a60e-b4bd76b2d4a9.png)

![image](https://user-images.githubusercontent.com/40553867/210097042-1a709c66-b787-4a24-ad39-54c22b347e28.png)

##### connection between react and nodejs
`add proxy in react app in package.json file`
![image](https://user-images.githubusercontent.com/40553867/210099041-b1a4dbba-a914-4109-8da3-5dae8b52816d.png)

### client docker file
![image](https://user-images.githubusercontent.com/40553867/210102043-479dfc15-3580-44f5-bd08-dc1f8d815399.png)

### node docker file
![image](https://user-images.githubusercontent.com/40553867/210102083-ebc02ec5-0305-4594-bd05-c45ceffa2f00.png)

### docker-compose file
![image](https://user-images.githubusercontent.com/40553867/210102179-ff925c02-5a42-4041-8387-e6f8fcee90c3.png)

### add proxy with nodejs container name (proxy:http://node:5000)
![image](https://user-images.githubusercontent.com/40553867/210144118-79cecfdb-c864-4f9c-8ce7-b29c6f3b6a04.png)
### axios fetch api data
![image](https://user-images.githubusercontent.com/40553867/210144268-3fa7a08a-66c2-42e0-8104-6ab5a7d726de.png)


### jenkins file
```
pipeline {
    agent {label "slave_7"}

    stages {
        stage('git scm') {
            steps {
              git branch: 'main', url: 'https://github.com/krishna-gbu/mern_project_with_jenkins_and_docker_compose.git'
            }
        }
        stage('deploy mern app with docker compose') {
            steps {
                sh "sudo docker-compose down"
                sh "sudo docker-compose build --no-cache"
                sh "sudo docker-compose up -d"
            }
        }
    }
}

```
### build
![image](https://user-images.githubusercontent.com/40553867/210147068-775ba5aa-d788-457a-af42-69f64501a53a.png)

![image](https://user-images.githubusercontent.com/40553867/210146746-945a8030-fb01-43e5-ae6e-ab41ff9bd897.png)

![image](https://user-images.githubusercontent.com/40553867/210147158-27f3d4d7-2ed0-445a-b2b5-a9367b41ecf3.png)

