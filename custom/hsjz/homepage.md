此自定义修改对网站的登录和注册页面进行了修改。

# Changelog

## v3

基于 `v4.0.2`。
在 Mastodon 3.x 中，`/about` 等 public 页面使用的是单独的 layout。
而在 Mastodon 4.x 中，这些页面被整合到了 Web App 中，
因此难以单独修改此页面的主题，而再为不同主题设计适配的界面需要很大的工作量，
因此本版本移除了对于这些页面的修改。

To apply, run:

```sh
git cherry-pick v4.0.2..custom/hsjz/homepage-v3
```

## v1

修改的页面有：

- `layout 'auth'`
  - `/auth/sign_in`
  - `/auth/sign_up`
  - `/auth/confirmation/new`
  - `/auth/password/new`
  - `/settings/otp_authentication`
- `layout 'public'`
  - `/about`
  - `/about/more`
  - `/public`
  - `/explore`
- `layout 'admin'`

To apply, run:

```sh
git cherry-pick custom/chore/dev-with-gitpod-v2..custom/hsjz/homepage-v1
```
