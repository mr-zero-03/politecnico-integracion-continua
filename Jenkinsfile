pipeline {
    agent any

    environment {
        PROJECT_PATH = 'C:\\Users\\danie\\OneDrive\\Escritorio\\programming\\university\\integracion-continua'
    }

    stages {
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
                bat '''
                    cd %PROJECT_PATH%
                    docker build -t express-app:latest .
                '''
            }
        }
        stage('Build Docker Compose') {
            steps {
                bat '''
                    cd %PROJECT_PATH%
                    docker-compose build
                '''
            }
        }
        stage('Run Docker Compose') {
            steps {
                bat '''
                    cd %PROJECT_PATH%
                    docker-compose up -d
                '''
            }
        }
    }
}