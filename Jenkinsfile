def FAILED_STAGE
pipeline {
    agent any

    parameters {
        string(
            name: 'email',
            defaultValue: 'bouihassan494@gmail.com',
            description: 'Email address to send notification' )
    }

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
                    FAILED_STAGE=env.STAGE_NAME
                    echo 'Building the Docker image ...'
                    DOCKER_IMAGE = docker.build("${DOCKER_CREDS_USR}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION}")
                }

            }
        }

        stage('Push Docker Image') {
            steps {
               script{
                    FAILED_STAGE=env.STAGE_NAME
                    echo 'Pushing the docker image ...'
                     retry(3) {
                                  docker.withRegistry('', 'docker_credentials') {
                                        DOCKER_IMAGE.push()
                                    }
                    }
               }

            }
        }
        stage('Cleaning'){
            steps{
            script{
                     FAILED_STAGE=env.STAGE_NAME
                     //sh "docker rmi ${DOCKER_CREDS_USR}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION}"
            }

            }
        }
    }
     post {
         always {
             script {
                 def emailBody = """
                     <p><strong>Pipeline Job:</strong> ${JOB_NAME}</p>
                     <p><strong>Build Number:</strong> ${BUILD_NUMBER}</p>
                     <p><strong>Status:</strong> <span style="color: ${currentBuild.result == 'SUCCESS' ? 'green' : 'red'};">${currentBuild.result}</span></p>
                 """

                if (currentBuild.result == 'FAILURE') {
                         emailBody += """
                             <p><strong>Error occurred during the pipeline execution.</strong></p>
                             <p><strong>Stage:</strong> ${FAILED_STAGE}</p>
                         """
                 } else if (currentBuild.result == 'SUCCESS') {
                     emailBody += """
                         <p><strong>Docker Image Built:</strong> ${DOCKER_CREDS_USR}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION}</p>
                         <p><strong>Next Steps:</strong></p>
                         <ul>
                             <li>The Docker image has been successfully pushed to the registry.</li>
                             <li>The image can now be deployed or tested in the respective environment.</li>
                         </ul>
                     """
                 }

                 emailBody += """
                     <p>For more details about the build you can click on this link <a href="${env.BUILD_URL}">Build URL</a></p>
                     <p>Thank you,</p>
                     <p>Jenkins CI/CD Pipeline</p>
                 """

                 emailext(
                     subject: "${JOB_NAME}.${BUILD_NUMBER} - Pipeline ${currentBuild.result}",
                     mimeType: 'text/html',
                     to: "${params.email}",
                     body: emailBody
                 )
             }
         }
     }

}
