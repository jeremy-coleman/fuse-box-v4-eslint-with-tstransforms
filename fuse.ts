import { fusebox, sparky, pluginCustomTransform  } from "fuse-box";

import styledTransform from "typescript-plugin-styled-components" 

class Context {
  runServer: boolean;
  getConfig = () =>
    fusebox({
      target: "browser",
      entry: "src/index.tsx",
      webIndex: {
        template: "src/index.html"
      },
      plugins:[
        pluginCustomTransform({
          before: [styledTransform()]
        })
      ],
      devServer: this.runServer
    });
}

const { task } = sparky(Context);

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
  await fuse.runProd({ uglify: false });
});
