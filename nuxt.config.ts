import { RouteConfig } from 'vue-router';
import pkg from './package.json';

const ENV = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = ENV === 'production';
const ROUTER_BASE = IS_PRODUCTION ? `/${pkg.name}/` : undefined;

export default {
  srcDir: 'src/',

  generate: {
    dir: 'docs',
  },

  router: {
    base: ROUTER_BASE,
    extendRoutes(routes: RouteConfig[], resolve: Function) {
      routes.push(
        {
          path: '/basic',
          name: 'basic',
          component: resolve(__dirname, 'src/views/List.vue'),
        },
        {
          path: '/basic/:id',
          name: 'basic-item',
          component: resolve(__dirname, 'src/views/Item.vue'),
        },
        {
          path: '/keepalive',
          component: resolve(__dirname, 'src/views/KeepAlive.vue'),
          children: [
            {
              path: '/',
              name: 'keepalive-index',
              component: resolve(__dirname, 'src/views/List.vue'),
            },
            {
              path: ':id',
              name: 'keepalive-item',
              component: resolve(__dirname, 'src/views/Item.vue'),
            },
          ],
        },
      );
    },
  },
  plugins: ['~/plugins/lib'],
};
