import{u as d}from"./index.a1a7488d.js";import{k as p,p as h,c as m,w as _,o as u,l as e,u as s,t as o,q as a}from"./entry.5da7f8e5.js";import{u as v}from"./fetch.372e19d9.js";import{M as x}from"./Mainlayout.57e02e44.js";import"./Icon.1c7549f0.js";import"./config.72c506cf.js";import"./nuxt-link.c3b05715.js";const f=e("a",{href:"/",class:"ml-5 mt-2 btn btn-primary"},"Home page",-1),w={class:"container flex flex-wrap text-white"},I={class:"w-[400px] min-w-[250px]"},g=["src"],k={class:"info"},j={class:"capitalize ml-5 mt-4"},y={class:"text-xl"},z={class:"capitalize"},J={class:"text-xl"},M={class:""},N={class:"max-w-[450px] min-w-[250px] text-white"},Y=e("span",{class:"underline"},"overview :",-1),T={__name:"[id]",setup(b){const c=p().params.id,n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWJiMDZhOTk5ODAxMzlkZjI4MDkyMGUxNGExYzFkYyIsInN1YiI6IjY0ODVmYjkzYzlkYmY5MDBjNTcyNGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPXI0ticpVdpUZjx0levKXkjUeb2v4ctFF05x7kVlQ"}};let t=[];const{data:r}=v(`https://api.themoviedb.org/3/movie/${c}?language=en-US`,n,"$hIcvvmO1RZ");return t.push(r),h(()=>{const i=t[0].value.title,l=t[0].value.overview;d({title:`${i}`,ogTitle:`${i}`,description:`${l}`,ogDescription:`${l}`})}),(i,l)=>(u(),m(x,null,{default:_(()=>[f,e("div",w,[e("div",I,[e("img",{class:"p-3 w-full h-full object-cover",src:"https://image.tmdb.org/t/p/w500"+s(t)[0].value.poster_path,alt:""},null,8,g)]),e("div",k,[e("div",j,[e("h2",y,"title : "+o(s(t)[0].value.title),1),e("h2",null,"release date : "+o(s(t)[0].value.release_date),1),e("h2",z,[a("children : "),e("span",null,o(s(t)[0].value.adults?"not recommended for children":"recommended for children"),1)]),e("span",J,[a("vote : "),e("span",M,o(s(t)[0].value.vote_average),1),a(" / 10")]),e("p",N,[Y,a(" "+o(s(t)[0].value.overview),1)])])])])]),_:1}))}};export{T as default};