pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'devops-jenkins-docker', url: 'https://github.com/abdul2005-tech/Amazon_clone.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t react-devops-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker rm -f react-devops-app || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name react-devops-app react-devops-app'
            }
        }

    }
}