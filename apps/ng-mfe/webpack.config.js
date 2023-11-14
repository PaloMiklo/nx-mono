const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "ng-mfe",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases()
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },


        name: "ng-mfe",
        filename: "remoteEntry.js",
        exposes: {
            './Component': './apps/ng-mfe/src/app/app.component.ts',
            "./appRoutes": "./apps/ng-mfe/src/app/app.routes.ts"
        },        

        // eager false reduces bunlde size, but disallow direct access to the app
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager:true }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager:true }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager:true }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager:true },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
