This is a customized version of [Mastodon](https://github.com/mastodon/mastodon).

# Customizations

## Feat

## Fix

### font-src-allow-data-url

| Latest Version | Branch                               |
| -------------- | ------------------------------------ |
| v1.0.0         | `custom/fix/font-src-allow-data-url` |

This customization fixes the `Refused to load the font 'data:font/...` CSP error in browser.

To apply, run:

```sh
git cherry-pick 5d03eaa7cb731237a04eb36c8b01d7fea20e8242
```

## Chore

### dev-with-gitpod v1.0.0

This customization includes suitable configurations for development with [gitpod](https://gitpod.io/).

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/EqualMa/mastodon/tree/custom/stable)

Branch: `custom/chore/dev-with-gitpod`.

To apply, run:

```sh
git cherry-pick 74658b2a40abd55e810d49a675044ca58be0ffe6
```
