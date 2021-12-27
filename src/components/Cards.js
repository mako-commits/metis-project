import React from "react";
import p1 from "../images/p1.jpg"
import p2 from "../images/p2.jpg"
import p3 from "../images/p3.jpg"

const Cards = () => {
  return (
    <>
   <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={p1} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Some Dude</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Unknown</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={p2} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Brains Guy</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Dexter</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={p3} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Frontend Dev</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Raging Bull</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     
    </>
  );
};

export default Cards;
