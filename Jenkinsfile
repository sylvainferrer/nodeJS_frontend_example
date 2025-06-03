pipeline {
    
    agent none

    stages {
        stage('Git clone') {
            agent { label 'agent-lftp' }
            steps {
                git branch: 'main', url: 'https://github.com/sylvainferrer/nodeJS_frontend_example.git'
            }
        }
        stage('Copy server') {
            agent { label 'agent-lftp' }
            steps {
                sh '''
                   lftp -u hoopstore,'Azerty77380' ftp-hoopstore.alwaysdata.net -e "mirror -R ${WORKSPACE}/ www/ ; quit"
                '''
            }
        }
    }
}
