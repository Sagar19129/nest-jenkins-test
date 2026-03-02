pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-nextjs-app:latest'
        DOCKER_CONTAINER = 'my-nextjs-container'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build App Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d --name $DOCKER_CONTAINER -p 3000:3000 $DOCKER_IMAGE'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Run any container tests here"'
            }
        }
    }

    post {
        always {
            sh 'docker stop $DOCKER_CONTAINER || true'
            sh 'docker rm $DOCKER_CONTAINER || true'
            cleanWs()
        }
    }
}
