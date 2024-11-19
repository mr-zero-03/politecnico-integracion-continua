pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Run build'
            }
        }
        stage('Code Analysis') {
            steps {
                echo 'Run Code Analysis'
            }
        }
        stage('Test') {
            steps {
                echo 'Run test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t express-app:latest .'
            }
        }
        stage('Build with Docker Compose'){
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Run docker images'){
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}