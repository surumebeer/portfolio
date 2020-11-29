export const buildObject = {
  version: '1.0',
  portfolio: {
    phases: {
      preBuild: {
        commands: [
          'cd src && npm i'
        ]
      },
      build: {
        commands: [
          'cd src && npm run build'
        ]
      },
      artifacts: {
        baseDirectory: 'src/out',
        files: '**/*'
      },
      cache: {
        path: 'src/node_modules/**/*'
      }
    }
  }
}