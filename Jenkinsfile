pipeline {
    agent {
        node {
            label 'docker-agent'
            }
      }

    stages {
        stage('Build') {
            steps {
                echo "Building.."

            }
        }
        stage('Test') {
            steps {
                echo "Testing.."

            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'

            }
        }
    }
}
