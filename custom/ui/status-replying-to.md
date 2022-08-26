This customization shows whether a toot is
replying to another toot.
If a status is replying to another toot,
`This is a reply` will be shown before the content.

To apply, run:

```sh
# if you are already based on `v3.4.4`
git merge custom/ui/status-replying-to
# else
git cherry-pick custom/ui/status-replying-to-v0..custom/ui/status-replying-to
```

# Changelog

## v2

To apply, run:

```sh
git cherry-pick custom/chore/dev-with-gitpod-v2..custom/hsjz/status-replying-to-v2
```

## v1

To apply, run:

```sh
git cherry-pick 41b31f31b9bfc57e94d9bcd8fc4eafdcaba66466
```
