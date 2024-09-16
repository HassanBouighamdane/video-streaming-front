pipeline {
    agent any

    environment{
          DOCKER_CREDS = credentials('docker_credentials')
          DOCKER_IMAGE_VERSION= "1.0.${BUILD_NUMBER}"
          DOCKER_IMAGE_NAME= 'video-streaming-front'
          DOCKER_IMAGE=''
      }

    stages {
        stage('Build Docker Image') {
            steps {
               script {
                    echo 'Building the Docker image ...'
                    DOCKER_IMAGE = docker.build("${DOCKER_CREDS_USR}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION}")
                }

            }
        }

        stage('Push Docker Image') {
            steps {
               script{
                    echo 'Pushing the docker image ...'
                    docker.withRegistry('','docker_credentials'){
                        DOCKER_IMAGE.push()
                    }
               }

            }
        }
        stage('Cleaning'){
            steps{
                sh "docker rmi ${DOCKER_CREDS_USR}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION}"
            }
        }
    }
    post {
        success{
            echo 'The pipeline passed successfully'
        }
        failure{
            echo 'The pipeline fails !'
        }
    }

}
