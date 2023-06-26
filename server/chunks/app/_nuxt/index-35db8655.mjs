import { M as Mainlayout, a as __nuxt_component_0$1 } from './Mainlayout-9b2db131.mjs';
import __nuxt_component_0 from './Icon-4c8b4e6b.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, ref, mergeProps, unref, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrRenderSlotInner } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import axios from 'axios';
import { u as useSeoMeta } from './index-daf323f1.mjs';
import './nuxt-link-5d0b373b.mjs';
import 'ufo';
import './config-b976e094.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "carousel",
  __ssrInlineRender: true,
  setup(__props) {
    const currentSlide = ref(2);
    const nextslide = () => {
      if (currentSlide.value === 20) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };
    const prevslide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 20;
        return;
      }
      currentSlide.value -= 1;
    };
    const autoplay = () => {
      setInterval(() => {
        nextslide();
      }, 4e3);
    };
    autoplay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full relative" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { currentSlide: unref(currentSlide) }, null, _push, _parent);
      _push(ssrRenderComponent(_component_Icon, {
        onClick: prevslide,
        class: "mx-4 left-0 z-10 top-[50%] -translate-y-[50%] cursor-pointer absolute duration-1000 hover:scale-[1.2]",
        name: "ic:sharp-arrow-circle-left",
        color: "#570df8",
        size: "35"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        onClick: nextslide,
        class: "mx-4 right-0 top-[50%] -translate-y-[50%] z-10 cursor-pointer absolute bottom-0 duration-1000 hover:scale-[1.2]",
        name: "ic:sharp-arrow-circle-right",
        color: "570df8",
        size: "35"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carousel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full absolute" }, _attrs))}>`);
  ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/slider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UpComing",
  __ssrInlineRender: true,
  setup(__props) {
    let Upcoming;
    const wait = ref(true);
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming",
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
        Upcoming = results;
        wait.value = false;
      });
    };
    getData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loading = __nuxt_component_0$1;
      const _component_carousel = _sfc_main$3;
      const _component_slider = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(wait)) {
        _push(ssrRenderComponent(_component_Loading, null, null, _parent));
      } else {
        _push(`<div class="container relative left-[50%] h-[500px] p-2 -translate-x-[50%] bg-white bg-opacity-10 backdrop-blur-xl rounded-xl backdrop-filter"><h3 class="text-white absolute mt-5 w-[150px] z-[21] text-center translate-x-[-50%] bg-white bg-opacity-10 backdrop-blur-xl rounded-xl backdrop-filter top-0 left-[50%] z-1"> Up Coming </h3><div class="w-full h-full">`);
        _push(ssrRenderComponent(_component_carousel, null, {
          default: withCtx(({ currentSlide }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(Upcoming), (img, index) => {
                _push2(ssrRenderComponent(_component_slider, { key: index }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (currentSlide === index + 1) {
                        _push3(`<img${ssrRenderAttr("src", `https://image.tmdb.org/t/p/w500` + unref(Upcoming)[index].poster_path)} alt="" class="w-full h-full object-contain object-center"${_scopeId2}>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        currentSlide === index + 1 ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: `https://image.tmdb.org/t/p/w500` + unref(Upcoming)[index].poster_path,
                          alt: "",
                          class: "w-full h-full object-contain object-center"
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(Upcoming), (img, index) => {
                  return openBlock(), createBlock(_component_slider, { key: index }, {
                    default: withCtx(() => [
                      currentSlide === index + 1 ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: `https://image.tmdb.org/t/p/w500` + unref(Upcoming)[index].poster_path,
                        alt: "",
                        class: "w-full h-full object-contain object-center"
                      }, null, 8, ["src"])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpComing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Mr.Movies",
      ogTitle: "Mr.Movies",
      description: "descover new Movies and series in one place ",
      ogDescription: "descover new Movies series in one place"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UpComing = _sfc_main$1;
      _push(ssrRenderComponent(Mainlayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UpComing, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UpComing)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-35db8655.mjs.map
