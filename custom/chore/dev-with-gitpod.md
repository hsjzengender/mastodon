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

# Changelog

## v2

To apply, run:

```sh
# if you are already based on `v3.5.3`
git merge custom/chore/dev-with-gitpod-v2
git cherry-pick custom/chore/dev-with-gitpod-v2-base..custom/chore/dev-with-gitpod-v2
```

## v1

To apply, run:

```sh
# if you are already based on `v3.4.4`
git merge custom/chore/dev-with-gitpod-v1
# else
git cherry-pick 74658b2a40abd55e810d49a675044ca58be0ffe6^..custom/chore/dev-with-gitpod-v1
```
