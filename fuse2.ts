import * as path from 'path';
import { fusebox, sparky, pluginCustomTransform  } from "fuse-box";

const fuse = fusebox({
  target: 'browser',
  logging: {
    level: 'succinct',
  },

  stylesheet: {
    macros: {
      $root: __dirname,
    },
  },
  sourceMap: true,
  modules: ['modules/'],
  cache: {
    FTL: false,
    enabled: false,
    root: path.join(__dirname, '.cache'),
  },
  webIndex: {
    publicPath: '.',
    template: 'src/index.html',
  },
  devServer: true,

  homeDir: __dirname,
  entry: 'src/index.tsx',
});

fuse.runDev({
  //@ts-ignore
  bundles: {
    root: path.join(__dirname, 'dist'),
    app: 'app.js',
  }
});