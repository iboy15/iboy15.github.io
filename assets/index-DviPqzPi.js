(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))h(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&h(p)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function h(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const r={name:"Ishak",role:"Mobile application developer",location:"Indonesia",email:"iboy_ishak@yahoo.com",phone:"+62 878 8935 6310",phoneHref:"tel:+6287889356310",linkedin:"https://www.linkedin.com/in/iboy-ishak-4b81174b/",portrait:"media/portrait.jpg"},u=[{period:"From Aug 2016",title:"Mobile apps programmer",place:"Ciputra Group · Citra Raya, Cikupa, Tangerang",detail:"Android and iOS apps for property sales: product catalogues, customer records, and project reporting."},{period:"2018",title:"Freelance",place:"E-Magazine for Jamkrindo · Indonesia",detail:"A mobile magazine with monthly issues, video, quizzes, and company news."},{period:"2017",title:"Freelance",place:"PeGe Grosir · Indonesia",detail:"Wholesale shopping app with sign-in, cart, checkout, and account balance."},{period:"Jan–Aug 2016",title:"Mobile app programmer",place:"Cerberus Yumana Karya · Pondok Indah, Jakarta Selatan",detail:"Android, iOS, and web apps, including a 360° virtual tour viewer built with Unity."}],f=[{period:"2013–2015",title:"Diploma IV",place:"Institut Teknologi Bandung"},{period:"2009–2012",title:"Diploma III",place:"Politeknik Negeri Pontianak"},{period:"2018",title:"React & React Native",place:"Hacktiv8, Jakarta"}],y=["React Native","React","Redux","JavaScript","PHP","SQL","JSON APIs","Android","iOS","Unity"],l=[{slug:"incyt",name:"INCYT by LX",category:"IoT",summary:"Watch sensors, vehicles, and field conditions from the phone.",story:"INCYT is the mobile app for LX devices. It configures sensors, trackers, and controllers, then puts live readings on a map and in a dashboard. Operators can follow an asset, open an alarm, and see a spray or risk advisory without walking the site.",highlights:["Map of devices, paths, and GPS locations","Dashboards for temperature, risk, and spray advice","Alarms when a reading needs attention","Works with the wider INCYT web tools"],platforms:["Android","iOS"],tools:["React Native"],image:"media/incyt.jpg",imageAlt:"Latest INCYT App Store screens: a field map and a spray advisory dashboard",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=io.incyt.mobile"},{label:"App Store",href:"https://apps.apple.com/id/app/incyt/id1524190207"}]},{slug:"carlo-rino",name:"Carlo Rino",category:"Retail",summary:"The official shop for Carlo Rino bags, shoes, and accessories.",story:"Carlo Rino is the brand’s shop app. Explore opens on a campaign and a flash sale, with search just under the hero. A member can move through collections and popular items, save a wishlist, and check out with an offer or a packaging note.",highlights:["Explore home with campaigns and search","Collections, new arrivals, and popular items","Wishlist, cart, and checkout","Blog, news, and contact"],platforms:["Android","iOS"],tools:["React Native","Expo"],image:"media/carlo-rino.jpg",imageAlt:"Carlo Rino Explore home, with a Labour Day campaign and the New Collections carousel",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=net.carlorino.carlorino"},{label:"App Store",href:"https://apps.apple.com/us/app/carlo-rino/id6477374256"}]},{slug:"mj-rewards",name:"MJ Rewards",category:"Rewards",summary:"Points, cashback, and lucky draws for Mustafa Centre.",story:"MJ Rewards is the Mustafa Rewards app for Mustafa Centre and Mustafa Jewellery in Singapore. A member shows a digital card at checkout, earns points, redeems them, and can pick up a spin or lucky-draw entry.",highlights:["Points balance and cashback value","Redeem rewards in the app","Purchase history","Spin wheel and lucky draw"],platforms:["Android","iOS"],tools:["React Native"],image:"media/mj-rewards.jpg",imageAlt:"MJ Rewards lucky spin and the screen for redeeming points as a voucher",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.stallions2.mustafarewardsapp.android"},{label:"App Store",href:"https://apps.apple.com/sg/app/mustafa-rewards/id6755588828"}]},{slug:"warisai",name:"WarisAI",category:"Estate",summary:"Faraidh calculations, wills, and family documents in one place.",story:"WarisAI helps a Muslim family prepare inheritance with more order. It calculates faraidh scenarios, keeps a checklist of what is still missing, stores important documents, and includes a sealed note plus Hajj preparation material.",highlights:["Faraidh calculator and saved scenarios","Will notes and a document vault","Sealed envelope for a message to open later","Family checklist and Hajj preparation"],platforms:["Android","iOS"],tools:["React","TypeScript"],image:"media/warisai.jpg",imageAlt:"WarisAI home and estate-preparation screens from the App Store",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.faraidh.warisai"},{label:"App Store",href:"https://apps.apple.com/id/app/warisai/id6761743706"}]},{slug:"sigita",name:"SIGITA",category:"Community",summary:"Waste pickup for Pontianak, from order to depot.",story:"SIGITA JAS BERKERAH is the digital waste-transport service for Pontianak. Residents request a pickup, choose a depot on the map, and follow the order until it is finished. Drivers update the trip as they collect and deliver.",highlights:["Request a household waste pickup","Choose the destination depot on a map","Delivery history with status","Separate views for customers and drivers"],platforms:["Android","iOS"],tools:["React Native","Expo"],image:"media/sigita.jpg",imageAlt:"SIGITA screens for choosing a depot and reviewing delivery history",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.dlh.sigita"}]},{slug:"cxinsight",name:"CXInsight",category:"Survey",summary:"A landscape iPad survey for feedback at the counter.",story:"CXInsight runs on an iPad in landscape. A visitor starts from a branded welcome screen. Staff sign in, then the questionnaire collects stars, emoji, thumbs, and picture choices, and closes on a thank-you screen.",highlights:["Branded welcome with a one-tap start","Staff login before the questionnaire","Stars, emoji, thumbs, and image choices","Progress through the questions, then a thank-you"],platforms:["iOS","Android"],tools:["React Native","Expo"],image:"media/cxinsight.jpg",imageAlt:"CXInsight welcome screen and an emoji rating question on iPad",links:[]},{slug:"coinpass",name:"Coinpass",category:"Finance",summary:"Buy, sell, and withdraw crypto on a UK exchange.",story:"Coinpass is the mobile app for a UK crypto exchange registered with the Financial Conduct Authority. Someone can deposit from a bank, buy or sell an asset, and withdraw pounds from a short set of screens.",highlights:["Buy, sell, and trade from a simple home screen","Deposit from a bank and withdraw to GBP","Recent activity for deposits, withdrawals, and trades"],platforms:["Android","iOS"],tools:["React Native"],image:"media/coinpass.jpg",imageAlt:"Coinpass mobile screens showing a sterling balance and crypto artwork",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.coinpassmobile"},{label:"App Store",href:"https://apps.apple.com/gb/app/coinpass-mobile/id1530358553"}]},{slug:"yoyo-kitchen",name:"YOYO Kitchen",category:"Food",summary:"Member shop for 御壹工房, with points and member prices.",story:"YOYO Kitchen’s membership app is where members buy exclusive products, collect points, join activities, and talk with the shop in a group.",highlights:["Member-only products and offers","Points and discounts","Activities and group sharing"],platforms:["Android","iOS"],tools:["React Native"],image:"media/yoyo.jpg",imageAlt:"YOYO Kitchen membership home and online shop screens",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.yoyokitchen.marketplace"}]},{slug:"financial-fortress",name:"Financial Fortress",category:"Finance",summary:"Insurance and investment policies, gathered in one portfolio.",story:"Financial Fortress gives a client one view of an insurance and investment portfolio, and a way to ask for help with it. On Android it is published as Virtus Portfolio.",highlights:["See policies in one portfolio","Ask for help with a policy"],platforms:["Android","iOS"],tools:["React Native"],image:"media/fortress.jpg",imageAlt:"Financial Fortress portfolio screens on two phones",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.sg.virtusportfolio"},{label:"App Store",href:"https://apps.apple.com/id/app/financial-fortress/id1596041183"}]},{slug:"virtus",name:"Salesbuilder",category:"Finance",summary:"A log of sales activity for the Virtus advisory team.",story:"Salesbuilder by Fortress is where advisors record client activity, so the work around a case stays in the app instead of in separate notes.",highlights:["Track sales activity","Built for the Virtus / Fortress team"],platforms:["Android","iOS"],tools:["React Native"],image:"media/virtus.jpg",imageAlt:"Virtus sales app screens on two phones",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=sg.com.virtusassociates"},{label:"App Store",href:"https://apps.apple.com/id/app/salesbuilder-by-fortress/id1596038271"}]},{slug:"citralink",name:"Citralink",category:"Property",summary:"Product knowledge and purchase tools for Ciputra homes.",story:"Citralink holds Ciputra Group product information: e-brochures, price lists, payment simulations, site plans, galleries, 360° tours, and product knowledge. Buyers can also register a purchase order number.",highlights:["Brochures, prices, and payment simulations","Galleries and 360° tours","Product knowledge and purchase registration"],platforms:["Android","iOS"],tools:["React Native","PHP","JavaScript","SQL"],image:"media/citralink.jpg",imageAlt:"Citralink property screens on two phones",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.embarcadero.citralink"},{label:"App Store",href:"https://apps.apple.com/nz/app/citra-link/id1362469791"}]},{slug:"sales-monitoring",name:"Sales Monitoring",category:"Property",summary:"CRM for in-house property sales teams.",story:"The sales monitoring system stores and processes customer data for in-house sales, and it shows how the team is performing. Summaries can be filtered by period, project, and where a lead came from. Sales, supervisors, managers, and associate directors each see a different view.",highlights:["Customer records for in-house sales","Performance by period and project","Different access for each role"],platforms:["Android","iOS"],tools:["React Native","PHP","JavaScript","SQL"],image:"media/sales.jpg",imageAlt:"Sales monitoring screens on two phones",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.citralink.sms"},{label:"App Store",href:"https://apps.apple.com/nz/app/sms/id1434015949"}]},{slug:"mms",name:"Monitoring Management",category:"Property",summary:"Sales reports across Ciputra projects.",story:"The monitoring management system reports sales for each Ciputra project. The dashboard covers results from the start of the month back to the previous month, yearly and monthly targets, achievement, and the current month. Reports can also be cut by in-house sales, agents, and cluster.",highlights:["Targets and achievement by project","Reports for a chosen period","Breakdowns by sales channel and cluster"],platforms:["Android","iOS"],tools:["React Native","PHP","JavaScript","SQL"],image:"media/mms.jpg",imageAlt:"Monitoring management dashboard on a phone",links:[],note:"Distributed as a private app and on TestFlight, so there is no public store link."},{slug:"superhand",name:"Superhand",category:"Community",summary:"Donations, events, and news for mosques and foundations.",story:"Superhand, also used as MasjidPay, is a fundraising platform for mosques and other foundations. It covers donation projects, events, news, and video.",highlights:["Fundraising projects","Events, news, and video","Built for mosques and foundations"],platforms:["Android","iOS","Web"],tools:["React Native","PHP","JavaScript","SQL"],image:"media/superhand.jpg",imageAlt:"Superhand app screens on two phones",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.ptsuperhand.superhand"},{label:"App Store",href:"https://apps.apple.com/us/app/superhand/id1471357988"}]},{slug:"tigtac",name:"TigTac",category:"Experiment",summary:"A small game built around machine learning.",story:"TigTac is a game experiment that uses machine learning. It was shared as an Expo project.",highlights:["Game loop","Machine learning experiment","Shared with Expo"],platforms:["Android","iOS"],tools:["React Native","Expo"],image:"media/tigtac.jpg",imageAlt:"TigTac game screens on two phones",links:[{label:"Expo",href:"https://exp.host/@iboy15/tictagexpo"}]},{slug:"jamkrindo",name:"Jamkrindo Magazine",category:"Community",year:"2018",summary:"Monthly magazine, video, and quizzes for Jamkrindo.",story:"Freelance work in 2018. The app publishes Jamkrindo’s monthly magazine together with video, quizzes, and other company news.",highlights:["Monthly magazine issues","Video and quizzes","Company news"],platforms:["Android"],tools:["React Native","PHP","JavaScript","SQL"],image:"media/jamkrindo.jpg",imageAlt:"Jamkrindo e-magazine screens on a phone",links:[{label:"Google Play",href:"https://play.google.com/store/apps/details?id=com.trijayamedia.EMagazine"}]}],v=["All","IoT","Retail","Rewards","Estate","Community","Survey","Finance","Food","Property","Experiment"];function m(){const a=document.querySelector("#main");if(!a)throw new Error("Missing #main");return a}const d=a=>`./${a}`,t=a=>a.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e);let n="All";function g(){const a=location.hash.match(/^#project\/([a-z0-9-]+)$/);if(a)return l.find(e=>e.slug===a[1])}function b(){const a=g()?"work":location.hash.replace("#","")||"work";document.querySelectorAll(".nav a").forEach(e=>{e.getAttribute("href")===`#${a}`?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}function w(a,e){const i=a.year?` · ${a.year}`:"";return`
    <a class="card" href="#project/${a.slug}">
      <div class="card-media">
        <img src="${t(d(a.image))}" alt="${t(a.imageAlt)}" />
      </div>
      <div class="card-body">
        <div>
          <div class="card-kicker">${String(e+1).padStart(2,"0")} · ${t(a.category)}${i}</div>
          <h3>${t(a.name)}</h3>
          <p>${t(a.summary)}</p>
        </div>
      </div>
    </a>
  `}function k(){const a=l.filter(e=>n==="All"||e.category===n);return`
    <div class="wrap">
      <section class="hero">
        <div>
          <p class="eyebrow">${t(r.role)}</p>
          <h1>Apps that make the work easier.</h1>
          <p class="lede">
            I build Android and iOS products for field teams, shops, rewards, estate planning, and city services. Based in ${t(r.location)}.
          </p>
          <div class="hero-actions">
            <a class="button" href="#work">Selected work</a>
            <a class="button ghost" href="mailto:${t(r.email)}">Email me</a>
          </div>
        </div>
        <figure class="portrait">
          <img src="${t(d(r.portrait))}" alt="Portrait of ${t(r.name)}" />
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
          ${a.map(e=>w(e,l.indexOf(e))).join("")}
        </div>
      </section>

      <section class="about" id="about">
        <div class="section-head"><h2>About</h2></div>
        <div class="split">
          <div class="prose">
            <p>
              I like building mobile apps, and I like learning the next tool that makes one possible. The part I enjoy is an application that makes someone’s task easier. If it can be built, it is worth trying.
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
        <img src="${t(d(a.image))}" alt="${t(a.imageAlt)}" />
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
  `}function c(a){var i;const e=g();document.title=e?`${e.name} — Ishak`:"Ishak — Mobile application developer",m().innerHTML=e?S(e):k(),b(),a&&(!e&&(location.hash==="#about"||location.hash==="#contact"||location.hash==="#work")?(i=document.querySelector(location.hash))==null||i.scrollIntoView():window.scrollTo(0,0))}m().addEventListener("click",a=>{const e=a.target;if(!(e instanceof HTMLButtonElement))return;const i=e.dataset.filter;i&&(n=i,c(!1))});window.addEventListener("hashchange",()=>c(!0));c(!1);
