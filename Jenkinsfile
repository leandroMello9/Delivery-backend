pipeline {
    agent any
    tools {
        nodejs "NODEJS"
    }
    stages {
        stage("build") {
            steps{
                echo('building the application...')
                sh('npm install')
                sh('npm run build')
            }
        }
         stage("teste") {
            steps{
                echo('testing the application...')
            }
        }
         stage("deploy") {
            steps{
                echo('deplying the application...')
            }
        }
    }
}
