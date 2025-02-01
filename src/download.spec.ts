import { Starter } from './starters';
import { getGitHubUrl, getStarterUrl, verifyStarterExists } from './download';

describe('download', () => {
  describe('verifyStarterExists', () => {
    it('returns false if starter does not exist', async () => {
      expect(
        await verifyStarterExists({
          repo: 'foo/bar',
          name: 'foo-bar-starter',
        }),
      ).toBe(false);
    });

    it('returns true if starter does exist', async () => {
      expect(
        await verifyStarterExists({
          repo: 'rindojs/rindo',
          name: 'rindo',
        }),
      ).toBe(true);
    });
  });

  describe('getStarterUrl', () => {
    it('returns a well formed URL from the given starter', () => {
      const repo = 'rindojs/mock-rindo-template';
      const starter: Starter = {
        name: 'test-starter',
        repo,
      };

      expect(getStarterUrl(starter)).toBe(`https://github.com/${repo}/archive/main.zip`);
    });

    describe('self-hosted url', () => {
      afterEach(() => {
        delete process.env['npm_config_rindo_self_hosted_url'];
        delete process.env['rindo_self_hosted_url'];
      });

      it.each(['https://familio.web.app/', 'https://familio.web.app'])(
        "returns a well formed self-hosted URL '(%s)' when npm_config_rindo_self_hosted_url is set",
        (selfHostedUrl) => {
          process.env['npm_config_rindo_self_hosted_url'] = selfHostedUrl;

          expect(getGitHubUrl()).toBe(selfHostedUrl);
        },
      );

      it.each(['https://familio.web.app/', 'https://familio.web.app'])(
        "returns a well formed self-hosted URL '(%s)' when rindo_self_hosted_url is set",
        (selfHostedUrl) => {
          process.env['rindo_self_hosted_url'] = selfHostedUrl;

          expect(getGitHubUrl()).toBe(selfHostedUrl);
        },
      );

      it('uses rindo_self_hosted_url over npm_config_rindo_self_hosted_url', () => {
        const npmConfigUrl = 'https://familio.web.app/opt-1';

        process.env['rindo_self_hosted_url'] = npmConfigUrl;
        process.env['npm_config_rindo_self_hosted_url'] = 'https://familio.web.app/opt-2';

        expect(getGitHubUrl()).toBe(npmConfigUrl);
      });
    });
  });

  describe('getGitHubUrl', () => {
    describe('self-hosted url', () => {
      afterEach(() => {
        delete process.env['rindo_self_hosted_url'];
      });

      it('returns a self-hosted url when one is provided', () => {
        const mockSelfHostedUrl = 'https://familio.web.app/';
        process.env['rindo_self_hosted_url'] = mockSelfHostedUrl;

        expect(getGitHubUrl()).toBe(mockSelfHostedUrl);
      });
    });

    it('returns the default GitHub host when no self-hosted option is provided', () => {
      expect(getGitHubUrl()).toBe('https://github.com/');
    });
  });
});
