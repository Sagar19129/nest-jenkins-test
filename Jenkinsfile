pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-nextjs-app:latest'  // Replace this with your app's image name
        DOCKER_CONTAINER = 'my-nextjs-container' // Container name for running the app
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies (if you use npm)
                    sh 'npm install'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image using the Dockerfile in the repo
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container
                    // This will run the container in detached mode
                    sh 'docker run -d --name $DOCKER_CONTAINER -p 3000:3000 $DOCKER_IMAGE'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Optional: Run tests inside the container (if applicable)
                    echo 'Running tests...'
                    // You can use something like `docker exec` to run tests in the container
                    // Example: sh 'docker exec $DOCKER_CONTAINER npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Optional: Add deployment steps like pushing the image to Docker Hub
                    echo 'Deploying image...'
                    // Example of pushing to Docker Hub:
                    // sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    // sh 'docker push your-dockerhub-username/my-nextjs-app:latest'
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace and stop/remove the container after build
            sh 'docker stop $DOCKER_CONTAINER || true'
            sh 'docker rm $DOCKER_CONTAINER || true'
            cleanWs()
        }
    }
}