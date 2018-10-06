import fs from 'fs';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import favicon from 'express-favicon';
import R from 'ramda';
import { langs } from '../app/constants/';
import getManifest from './getManifest';
import prefetchHome from './utils/prefetch/prefetchHome';

const Env = (envVars) => {
  const ENV_NAMES = {
    development: 'development',
    staging: 'staging',
    production: 'production',
  }
  const current = envVars.NODE_ENV || ENV_NAMES.development
  const envIs = (name) => {
    return (checkName = current) => {
      return name === checkName
    }
  }
  const isProduction = envIs(ENV_NAMES.production)
  const isStaging = envIs(ENV_NAMES.staging)
  const isDevelopment = envIs(ENV_NAMES.development)
  return R.merge(envVars, {
    current,
    isProduction,
    isStaging,
    isDevelopment
  })
}

dotenv.config()
const ENV = Env(process.env)
const app = express()
const port = process.env.PORT || 3000

if (ENV.isDevelopment()) {
  console.log('Loading development server configs')
  const webpackConfig = require('../../webpack.config.js')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const serverConfig = {
    contentBase: 'http://localhost:' + port,
    port: port,
    quiet: false,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    inline: true,
    lazy: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    stats: { colors: true }
  }
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
  app.use((req, res, next) => {
    req.hashManifest = ['/main.js', '/main.css', '/vendor.js'];
    next();
  });
} else {
  console.log('Loading server configs')
  const manifest = getManifest();
  app.use((req, res, next) => {
    req.hashManifest = manifest.length > 0 ? manifest : ['/main.js', '/main.css', '/vendor.js'];
    next();
  });
  app.use(helmet());
  app.disable('x-powered-by');
}
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-CSRFToken');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*.css', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/', prefetchHome);
app.get(`/:lang${langs}/`, prefetchHome);

app.use((req, res, next) => {
  res.status(404);
  prefetchHome(req, res, next);
});

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Galileo running on por: ${port} 🔭`)
})
