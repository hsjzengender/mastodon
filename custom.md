This is a customized version of [Mastodon](https://github.com/mastodon/mastodon).

# Customizations

## Feat

## Fix

## Chore

### dev-with-gitpod

| Latest Version | Branch                         |
| -------------- | ------------------------------ |
| v1.0.0         | `custom/chore/dev-with-gitpod` |

This customization includes suitable configurations for development with [gitpod](https://gitpod.io/).

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/EqualMa/mastodon/tree/custom/stable)

After opened in gitpod, the workspace will automatically
start `redis` and `postgres`, and
install project dependencies.

If this is the first time you open the workspace,
you need to run `rails db:setup`
after dependencies installed,
to initialize the `postgres` database.

Then you can run `foreman start` to start all services.

Run `gp url 3000` in another terminal to see the url
of the web page.
Run `gp url 3000 | sed -e "s/^https\?:\/\//admin@/"` to see the email of the admin user.
Then you can navigate to the login page and use the email with password `mastodonadmin` to login.

To apply, run:

```sh
# if you are already based on `v3.4.4`
git merge custom/chore/dev-with-gitpod
# else
git cherry-pick 74658b2a40abd55e810d49a675044ca58be0ffe6^..custom/chore/dev-with-gitpod
```

## UI

### status-replying-to

| Latest Version | Branch                         |
| -------------- | ------------------------------ |
| v1.0.0         | `custom/ui/status-replying-to` |

**Not merged into `custom/stable`**

This customization shows whether a toot is
replying to another toot.

To apply, run:

```sh
# if you are already based on `v3.4.4`
git merge custom/ui/status-replying-to
# else
git cherry-pick custom/ui/status-replying-to-v0..custom/ui/status-replying-to
```

#### Changelog

##### v1

- `1.0.0` Show `This is a reply` in status that is replying to another toot.

  `custom/ui/status-replying-to-v0..custom/ui/status-replying-to-v1.0.0`
