import * as cdk from '@aws-cdk/core';
import * as amplify from '@aws-cdk/aws-amplify';
import * as codebuild from '@aws-cdk/aws-codebuild';
import { buildObject } from './buildObject';

export class PortfolioStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new amplify.App(this, 'Portfolio', {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'surumebeer',
        repository: 'portfolio',
        oauthToken: cdk.SecretValue.secretsManager('githubToken', {
          jsonField: 'github-token'
        }),
      }),
      buildSpec: codebuild.BuildSpec.fromObject(buildObject)
    });
    const master = amplifyApp.addBranch('master');
  }
}
