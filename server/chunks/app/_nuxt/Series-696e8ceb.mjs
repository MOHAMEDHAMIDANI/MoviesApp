import { M as Mainlayout, a as __nuxt_component_0$1, _ as _sfc_main$4 } from './Mainlayout-9b2db131.mjs';
import { defineComponent, ref, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useSeoMeta } from './index-daf323f1.mjs';
import { a as useRoute } from '../server.mjs';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import axios from 'axios';
import './Icon-4c8b4e6b.mjs';
import './config-b976e094.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './nuxt-link-5d0b373b.mjs';
import 'ufo';
import 'unhead';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import '@unhead/ssr';
import '@unhead/shared';
import 'vue-router';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
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
  __name: "Series",
  __ssrInlineRender: true,
  setup(__props) {
    const wait = ref(true);
    let Series;
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/top_rated",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWJiMDZhOTk5ODAxMzlkZjI4MDkyMGUxNGExYzFkYyIsInN1YiI6IjY0ODVmYjkzYzlkYmY5MDBjNTcyNGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPXI0ticpVdpUZjx0levKXkjUeb2v4ctFF05x7kVlQ"
      }
    };
    const getData = () => {
      wait.value = true;
      axios.request(options).then(function(response) {
        const results = response.data.results;
        Series = results;
        wait.value = false;
      });
    };
    getData();
    const route = useRoute().name;
    useSeoMeta({
      title: `${route}`,
      ogTitle: `${route}`,
      description: "all series in one place",
      ogDescription: "all series in one place"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loading = __nuxt_component_0$1;
      const _component_Movie = _sfc_main$4;
      _push(ssrRenderComponent(Mainlayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl capitalize mb-3 ml-7 text-purple-600"${_scopeId}> discover new series :</h2>`);
            if (unref(wait)) {
              _push2(ssrRenderComponent(_component_Loading, null, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="grid gap-x-2 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"${_scopeId}><!--[-->`);
              ssrRenderList(unref(Series), (serie) => {
                _push2(ssrRenderComponent(_component_Movie, {
                  key: serie.id,
                  id: serie.id,
                  title: serie.name,
                  vote_average: serie.vote_average,
                  poster_path: serie.poster_path
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
          } else {
            return [
              createVNode("h2", { class: "text-xl capitalize mb-3 ml-7 text-purple-600" }, " discover new series :"),
              unref(wait) ? (openBlock(), createBlock(_component_Loading, { key: 0 })) : (openBlock(), createBlock("div", {
                key: 1,
                class: "grid gap-x-2 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(Series), (serie) => {
                  return openBlock(), createBlock(_component_Movie, {
                    key: serie.id,
                    id: serie.id,
                    title: serie.name,
                    vote_average: serie.vote_average,
                    poster_path: serie.poster_path
                  }, null, 8, ["id", "title", "vote_average", "poster_path"]);
                }), 128))
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Series.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Series-696e8ceb.mjs.map
