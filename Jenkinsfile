pipeline {
 agent any


 stages {
   stage ('pull code from git') {
     steps {
       git credentialsId: '173015a2-ead5-4243-9232-0233662a5aed', url: 'git@github.com:SuperemeFrank/rsg.git'
     }
   }
   stage('Build') { 
    steps {
      nodejs('local nodejs') {
        sh 'npm install'  
        sh 'npm test'
        sh 'npm build'
      }
    }


    post {
      success {
        archiveArtifacts artifacts: 'build'
      }
    }
  }

  stage ('Parallel deploy to staging and production') {
    parallel {
      stage('Deploy on staging server') {
        steps {
          withAWS(region:'us-east-2', credentials:'e8970abf-eeee-4be6-95c8-490e3c5ae694') {
            s3Upload(file: 'build', bucket: 'mstr-staging-responsefile-generator')
          }
        }
      }


      stage('Deploy on production server') {
        input {
          message 'Confirm to deploy it to production server?'
        }

        steps {
          withAWS(region:'us-east-2', credentials:'e8970abf-eeee-4be6-95c8-490e3c5ae694') {
           s3Upload(file: 'build', bucket: 'mstr-production-responsefile-generator')
          }
        }
      }
    }
  }
}
}