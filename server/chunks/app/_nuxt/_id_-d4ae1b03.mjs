import { withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { a as useRoute } from '../server.mjs';
import { u as useFetch } from './fetch-96bdf2d3.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { M as Mainlayout } from './Mainlayout-9b2db131.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
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
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import './Icon-4c8b4e6b.mjs';
import './config-b976e094.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './nuxt-link-5d0b373b.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const id = useRoute().params.id;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWJiMDZhOTk5ODAxMzlkZjI4MDkyMGUxNGExYzFkYyIsInN1YiI6IjY0ODVmYjkzYzlkYmY5MDBjNTcyNGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPXI0ticpVdpUZjx0levKXkjUeb2v4ctFF05x7kVlQ"
      }
    };
    let current_movie = [];
    const { data: movie } = useFetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options, "$hIcvvmO1RZ");
    current_movie.push(movie);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Mainlayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="/" class="ml-5 mt-2 btn btn-primary"${_scopeId}>Home page</a><div class="container flex flex-wrap text-white"${_scopeId}><div class="w-[400px] min-w-[250px]"${_scopeId}><img class="p-3 w-full h-full object-cover"${ssrRenderAttr("src", `https://image.tmdb.org/t/p/w500` + unref(current_movie)[0].value.poster_path)} alt=""${_scopeId}></div><div class="info"${_scopeId}><div class="capitalize ml-5 mt-4"${_scopeId}><h2 class="text-xl"${_scopeId}>title : ${ssrInterpolate(unref(current_movie)[0].value.title)}</h2><h2${_scopeId}>release date : ${ssrInterpolate(unref(current_movie)[0].value.release_date)}</h2><h2 class="capitalize"${_scopeId}>children : <span${_scopeId}>${ssrInterpolate(unref(current_movie)[0].value.adults ? "not recommended for children" : "recommended for children")}</span></h2><span class="text-xl"${_scopeId}>vote : <span class=""${_scopeId}>${ssrInterpolate(unref(current_movie)[0].value.vote_average)}</span> / 10</span><p class="max-w-[450px] min-w-[250px] text-white"${_scopeId}><span class="underline"${_scopeId}>overview :</span> ${ssrInterpolate(unref(current_movie)[0].value.overview)}</p></div></div></div>`);
          } else {
            return [
              createVNode("a", {
                href: "/",
                class: "ml-5 mt-2 btn btn-primary"
              }, "Home page"),
              createVNode("div", { class: "container flex flex-wrap text-white" }, [
                createVNode("div", { class: "w-[400px] min-w-[250px]" }, [
                  createVNode("img", {
                    class: "p-3 w-full h-full object-cover",
                    src: `https://image.tmdb.org/t/p/w500` + unref(current_movie)[0].value.poster_path,
                    alt: ""
                  }, null, 8, ["src"])
                ]),
                createVNode("div", { class: "info" }, [
                  createVNode("div", { class: "capitalize ml-5 mt-4" }, [
                    createVNode("h2", { class: "text-xl" }, "title : " + toDisplayString(unref(current_movie)[0].value.title), 1),
                    createVNode("h2", null, "release date : " + toDisplayString(unref(current_movie)[0].value.release_date), 1),
                    createVNode("h2", { class: "capitalize" }, [
                      createTextVNode("children : "),
                      createVNode("span", null, toDisplayString(unref(current_movie)[0].value.adults ? "not recommended for children" : "recommended for children"), 1)
                    ]),
                    createVNode("span", { class: "text-xl" }, [
                      createTextVNode("vote : "),
                      createVNode("span", { class: "" }, toDisplayString(unref(current_movie)[0].value.vote_average), 1),
                      createTextVNode(" / 10")
                    ]),
                    createVNode("p", { class: "max-w-[450px] min-w-[250px] text-white" }, [
                      createVNode("span", { class: "underline" }, "overview :"),
                      createTextVNode(" " + toDisplayString(unref(current_movie)[0].value.overview), 1)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Movies-details/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-d4ae1b03.mjs.map
