# NETHERNITE TEST

### Npm dev commands
> - `start` - run development.
> - `lint` - check your code for codeStyle.
---
> - `npm run lint -- --fix` fix linter problem.

### Components
> - Use file name only in `PascalCase`.
> - Use file name as a `componentName`.
> - Use componentName in `kebab-case` as root className.
> - Use `self-closing tags` if you don't pass content.
> - Don't use `extension` for import *.vue and *.js files.
> - Don't use `props` as `Array`. Always `describe` it.
> - Try to not use `mixins`. Use `helpers`.

### Svg in components
> - Compress file with `Svgomg`
> - Move it to `src/assets/svg`
> - Import `IconName` from `assets/svg/IconName`
> - Use it as a `<IconName />`
> - Use `fill="currentColor"` in svg path.
> - Use color in styles for set svg `color`.

### Styles
> - Use `variables.scss` to set @media, color and font properties.
> - Use `animations.scss` to define names for vue transitions.
> - Use `keyframes.scss` to set @keyframes for vue transitions.
> - USE `base-styel.scss` to set global page styles.
> - Use only `scoped` styles.
> - Use only `scss` style lang.

### Breakpoints
| Variable      | Class name    | Size    |
| ------------- |:-------------:| -------:|
| $screen-xs    | .col          | <320px  |
| $screen-sm    | .col-sm       | ≥576px  |
| $screen-md    | .col-md       | ≥768px  |
| $screen-lg    | .col-lg       | ≥992px  |
| $screen-xl    | .col-xl       | ≥1200px |

### Vuex
> - Don't use Vuex without `types` from store/types.js.
> - Don't use `unnamed Vuex modules` always add `moduleName`.
> - Don't use `mapState` - always write `getters`.
> - Don't use `mapMutations` - always call `actions`.
> - Don't use `requests in Vuex actions`. Move it to separate `api` service.

### Commit and push
> - Don't commit without passing `.eslint` tests.

### Docs
> - [Vue](https://vuejs.org/)
> - [Vuex](https://vuex.vuejs.org/)
> - [Vue Router](https://router.vuejs.org/)
> - [Vue SVG Loader](https://github.com/visualfanatic/vue-svg-loader)
> - [Lodash](https://lodash.com/)
> - [Axios](https://github.com/axios/axios/)
> - [Bootstrap 4 Grid](https://getbootstrap.com/docs/4.0/layout/grid/)
> - [VueDevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
> - [Svgomg](https://jakearchibald.github.io/svgomg/)
> - [Sass](https://sass-lang.com/)
> - [WebpackNotifier](https://github.com/Turbo87/webpack-notifier)
> - [Favicons Webpack Plugin](https://github.com/jantimon/favicons-webpack-plugin)  
