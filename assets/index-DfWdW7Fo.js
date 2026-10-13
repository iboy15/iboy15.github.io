(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&m(p)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const r={name:"Ishak",role:"Mobile application developer",location:"Indonesia",email:"iboy_ishak@yahoo.com",phone:"+62 878 8935 6310",phoneHref:"tel:+6287889356310",linkedin:"https://www.linkedin.com/in/iboy-ishak-4b81174b/",portrait:"media/portrait.jpg"},u=[{period:"From Aug 2016",title:"Mobile apps programmer",place:"Ciputra Group · Citra Raya, Cikupa, Tangerang",detail:"Android and iOS apps for property sales: product catalogues, customer records, and project reporting."},{period:"2018",title:"Freelance",place:"E-Magazine for Jamkrindo · Indonesia",detail:"A mobile magazine with monthly issues, video, quizzes, and company news."},{period:"2017",title:"Freelance",place:"PeGe Grosir · Indonesia",detail:"Wholesale shopping app with sign-in, cart, checkout, and account balance."},{period:"Jan–Aug 2016",title:"Mobile app programmer",place:"Cerberus Yumana Karya · Pondok Indah, Jakarta Selatan",detail:"Android, iOS, and web apps, including a 360° virtual tour viewer built with Unity."}],f=[{period:"2013–2015",title:"Diploma IV",place:"Institut Teknologi Bandung"},{period:"2009–2012",title:"Diploma III",place:"Politeknik Negeri Pontianak"},{period:"2018",title:"React & React Native",place:"Hacktiv8, Jakarta"}],y=["React Native","React","Redux","JavaScript","PHP","SQL","JSON APIs","Android","iOS","Unity"],l=[{slug:"incyt",name:"INCYT by LX",category:"IoT",summary:"Field monitoring for sensors, trackers, and controllers.",story:"INCYT lets an operator watch the parts of a site that matter, whether the operation is large or small. The app configures LX devices and sends readings to a phone, tablet, or computer, with alerts when something needs attention.",highlights:["Activate devices and check status, battery, and data","See devices and live readings on a map and in AR","Filter detail in Cockpit and Dashboard","Receive alerts and notifications"],platforms:["Android","iOS"],tools:["React Native"],image:"media/incyt.jpg",imageAlt:"INCYT phone screens showing a sensor map and a temperature reading",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=io.incyt.mobile"},{label:"App Store",href:"https://apps.apple.com/id/app/incyt/id1524190207"}]},{slug:"coinpass",name:"Coinpass",category:"Finance",summary:"Buy, sell, and trade crypto on a UK exchange.",story:"Coinpass is a mobile app for a UK crypto exchange registered with the Financial Conduct Authority. People deposit from a bank, buy an asset, sell it, and withdraw pounds without a complicated trading screen.",highlights:["Buy, sell, and trade from a simple home screen","Deposit from a bank and withdraw to GBP","Recent activity for deposits, withdrawals, and trades"],platforms:["Android","iOS"],tools:["React Native"],image:"media/coinpass.jpg",imageAlt:"Coinpass mobile screens showing a sterling balance and crypto artwork",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.coinpassmobile"},{label:"App Store",href:"https://apps.apple.com/gb/app/coinpass-mobile/id1530358553"}]},{slug:"yoyo-kitchen",name:"YOYO Kitchen",category:"Food",summary:"Membership shop for 御壹工房, with points and member prices.",story:"This is the membership platform for YOYO Kitchen. Members buy products at member prices, collect points, join activities, and talk in group sharing.",highlights:["Member-only products and offers","Points and discounts","Activities and group sharing"],platforms:["Android","iOS"],tools:["React Native"],image:"media/yoyo.jpg",imageAlt:"YOYO Kitchen membership home and online shop screens",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.yoyokitchen.marketplace"}],note:"The old site linked an iTunes Connect page rather than the App Store app, so only the Android listing is included here."},{slug:"financial-fortress",name:"Financial Fortress",category:"Finance",summary:"A place to manage an insurance and investment portfolio.",story:"Financial Fortress helps a client see an insurance and investment portfolio and get help with it. The Android package is published as Virtus Portfolio.",highlights:["Portfolio overview","Help with insurance and investments"],platforms:["Android","iOS"],tools:["React Native"],image:"media/fortress.jpg",imageAlt:"Financial Fortress portfolio screens on two phones",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.sg.virtusportfolio"},{label:"App Store",href:"https://apps.apple.com/id/app/financial-fortress/id1596041183"}]},{slug:"virtus",name:"Salesbuilder",category:"Finance",summary:"Sales activity tracker for the Virtus team.",story:"Salesbuilder by Fortress is a sales activity tracker. Advisors log the work around a client instead of keeping it in separate notes.",highlights:["Track sales activity","Built for the Virtus / Fortress team"],platforms:["Android","iOS"],tools:["React Native"],image:"media/virtus.jpg",imageAlt:"Virtus sales app screens on two phones",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=sg.com.virtusassociates"},{label:"App Store",href:"https://apps.apple.com/id/app/salesbuilder-by-fortress/id1596038271"}]},{slug:"citralink",name:"Citralink",category:"Property",summary:"Product knowledge and purchase tools for Ciputra homes.",story:"Citralink holds Ciputra Group product information: e-brochures, price lists, payment simulations, site plans, galleries, 360° tours, and product knowledge. Buyers can also register a purchase order number.",highlights:["Brochures, prices, and payment simulations","Galleries and 360° tours","Product knowledge and purchase registration"],platforms:["Android","iOS"],tools:["React Native","PHP","JavaScript","SQL"],image:"media/citralink.jpg",imageAlt:"Citralink property screens on two phones",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.embarcadero.citralink"},{label:"App Store",href:"https://apps.apple.com/nz/app/citra-link/id1362469791"}]},{slug:"sales-monitoring",name:"Sales Monitoring",category:"Property",summary:"CRM for in-house property sales teams.",story:"The sales monitoring system stores and processes customer data for in-house sales, and it shows how the team is performing. Summaries can be filtered by period, project, and where a lead came from. Sales, supervisors, managers, and associate directors each see a different view.",highlights:["Customer records for in-house sales","Performance by period and project","Different access for each role"],platforms:["Android","iOS"],tools:["React Native","PHP","JavaScript","SQL"],image:"media/sales.jpg",imageAlt:"Sales monitoring screens on two phones",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.citralink.sms"},{label:"App Store",href:"https://apps.apple.com/nz/app/sms/id1434015949"}]},{slug:"mms",name:"Monitoring Management",category:"Property",summary:"Sales reports across Ciputra projects.",story:"The monitoring management system reports sales for each Ciputra project. The dashboard covers results from the start of the month back to the previous month, yearly and monthly targets, achievement, and the current month. Reports can also be cut by in-house sales, agents, and cluster.",highlights:["Targets and achievement by project","Reports for a chosen period","Breakdowns by sales channel and cluster"],platforms:["Android","iOS"],tools:["React Native","PHP","JavaScript","SQL"],image:"media/mms.jpg",imageAlt:"Monitoring management dashboard on a phone",links:[],note:"Distributed as a private app and on TestFlight, so there is no public store link."},{slug:"superhand",name:"Superhand",category:"Community",summary:"Donations, events, and news for mosques and foundations.",story:"Superhand, also used as MasjidPay, is a fundraising platform for mosques and other foundations. It covers donation projects, events, news, and video.",highlights:["Fundraising projects","Events, news, and video","Built for mosques and foundations"],platforms:["Android","iOS","Web"],tools:["React Native","PHP","JavaScript","SQL"],image:"media/superhand.jpg",imageAlt:"Superhand app screens on two phones",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.ptsuperhand.superhand"},{label:"App Store",href:"https://apps.apple.com/us/app/superhand/id1471357988"}]},{slug:"tigtac",name:"TigTac",category:"Experiment",summary:"A small game built around machine learning.",story:"TigTac is a game experiment that uses machine learning. It was shared as an Expo project.",highlights:["Game loop","Machine learning experiment","Shared with Expo"],platforms:["Android","iOS"],tools:["React Native","Expo"],image:"media/tigtac.jpg",imageAlt:"TigTac game screens on two phones",links:[{label:"Expo",href:"https://exp.host/@iboy15/tictagexpo"}]},{slug:"jamkrindo",name:"Jamkrindo Magazine",category:"Community",year:"2018",summary:"Monthly magazine, video, and quizzes for Jamkrindo.",story:"Freelance work in 2018. The app publishes Jamkrindo’s monthly magazine together with video, quizzes, and other company news.",highlights:["Monthly magazine issues","Video and quizzes","Company news"],platforms:["Android"],tools:["React Native","PHP","JavaScript","SQL"],image:"media/jamkrindo.jpg",imageAlt:"Jamkrindo e-magazine screens on a phone",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.trijayamedia.EMagazine"}]}],v=["All","IoT","Finance","Food","Property","Community","Experiment"];function h(){const a=document.querySelector("#main");if(!a)throw new Error("Missing #main");return a}const c=a=>`./${a}`,t=a=>a.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e);let n="All";function g(){const a=location.hash.match(/^#project\/([a-z0-9-]+)$/);if(a)return l.find(e=>e.slug===a[1])}function b(){const a=g()?"work":location.hash.replace("#","")||"work";document.querySelectorAll(".nav a").forEach(e=>{e.getAttribute("href")===`#${a}`?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}function k(a,e){const i=a.year?` · ${a.year}`:"";return`
    <a class="card" href="#project/${a.slug}">
      <div class="card-media">
        <img src="${t(c(a.image))}" alt="${t(a.imageAlt)}" />
      </div>
      <div class="card-body">
        <div>
          <div class="card-kicker">${String(e+1).padStart(2,"0")} · ${t(a.category)}${i}</div>
          <h3>${t(a.name)}</h3>
          <p>${t(a.summary)}</p>
        </div>
      </div>
    </a>
  `}function w(){const a=l.filter(e=>n==="All"||e.category===n);return`
    <div class="wrap">
      <section class="hero">
        <div>
          <p class="eyebrow">${t(r.role)}</p>
          <h1>Apps that make the work easier.</h1>
          <p class="lede">
            I build Android and iOS products, from field sensors and crypto trading to property sales, membership shops, and community fundraising. Based in ${t(r.location)}.
          </p>
          <div class="hero-actions">
            <a class="button" href="#work">Selected work</a>
            <a class="button ghost" href="mailto:${t(r.email)}">Email me</a>
          </div>
        </div>
        <figure class="portrait">
          <img src="${t(c(r.portrait))}" alt="Portrait of ${t(r.name)}" />
          <figcaption>${t(r.location)} · mobile apps since 2016</figcaption>
        </figure>
      </section>

      <section id="work">
        <div class="section-head">
          <h2>Selected work</h2>
          <div class="filters" role="group" aria-label="Filter projects">
            ${v.map(e=>`
                  <button type="button" data-filter="${e}" aria-pressed="${e===n}">
                    ${e}
                  </button>
                `).join("")}
          </div>
        </div>
        <div class="grid">
          ${a.map(e=>k(e,l.indexOf(e))).join("")}
        </div>
      </section>

      <section class="about" id="about">
        <div class="section-head"><h2>About</h2></div>
        <div class="split">
          <div class="prose">
            <p>
              I have a passion for mobile programming and for learning the tools that come next. The part I enjoy is an application that makes someone’s task easier. If it can be built, it is worth trying.
            </p>
            <p>Indonesian and English.</p>
            <h3>Education</h3>
            <ul class="timeline">
              ${f.map(e=>`
                    <li>
                      <span class="when">${t(e.period)}</span>
                      <strong>${t(e.title)}</strong>
                      <span class="place">${t(e.place)}</span>
                    </li>
                  `).join("")}
            </ul>
            <ul class="chips" aria-label="Skills">
              ${y.map(e=>`<li>${t(e)}</li>`).join("")}
            </ul>
          </div>
          <div>
            <h3>Experience</h3>
            <ul class="timeline">
              ${u.map(e=>`
                    <li>
                      <span class="when">${t(e.period)}</span>
                      <strong>${t(e.title)}</strong>
                      <span class="place">${t(e.place)}</span>
                      <p>${t(e.detail)}</p>
                    </li>
                  `).join("")}
            </ul>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="section-head"><h2>Contact</h2></div>
        <div class="split">
          <p class="lede">If you have a mobile product to talk through, send a note.</p>
          <ul class="contact-list">
            <li><a href="mailto:${t(r.email)}">${t(r.email)}</a></li>
            <li><a href="${t(r.phoneHref)}">${t(r.phone)}</a></li>
            <li><a href="${t(r.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </section>
    </div>
  `}function S(a){const e=l.indexOf(a)+1;return`
    <article class="case wrap">
      <a class="back" href="#work">← All work</a>
      <p class="eyebrow">${String(e).padStart(2,"0")} · ${t(a.category)}</p>
      <h1>${t(a.name)}</h1>
      <p class="lede">${t(a.summary)}</p>
      <dl class="meta">
        <div><dt>Platforms</dt><dd>${t(a.platforms.join(", "))}</dd></div>
        <div><dt>Tools</dt><dd>${t(a.tools.join(", "))}</dd></div>
        ${a.year?`<div><dt>Year</dt><dd>${t(a.year)}</dd></div>`:""}
      </dl>
      <figure class="case-figure">
        <img src="${t(c(a.image))}" alt="${t(a.imageAlt)}" />
      </figure>
      <div class="case-grid">
        <div>
          <p>${t(a.story)}</p>
          ${a.note?`<p class="note">${t(a.note)}</p>`:""}
          <div class="store-links">
            ${a.links.map(i=>`<a class="button" href="${t(i.href)}" target="_blank" rel="noopener noreferrer">${t(i.label)}</a>`).join("")}
          </div>
        </div>
        <div>
          <h2>In the app</h2>
          <ul>
            ${a.highlights.map(i=>`<li>${t(i)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </article>
  `}function d(a){var i;const e=g();document.title=e?`${e.name} — Ishak`:"Ishak — Mobile application developer",h().innerHTML=e?S(e):w(),b(),a&&(!e&&(location.hash==="#about"||location.hash==="#contact"||location.hash==="#work")?(i=document.querySelector(location.hash))==null||i.scrollIntoView():window.scrollTo(0,0))}h().addEventListener("click",a=>{const e=a.target;if(!(e instanceof HTMLButtonElement))return;const i=e.dataset.filter;i&&(n=i,d(!1))});window.addEventListener("hashchange",()=>d(!0));d(!1);
