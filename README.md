# LearnReact

## Start the project

Start the simple react app with facebook's create-react-app.

```bash
npx create-react-app ./
```

Use Eject to get full control of the app. ```npm run eject```. It will add

```text
config folder
scripts folder
dependencies in package.json
```

## Create Doc tools

npm Packages for Documentation

```text
react-docgen: Generate React component metadata
chokidar: Watch files
highlight.js: Syntax highlighted code examples
npm-run-all: Run parallel tasks
```

Install those new dependencies

```bash
npm install -D react-docgen@2.14.0 chokidar@1.6.1 npm-run-all@4.0.2
npm install -S highlight.js@9.10.0
```

### Steps

1. add ```generateComponentData``` into ```/scripts```. New script to genearate component Data with help functions

2. add scripts into ```package.json``` and modify ```start``.

3. add a sample HelloWorld component. Run command ```npm prestart / npm prestart``` will generate metadata into ```config/componentData.js``` file

## Use react-boilerplate

```https://www.reactboilerplate.com/``` Start the app with react-boilerplate.com

```bash
git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git ScalableReactApp/
npm run setup
npm run clean
npm start
```

### Generate Componens

```bash
npm run generate component
npm run generate container
```