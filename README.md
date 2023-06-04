# Modern FE 2023


## Tech-stack

- nodenv
- pnpm
- typescript
- SolidJs
- Vite
- tailwind
- eslint
- prettier

## About formatter and linter.

Use prettier as formatter and eslint as linter.
Prettier recommend not to combine these (https://prettier.io/docs/en/comparison.html).
Though there are some integration plugin (https://prettier.io/docs/en/related-projects.html#eslint-integrations), I don't integrate prettier with eslint. Just disable some rules in eslint which conflict prettier. This is achived by `eslint-config-prettier` and adding extention on `.eslintrc.cjs`.

## Useful commands

- `pnpm exec <command>`
