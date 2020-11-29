#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PortfolioStack } from '../lib/portfolio-stack';

const app = new cdk.App();
const region: string = 'ap-northeast-1';
const env = {env: {region: region}};
new PortfolioStack(app, 'PortfolioStack', env);
