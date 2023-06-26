import { M as Mainlayout, _ as _sfc_main$4 } from './Mainlayout-9b2db131.mjs';
import { defineComponent, ref, withCtx, unref, openBlock, createBlock, createVNode, Fragment, renderList, useSSRContext } from 'vue';
import { u as useNuxtApp, a as useRoute } from '../server.mjs';
import { u as useSeoMeta } from './index-daf323f1.mjs';
import { u as useFetch } from './fetch-96bdf2d3.mjs';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import './Icon-4c8b4e6b.mjs';
import './config-b976e094.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './nuxt-link-5d0b373b.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'axios';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Favorite",
  __ssrInlineRender: true,
  setup(__props) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWJiMDZhOTk5ODAxMzlkZjI4MDkyMGUxNGExYzFkYyIsInN1YiI6IjY0ODVmYjkzYzlkYmY5MDBjNTcyNGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPXI0ticpVdpUZjx0levKXkjUeb2v4ctFF05x7kVlQ"
      }
    };
    const fav = ref([]);
    let data;
    const { $MoviesStore } = useNuxtApp();
    $MoviesStore.favorite.forEach((id = 2) => {
      const { data: movie } = useFetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options, "$pT2UF71jRR");
      fav.value.push(movie.value);
    });
    data = fav.value;
    const route = useRoute().name;
    useSeoMeta({
      title: `${route}`,
      ogTitle: "save your favorite movies and series in one place",
      description: "save your favorite movies and series in one place",
      ogDescription: "save your favorite movies and series in one place"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Movie = _sfc_main$4;
      _push(ssrRenderComponent(Mainlayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(data)) {
              _push2(`<h2 class="text-xl capitalize mb-3 ml-7 text-purple-600"${_scopeId}> Your favorite stuff :</h2>`);
            } else {
              _push2(`<h2 class="text-xl capitalize mb-3 ml-7 text-purple-600"${_scopeId}> you have to like some thing to appeare here </h2>`);
            }
            _push2(`<div class="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"${_scopeId}><!--[-->`);
            ssrRenderList(unref(data), (Movie) => {
              _push2(ssrRenderComponent(_component_Movie, {
                key: Movie.id,
                id: Movie.id,
                title: Movie.title,
                vote_average: Movie.vote_average,
                poster_path: Movie.poster_path
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              unref(data) ? (openBlock(), createBlock("h2", {
                key: 0,
                class: "text-xl capitalize mb-3 ml-7 text-purple-600"
              }, " Your favorite stuff :")) : (openBlock(), createBlock("h2", {
                key: 1,
                class: "text-xl capitalize mb-3 ml-7 text-purple-600"
              }, " you have to like some thing to appeare here ")),
              createVNode("div", { class: "grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (Movie) => {
                  return openBlock(), createBlock(_component_Movie, {
                    key: Movie.id,
                    id: Movie.id,
                    title: Movie.title,
                    vote_average: Movie.vote_average,
                    poster_path: Movie.poster_path
                  }, null, 8, ["id", "title", "vote_average", "poster_path"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Favorite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Favorite-a477a7d4.mjs.map
