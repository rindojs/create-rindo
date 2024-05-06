# Releasing the Create Rindo Cli

## Development Releases

Development Releases (or "Dev Releases", "Dev Builds") are installable instances of the Create Rindo Cli that are:
- Published to the npm registry for distribution within and outside the Rindo team
- Built using the same infrastructure as production releases, with less safety checks
- Used to verify a fix or change to the project prior to a production release

### How to Publish

Only members of the Rindo team may create dev builds of The Create Rindo Cli.
To publish the package:
1. Navigate to the [Create Rindo Cli Dev Release GitHub Action](https://github.com/familyjs/create-rindo/actions/workflows/release-dev.yml) in your browser.
2. Select the 'Run Workflow' dropdown on the right hand side of the page
3. The dropdown will ask you for a branch name to publish from. Any branch may be used here.
4. Select 'Run Workflow'
5. Allow the workflow to run. Upon completion, the output of the 'publish-npm' action will report the published version string.

Following a successful run of the workflow, the CLI can be run like any other [initializer package](https://docs.npmjs.com/cli/commands/npm-init).
Users must specify the version when calling `npm init`, like so:
```bash
npm init rindo@DEV_VERSION
```
where `DEV_VERSION` is the version published to NPM.

### Publish Format

Unlike other Rindo projects, Dev Builds are not published to the NPM registry under the `@rindo` scope.
Rather, they are published directly to the package name `create-rindo`.

Unlike production builds, dev builds use a specially formatted version string to express its origins.
Dev builds follow the format `BASE_VERSION-dev.EPOCH_DATE.SHA`, where:
- `BASE_VERSION` is the latest production release changes to the build were based off of
- `EPOCH_DATE` is the number of seconds since January 1st, 1970 in UTC
- `SHA` is the git short SHA of the commit used in the release
