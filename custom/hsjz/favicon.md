此自定义修改将站点图标更换为了后花园的图标。

# Changelog

## v3

Now the code is rebased on `v4.0.2`.
Mastodon start using svg files as sources for icons,
we updated the svg files in `app/javascript/images`
and then run `./bin/rake branding:generate_app_icons` to auto generate the images.
If run in dev container, please run `sudo apt install librsvg2-bin` first
because the task relies on `rsvg-convert`.

To apply, run:

```sh
git cherry-pick v4.0.2..custom/hsjz/favicon-v3
```

## v2

To apply, run:

```sh
git cherry-pick custom/chore/dev-with-gitpod-v2..custom/hsjz/favicon-v2
```

## v1

To apply, run:

```sh
git cherry-pick 5c1ef7056ac30c85552dc9748ce013563acb34bc^..02fafe35f3baf92308a687e53c0abf51f7aa0724
```
