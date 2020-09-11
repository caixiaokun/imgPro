const SftpUpload = require('sftp-upload')
const colors = require('colors/safe')
const fs = require('fs')

const config = {
  host: '81.71.0.238',
  port: 22,
  username: 'root',
  password: 'CXK8297883..'
}

function upload(path, remoteDir) {
  const sftp = new SftpUpload({
    ...config,
    path,
    remoteDir
  })

  sftp
    .on('error', function(err) {
      throw err
    })
    .on('uploading', function(progress) {
      console.log('Uploading', colors.yellow(progress.file))
      console.log(colors.blue(progress.percent + '% completed'))
    })
    .on('completed', function() {
      console.log(colors.green('Upload Completed'))
    })
    .upload()
}

upload('./', '/usr/local/bin/merge')
