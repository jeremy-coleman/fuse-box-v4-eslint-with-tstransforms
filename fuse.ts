import path from 'path'
import { fusebox, sparky, pluginCustomTransform  } from "fuse-box";
import styledTransform from "typescript-plugin-styled-components" 


class Context {
  runServer: boolean;
  getConfig = () =>
    fusebox({
      target: "browser",
      entry: "src/index.tsx",
      //hmr: { plugin: 'src/hmr.ts' },
      webIndex: {
        template: "src/index.html"
      },
      // cache: {
      //   enabled: false,
      //   root: path.join(__dirname, '.cache'),
      // },
      // plugins:[
      //   pluginCustomTransform({
      //     before: [styledTransform()]
      //   })
      // ],
      devServer: this.runServer
    });
}

const { task , rm } = sparky(Context);

task("default", async (ctx) => {
  ctx.runServer = true;
  const fuse = ctx.getConfig();
  await fuse.runDev();
});

task("preview", async (ctx) => {
  ctx.runServer = true;
  const fuse = ctx.getConfig();
  await fuse.runProd({ uglify: false });
});

task("dist", async (ctx) => {
  ctx.runServer = false;
  const fuse = ctx.getConfig();
  await fuse.runProd({ uglify: true });
});

task("clean", async () => {
  rm("dist")
});


type ScTransformOptions = {
  getDisplayName(filename: string, bindingName: string | undefined): string | undefined;
  //Identifiers of (for example)`styled` function. mostly pointless
  identifiers: {
    styled?: string[]; 
    attrs?: string[];
    keyframes?: string[];
    css?: string[];
    createGlobalStyle?: string[];
};
  ssr: boolean;
  displayName: boolean;
  minify: boolean;
}