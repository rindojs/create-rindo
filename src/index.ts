import { red } from 'colorette';
import { createApp } from './create-app';
import { runInteractive } from './interactive';
import { getStarterRepo } from './starters';
import { cleanup, nodeVersionWarning } from './utils';
import { getPkgVersion } from './version';

const USAGE_DOCS = `create-rindo CLI Help

This CLI has two operation modes, interactive and command mode.

Interactive Mode Usage:

  npm init rindo

Command Mode Usage:

  npm init rindo [starter] [project-name]

General Use Flags:

  --help - show usage examples for the CLI
  --info - print the current version of the CLI

Additional Information: https://github.com/rindojs/create-rindo
`;

async function run() {
  let args = process.argv.slice(2);

  const autoRun = args.indexOf('--run') >= 0;
  const help = args.indexOf('--help') >= 0 || args.indexOf('-h') >= 0;
  const info = args.indexOf('--info') >= 0;

  args = args.filter((a) => a[0] !== '-');

  if (info) {
    console.log('create-rindo:', getPkgVersion(), '\n');
    return 0;
  }
  if (help) {
    console.log(USAGE_DOCS);
    return 0;
  }

  nodeVersionWarning();

  let didError = false;
  try {
    if (args.length === 2) {
      const starterName = args[0];
      const projectName = args[1];
      if (!starterName || !projectName) {
        throw new Error(USAGE_DOCS);
      }
      await createApp(getStarterRepo(starterName), projectName, autoRun);
    } else if (args.length < 2) {
      await runInteractive(args[0], autoRun);
    } else {
      throw new Error(USAGE_DOCS);
    }
  } catch (e) {
    didError = true;
    console.error(`\n${red('✖')} ${e instanceof Error ? e.message : e}\n`);
  }
  cleanup(didError);
}

run();
