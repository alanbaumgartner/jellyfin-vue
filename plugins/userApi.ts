import { Context } from '@nuxt/types';
import { AxiosInstance } from 'axios';
import { UserApi } from '~/api/api';
import { Configuration } from '~/api/configuration';
import { PluginInjection } from '~/types/utils';

declare module '@nuxt/types' {
  interface Context {
    $userApi: UserApi;
  }

  interface NuxtAppOptions {
    $userApi: UserApi;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $userApi: UserApi;
  }
}

export default (context: Context, inject: PluginInjection): void => {
  const config = new Configuration();

  const userApi = new UserApi(config, '', context.$axios as AxiosInstance);
  inject('userApi', userApi);
};
