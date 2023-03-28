# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Steps

### Installation

```Cmd
yarn
```

### Local Development

```Cmd
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```Cmd
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```Cmd
USE_SSH=true yarn deploy
```

Not using SSH:

```Cmd
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Structure

Docs - Folder for Wiki Pages
