This is a customized version of [Mastodon](https://github.com/mastodon/mastodon).

# Customizations

## Feat

## max-toot-chars-from-env-var

| Latest Version | Branch                                    |
| -------------- | ----------------------------------------- |
| v1.0.0         | `custom/feat/max-toot-chars-from-env-var` |

This customization allows admin to configure max toot chars
with env var `MAX_TOOT_CHARS`.

To apply, run:

```sh
git cherry-pick 79ce235ddaccbac65aebb195fdff3652136e4533
```

### status-content-type-html

This customization allows user to choose html content or plain text when posting status.

| Latest Version | Branch                                 |
| -------------- | -------------------------------------- |
| v2.0.0         | `custom/feat/status-content-type-html` |

To apply this customization, after applying the changes with git,
**you must make a database migration**.

```sh
# if you are already based on `v3.4.4`
git merge custom/feat/status-content-type-html
# else
git cherry-pick f5067b5f6b8c219cd592385d5c0d0910510b61a0^..custom/feat/status-content-type-html

# after applying the changes, do a database migration
rails db:migrate
```

#### v2.0.0

This version use a more relaxed sanitizer to sanitize html status.

The new sanitizer config is `MASTODON_STATUS_HTML` defined in
[`lib/sanitize_ext/sanitize_config.rb`](lib/sanitize_ext/sanitize_config.rb),
which is based on
[`Sanitize::Config::RELAXED`](https://github.com/rgrove/sanitize/blob/main/lib/sanitize/config/relaxed.rb).

##### BREAKING CHANGES

- use a more relaxed html sanitizer based on [`Sanitize::Config::RELAXED`](https://github.com/rgrove/sanitize/blob/main/lib/sanitize/config/relaxed.rb)

#### v1.0.0

This version changes api `POST /api/v1/statuses`
to allow users to specify `content_type` attribute of the status.

`content_type` can be:

- `"text/html"`
- `"text/plain"`
- `null` or unset, equivalent to `"text/plain"`

##### Database Migration

- [`AddContentTypeToStatuses`](db/migrate/20211210194200_add_content_type_to_statuses.rb)

##### Compatibility

- Backward compatible for older frontend: when `content_type` is `null` or unset, `content_type` defaults to `text/plain`.
- Compatibility for other instances is currently untested and unknown

> This version borrows many code from [mashirozx/mastodon#229](https://github.com/mashirozx/mastodon/pull/229). Thanks for the work.

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

### cn-localization

| Latest Version | Branch                      |
| -------------- | --------------------------- |
| v1.0.0         | `custom/ui/cn-localization` |

**Not merged into `custom/stable`**

This customization makes Mastodon more friendly
to users from China, especially those from Weibo.

To apply, run:

```sh
# if you are already based on `v3.4.4`
git merge custom/ui/cn-localization
# else
git cherry-pick custom/ui/cn-localization-v0..custom/ui/cn-localization
```

#### Changelog

##### v1

- `1.2.1` Show favourites count of status in status column.

  `custom/ui/cn-localization-v0..custom/ui/cn-localization-v1.2.1`

- `1.1.0` Show bookmark icon button in status column.

  `custom/ui/cn-localization-v1.2.1` Fix: bookmark menu group should be removed if there are no other menu items in the group.

  `custom/ui/cn-localization-v0..custom/ui/cn-localization-v1.1.0`

- `1.0.0` Make icons of status operations more friendly to Weibo users.

  `custom/ui/cn-localization-v0..custom/ui/cn-localization-v1.0.0`
