# Create Rindo

> Note that you will need to use npm 6 or higher.

Run:

```
npm i -g npm
```

To install latest version of `npm`

## Starters

The create-rindo CLI offers the following starters for bootstrapping your project:

- `component` - allows one to spin up a component library containing one or more Rindo components. Best suited for
teams/individuals looking to reuse components across one or more applications.
- `app` - allows one to spin up an application, complete with routing. This is a **community-driven** project,
and is not formally owned by the Rindo team
- `family-pwa` - allows one to spin up a Family PWA, complete with tabs layout and routing. This is a **community-driven** project.

## Usage


### Interactive mode

```
npm init rindo
```

### Command mode

```
npm init rindo <starter> <projectName>
```

Example:

```
npm init rindo component my-rindo-library
```

### Using a proxy

If you are behind a proxy, configure `https_proxy` environment variable.

## Built-in starters

- [app (community-maintained)](https://github.com/rindo-community/rindo-app-starter)
- [family-pwa (community-maintained)](https://github.com/rindo-community/rindo-family-starter)
- [component](https://github.com/familyjs/rindo-component-starter)

## Developing locally

If you want to add features, clone this repo, open terminal:

#### Install dependencies

```bash
npm install
```

Then, compile and run the starter:

```bash
npm run dev
```

And it will help you test out your changes.


## License
* MIT
