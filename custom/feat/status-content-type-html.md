# custom/feat/status-content-type-html

## v3

Add optional `content_type` field to status related api.

To apply this customization, after applying the changes with git,
**you must make a database migration**.

1. Apply new code with git

   ```sh
   git cherry-pick v4.0.2..custom/feat/status-content-type-html
   ```

2. Do a database migration

   - Non-Docker: `RAILS_ENV=production bundle exec rails db:migrate`
   - Docker: `docker-compose run --rm web rails db:migrate`
