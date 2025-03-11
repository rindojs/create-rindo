/**
 * Metadata for a starter project that the CLI will use to bootstrap a user's project.
 */
export interface Starter {
  /**
   * The name of the starter.
   */
  name: string;
  /**
   * The GitHub repository the starter can be found in. The base URL is assumed to exist and does not need to be
   * provided.
   */
  repo: string;
  /**
   * A brief description of the starter project.
   */
  description?: string;
  /**
   * A link to the starter's documentation.
   */
  docs?: string;
  /**
   * When true, the starter should be hidden from the list of possible choices. This allows the `name` to be used with
   * the `npm init rindo component <NAME>` command, without cluttering the options list.
   */
  hidden?: boolean;
  /**
   * When true, the starter is a community-driven project, rather than one owned by Family
   */
  isCommunity?: boolean;
}

/**
 * Existing Rindo project starters available for CLI users to select from
 */
export const STARTERS: ReadonlyArray<Starter> = [
  {
    name: 'component',
    repo: 'rindojs/rindo-component-starter',
    description: 'Collection of web components that can be used anywhere',
    docs: 'https://github.com/rindojs/rindo-component-starter',
  },
  {
    name: 'components',
    repo: 'rindojs/rindo-component-starter',
    description: 'Collection of web components that can be used anywhere',
    docs: 'https://github.com/rindojs/rindo-component-starter',
    hidden: true,
  },
  {
    name: 'app',
    repo: 'rindojs/rindo-app-starter',
    description: 'Minimal starter for building a Rindo app or website',
    docs: 'https://github.com/rindojs/rindo-app-starter',
    isCommunity: true,
  },
  {
    name: 'family-pwa',
    repo: 'rindojs/rindo-family-starter',
    description: 'Family PWA starter with tabs layout and routes',
    docs: 'https://github.com/rindojs/rindo-family-starter',
    isCommunity: true,
  },
];

/**
 * Retrieve a starter project's metadata based on a CLI user's input.
 *
 * @param starterName the name of the starter project to retrieve. Starter names that include a forward slash ('/') are
 * assumed to be custom starter templates. Such templates are assumed to be the name of the repository that this CLI
 * can retrieve the starter template from.
 * @returns the starter project metadata
 */
export function getStarterRepo(starterName: string): Starter {
  if (starterName.includes('/')) {
    return {
      name: starterName,
      repo: starterName,
    };
  }
  const repo = STARTERS.find((starter) => starter.name === starterName);
  if (!repo) {
    throw new Error(`Starter "${starterName}" does not exist.`);
  }
  return repo;
}
