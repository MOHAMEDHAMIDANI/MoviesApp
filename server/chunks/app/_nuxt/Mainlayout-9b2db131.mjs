import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, watch, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp } from '../server.mjs';
import __nuxt_component_0$2 from './Icon-4c8b4e6b.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-5d0b373b.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Movie",
  __ssrInlineRender: true,
  props: {
    id: {},
    poster_path: {},
    title: {},
    vote_average: {}
  },
  setup(__props) {
    const props = __props;
    let isFav = ref(false);
    const { $MoviesStore } = useNuxtApp();
    const addToFav = (id) => {
      if ($MoviesStore.favorite.includes(id) == true)
        ;
      else {
        isFav.value = true;
        $MoviesStore.favorite.push(id);
      }
    };
    const removeFromFav = (id) => {
      isFav.value = false;
      $MoviesStore.favorite = $MoviesStore.favorite.filter((current) => {
        return current != id;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      const _component_nuxt_link = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[200px] h-[300px] mb-[60px] ml-4 relative" }, _attrs))}>`);
      if (!unref(isFav)) {
        _push(`<span class="absolute top-0 duration-1000 -right-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          onClick: ($event) => addToFav(props.id),
          class: "mx-4 cursor-pointer",
          name: "material-symbols:heart-broken-outline",
          color: "blueviolet",
          size: "30"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<span class="absolute top-0 duration-1000 -right-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          onClick: ($event) => removeFromFav(props.id),
          class: "mx-4 cursor-pointer",
          name: "material-symbols:heart-check-rounded",
          color: "blueviolet",
          size: "30"
        }, null, _parent));
        _push(`</span>`);
      }
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "Movies-details-id", params: { id: _ctx.id } }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="bg-white bg-opacity-40 mt-1 pl-2 backdrop-blur-xl backdrop-filter rounded-xl flex justify-between content-center absolute top-0 left-1 text-white"${_scopeId}>${ssrInterpolate(_ctx.vote_average)} `);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "mx-1 mt-[3px]",
              name: "mdi:progress-star",
              color: "gold",
              size: "25"
            }, null, _parent2, _scopeId));
            _push2(`</span><img loading="true"${ssrRenderAttr("src", `https://image.tmdb.org/t/p/w500` + _ctx.poster_path)} alt="" class="w-full h-full"${_scopeId}><h3 class="px-1 w-full h-[50px] text-sm text-black text-center overflow-clip bg-white bg-opacity-40 backdrop-blur-xl backdrop-filter"${_scopeId}>${ssrInterpolate(_ctx.title)}</h3>`);
          } else {
            return [
              createVNode("span", { class: "bg-white bg-opacity-40 mt-1 pl-2 backdrop-blur-xl backdrop-filter rounded-xl flex justify-between content-center absolute top-0 left-1 text-white" }, [
                createTextVNode(toDisplayString(_ctx.vote_average) + " ", 1),
                createVNode(_component_Icon, {
                  class: "mx-1 mt-[3px]",
                  name: "mdi:progress-star",
                  color: "gold",
                  size: "25"
                })
              ]),
              createVNode("img", {
                loading: "true",
                src: `https://image.tmdb.org/t/p/w500` + _ctx.poster_path,
                alt: "",
                class: "w-full h-full"
              }, null, 8, ["src"]),
              createVNode("h3", { class: "px-1 w-full h-[50px] text-sm text-black text-center overflow-clip bg-white bg-opacity-40 backdrop-blur-xl backdrop-filter" }, toDisplayString(_ctx.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Movie.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex content-center justify-center" }, _attrs))}><span className="loading loading-dots loading-lg"></span></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loading.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const SearchBar = ref(false);
    const searchValue = ref("");
    const wait = ref(true);
    let data;
    watch(searchValue, () => {
      wait.value = true;
      searchValue.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loading = __nuxt_component_0$1;
      const _component_Movie = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-87eef867><div class="bg-white bg-opacity-10 backdrop-blur-xl rounded backdrop-filter w-full h-[80px]" data-v-87eef867><div class="navbar justify-end content-center" data-v-87eef867><div data-v-87eef867>`);
      if (unref(SearchBar)) {
        _push(`<div class="form-control mr-2" data-v-87eef867><input${ssrRenderAttr("value", unref(searchValue))} type="text" placeholder="any thoughts ?!" class="border-primary border-2 input w-[150px] h-[50px] md:w-auto" data-v-87eef867></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="btn btn-ghost btn-circle" data-v-87eef867><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-87eef867><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-87eef867></path></svg></button><button class="btn btn-ghost btn-circle" data-v-87eef867><div class="indicator" data-v-87eef867><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-87eef867><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" data-v-87eef867></path></svg><span class="badge badge-xs badge-primary indicator-item" data-v-87eef867></span></div></button></div></div></div>`);
      if (unref(searchValue)) {
        _push(`<div class="ml-[80px]" data-v-87eef867><h2 class="text-xl capitalize mb-3 ml-7 text-purple-600" data-v-87eef867> results for : ${ssrInterpolate(unref(searchValue))}</h2>`);
        if (unref(wait)) {
          _push(ssrRenderComponent(_component_Loading, null, null, _parent));
        } else {
          _push(`<div class="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" data-v-87eef867><!--[-->`);
          ssrRenderList(unref(data), (Movie) => {
            _push(ssrRenderComponent(_component_Movie, {
              key: Movie.id,
              id: Movie.id,
              title: Movie.title,
              vote_average: Movie.vote_average,
              poster_path: Movie.poster_path
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-87eef867"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavSideBar",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = ref(false);
    const infos = [
      {
        title: "Home",
        icon: "ph:house-fill",
        to: "/"
      },
      {
        title: "Movies ",
        icon: "streamline:entertainment-play-list-4-screen-television-display-player-movies-players-tv-media-video",
        to: "/Movies"
      },
      {
        title: "Series",
        icon: "streamline:food-popcorn-cook-corn-movie-snack-cooking-nutrition-bake",
        to: "/Series"
      },
      {
        title: "Favorite",
        icon: "carbon:favorite-filled",
        to: "/Favorite"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      const _component_nuxt_link = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(menu) ? "w-[250px]" : "w-[70px]", "top-0 left-0 fixed z-10 duration-700 w-[250px] h-full bg-white bg-opacity-40 backdrop-blur-xl rounded backdrop-filter"]
      }, _attrs))} data-v-0aecc54e><div class="w-full h-full flex justify-between content-center flex-col" data-v-0aecc54e><div data-v-0aecc54e><div class="w-full mt-4 border-b-4" data-v-0aecc54e>`);
      _push(ssrRenderComponent(_component_Icon, {
        onClick: () => menu.value = !unref(menu),
        class: "mb-3 rounded-sm duration-1000 cursor-pointer mx-4 hover:scale-[1.2]",
        name: "ic:round-view-list",
        color: "white",
        size: "40"
      }, null, _parent));
      _push(`</div><div class="w-full mt-4 border-b-4" data-v-0aecc54e><!--[-->`);
      ssrRenderList(infos, (info, index) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: info.to,
          key: index
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="my-3 cursor-pointer flex content-center w-full h-full" data-v-0aecc54e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                class: "mx-4 duration-1000 hover:scale-[1.2]",
                name: info.icon,
                color: "white",
                size: "30"
              }, null, _parent2, _scopeId));
              if (unref(menu)) {
                _push2(`<h3 class="duration-1000 text-white" data-v-0aecc54e${_scopeId}>${ssrInterpolate(info.title)}</h3>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "my-3 cursor-pointer flex content-center w-full h-full" }, [
                  createVNode(_component_Icon, {
                    class: "mx-4 duration-1000 hover:scale-[1.2]",
                    name: info.icon,
                    color: "white",
                    size: "30"
                  }, null, 8, ["name"]),
                  unref(menu) ? (openBlock(), createBlock("h3", {
                    key: 0,
                    class: "duration-1000 text-white"
                  }, toDisplayString(info.title), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="mb-10" data-v-0aecc54e>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cursor-pointer flex content-center w-full h-full" data-v-0aecc54e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "mx-4 duration-1000 hover:scale-[1.2]",
              name: "solar:logout-3-outline",
              color: "#f43f5e",
              size: "30"
            }, null, _parent2, _scopeId));
            if (unref(menu)) {
              _push2(`<h3 class="text-error duration-1000" data-v-0aecc54e${_scopeId}> Logout</h3>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "cursor-pointer flex content-center w-full h-full" }, [
                createVNode(_component_Icon, {
                  class: "mx-4 duration-1000 hover:scale-[1.2]",
                  name: "solar:logout-3-outline",
                  color: "#f43f5e",
                  size: "30"
                }),
                unref(menu) ? (openBlock(), createBlock("h3", {
                  key: 0,
                  class: "text-error duration-1000"
                }, " Logout")) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cursor-pointer flex content-center w-full h-full" data-v-0aecc54e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "mx-4 duration-1000 hover:scale-[1.2]",
              name: "solar:login-3-bold",
              color: "#34d399",
              size: "30"
            }, null, _parent2, _scopeId));
            if (unref(menu)) {
              _push2(`<h3 class="text-success duration-1000" data-v-0aecc54e${_scopeId}> Logout</h3>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "cursor-pointer flex content-center w-full h-full" }, [
                createVNode(_component_Icon, {
                  class: "mx-4 duration-1000 hover:scale-[1.2]",
                  name: "solar:login-3-bold",
                  color: "#34d399",
                  size: "30"
                }),
                unref(menu) ? (openBlock(), createBlock("h3", {
                  key: 0,
                  class: "text-success duration-1000"
                }, " Logout")) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavSideBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0aecc54e"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavBar = __nuxt_component_0;
  const _component_NavSideBar = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "body" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(ssrRenderComponent(_component_NavSideBar, null, null, _parent));
  _push(`<div class="ml-[80px] mt-[20px]">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Mainlayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Mainlayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Mainlayout as M, _sfc_main$4 as _, __nuxt_component_0$1 as a };
//# sourceMappingURL=Mainlayout-9b2db131.mjs.map
