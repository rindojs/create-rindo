# The create-rindo CLI

create-rindo is a CLI for creating new Rindo projects based on predefined templates, or "starters".
It is the official CLI maintained by the Rindo team, and is recommended for all new projects.

## Prerequisites

The create-rindo CLI requires `npm` version 6 or higher to be installed.
For instructions for installing or upgrading npm, please see the [npm Documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Starters

The create-rindo CLI offers the following starters for bootstrapping your project:

- `component` - allows one to spin up a component library containing one or more Rindo components. Best suited for
  teams/individuals looking to reuse components across one or more applications. ([Source Code](https://github.com/rindojs/rindo-component-starter))
- `app` - allows one to spin up an application, complete with routing. This is a **community-driven** project,
  and is not formally owned by the Rindo team. ([Source Code](https://github.com/rindo-community/rindo-app-starter))
- `family-pwa` - allows one to spin up a Family PWA, complete with tabs layout and routing. This is a **community-driven** project,
  and is not formally owned by the Rindo team. ([Source Code](https://github.com/rindo-community/rindo-family-starter))

The CLI can also generate projects using starters that are not officially developed by Family or the Rindo Community.
See the documentation for [Command Mode](#command-mode) for additional information on using additional templates.

## Usage

The create-rindo CLI can be run in one of two modes - Interactive Mode or Command Mode.

### Interactive Mode

Interactive Mode allows a user to interactively select options for creating a new Rindo project.
create-rindo can be started in Interactive Mode by running:

```console
$ npm init rindo
```

Running the CLI in Interactive Mode will prompt you to select one of the [available starters](#starters) to use:

```console
$ npm init rindo

✔ Select a starter project.

Starters marked as [community] are developed by the Rindo Community,
rather than Family. For more information on the Rindo Community, please see
https://github.com/rindo-community › - Use arrow-keys. Return to submit.
❯   component                Collection of web components that can be used anywhere
    app [community]          Minimal starter for building a Rindo app or website
    family-pwa [community]   Family PWA starter with tabs layout and routes
```

Followed by a name for your new project:

```console
✔ Project name > my-rindo-library
```

After confirming your selections, your project will be created.
In this example, a new [component library starter](#starters) will have been copied into a newly created `my-rindo-library` directory:

```console
✔ Confirm? … yes
✔ All setup  in 29 ms

  We suggest that you begin by typing:

  $ cd my-rindo-library
  $ npm install
  $ npm start

  You may find the following commands will be helpful:

  $ npm start
    Starts the development server.

  $ npm run build
    Builds your project in production mode.

  $ npm test
    Starts the test runner.


  Further reading:

   - https://github.com/rindojs/rindo-component-starter
   - https://rindojs.web.app/docs

  Happy coding! 🎈
```

### Command Mode

Command Mode allows you to create a new Rindo project by specifying all project options upfront.

To run the CLI in Command Mode, a [starter](#starters) and project name must be specified:

```
npm init rindo [starter] [project-name]
```

An example of creating a component starter with the name "my-rindo-library" is shown below:

```
npm init rindo component my-rindo-library
```

In the example above, a new [component library starter](#starters) will have been created in a newly created `my-rindo-library` directory.

#### Custom Templates

In addition to the provided template options, users may choose to use one of their own custom templates hosted on [GitHub.com](https://github.com).

To use a custom starter template, provide the GitHub repository owner and repository name as the starter name, using the format `REPO_OWNER/REPO_NAME`.
For example, to retrieve a template that is owned by 'my-organization' that has the name 'my-rindo-template':

```
npm init rindo my-organization/my-rindo-template my-rindo-library
```

The command above will create a copy of the `my-organization/my-rindo-template` repository, and place it under `my-rindo-library` on disk.

This can be used in conjunction with [Self Hosted GitHub Instances](#rindoselfhostedurl) to use custom starter templates that live on a self-hosted GitHub instance.

### Additional Flags

**Note:** When passing flags to the create-rindo CLI, a double dash ('--') must be placed between `npm init rindo`
and the flag(s) passed to the CLI:

```console
$ npm init rindo -- --help
```

#### `--help`, `-h`

The `--help` flag shows usage examples for the CLI.

#### `--info`

The `--info` will print the current version of the CLI.

### Environment Variables

#### `https_proxy`

If you are behind a proxy, the `https_proxy` environment variable can be set when running the CLI:

```console
$ https_proxy=https://[IP_ADDRESS] npm init rindo
```

Rindo uses [https-proxy-agent](https://github.com/TooTallNate/proxy-agents/tree/main/packages/https-proxy-agent)
under the hood to connect to the specified proxy server.
The value provided for `https_proxy` will be passed directly to the constructor for a new
[`HttpsProxyAgent` instance](https://github.com/TooTallNate/proxy-agents/tree/main/packages/https-proxy-agent#api).

#### `rindo_self_hosted_url`

In some scenarios, teams may find themselves working solely out of a self-hosted GitHub instance.

Users wishing to point the create-rindo CLI at a GitHub instance other than [GitHub](https://github.com) have two options:

1. Set `rindo_self_hosted_url` in your `.npmrc` file, like so:

   ```
   // .npmrc
   rindo_self_hosted_url=https://your_self_hosted_github_repo.com/
   ```

   Using this option, the CLI can be called as such, automatically picking up the value in `rindo_self_hosted_url`:

   ```
   npm init rindo [starter] [project-name]
   ```

2. Set [`rindo_self_hosted_url`](#rindoselfhostedurl) at invocation time:

   ```console
   rindo_self_hosted_url=https://your_self_hosted_github_repo.com/ npm init rindo
   ```

   When using this option, `rindo_self_hosted_url` must always be set every time the CLI is called.

When both options are set, the value provided on the command line takes precedence over the value in your `.npmrc` file.

## Related Links

- The [Rindo Documentation](https://rindojs.web.app/) site has more information on using Rindo.
