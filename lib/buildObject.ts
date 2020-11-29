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
          'npm run build'
        ]
      },
      artifacts: {
        baseDirectory: 'out',
        files: '**/*'
      },
      cache: {
        path: 'node_modules/**/*'
      }
    }
  }
}