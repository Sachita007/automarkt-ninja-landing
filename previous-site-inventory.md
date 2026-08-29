# Automarkt Ninja previous-site content inventory

Audit date: 2026-08-29

## Scope and source conventions

This is an inventory of first-party content reachable from `https://www.automarktninja.com/` through rendered links, funnel configuration, and interactions. The crawl followed the homepage footer, the lead-form redirect, and meaningful links found on each resulting same-origin page. Fragments and tracking-query variants were normalized away. Text in quotation marks is source copy; spelling, capitalization, punctuation, and factual claims are preserved rather than silently corrected. Recommendations appear only in the final migration-priority section.

Discovery also checked `robots.txt` and `sitemap.xml`: `robots.txt` is empty and the XML sitemap contains an empty `<urlset>`, so neither supplied additional routes. Search-engine discovery returned no indexed results. The four canonical content routes below returned HTTP 200.

## Deduplicated page map

| Order discovered | Canonical URL | How reached | Page role |
| --- | --- | --- | --- |
| 1 | <https://www.automarktninja.com/> | Crawl seed | Main offer/lead-generation landing page |
| 2 | <https://www.automarktninja.com/privacy-policy> | Homepage footer | Privacy policy |
| 3 | <https://www.automarktninja.com/termsofservice> | Homepage footer | Terms and conditions |
| 4 | <https://www.automarktninja.com/freestratgeysession> | Post-submit redirect configured in the homepage popup form | Step-two strategy-session booking page |

### Duplicate, placeholder, and inaccessible routes

- <https://www.automarktninja.com/getclients> is exposed in the embedded funnel configuration and serves content identical to the root homepage. It is an alternate route, not a fifth content page.
- A trailing slash on each non-root route serves byte-for-byte identical content without redirecting. Treat `/getclients/`, `/privacy-policy/`, `/termsofservice/`, and `/freestratgeysession/` as duplicate URL variants, not additional pages.
- The `Terms of Service` and `Support` footer links on the privacy, terms, and strategy-session pages use `href="#"`. They only target the current-page fragment and do not expose separate routes. The terms page does contain a real in-copy link back to the homepage.
- The spelling `/freestratgeysession` is the actual configured route; no corrected `/freestrategysession` route is linked.
- The bare apex is not a usable duplicate of the audited `www` origin: `http://automarktninja.com/` returned HTTP 409 and `https://automarktninja.com/` failed its TLS handshake during the audit. The `www` URLs above are the usable first-party set.

## Page inventory

## 1. Main offer page — <https://www.automarktninja.com/>

Content-identical alias: <https://www.automarktninja.com/getclients>.

**Source facts**

- Browser/page title: `Reverse Squeeze Page`.
- Visible purpose: sell a done-for-you appointment-generation service to ceramic-coating, PPF, and window-tint installers and collect prospect details.
- Metadata is unfinished template copy rather than useful brand metadata:
  - title/Open Graph title: `Reverse Squeeze Page`
  - description/Open Graph description: `description for your awesome landing page`
  - author: `Your Name`
  - keywords: `clickfunnels, landing page, web site editor`
- No public navigation/header menu is present.

### Visual content order

1. **Audience attention band**
   - Heading: `ATTENTION :`
   - Audience line: `Ceramic Coating,PPF & Window Tint Installers....`

2. **Logo and core offer**
   - The green-on-black Automrkt Ninja mark appears. Its image asset is `https://storage.googleapis.com/msgsndr/yRngMA1XJQ9ATtJ605nA/media/63e7810d3d39a1166fbc3356.png`; the visible wordmark reads `AUTOMRKT NINJA`.
   - Offer heading: `Get Detailing Jobs With Our` / `"DONE FOR YOU" System`.
   - Primary positioning claim: `We Don't Promise Leads, ONLY BOOKED APPOINTMENTS`.
   - Fulfilment explanation: `BOOKED BY OUR SALES TEAM` followed by `So that you can focus on your work and leave the rest to us`.

3. **Founder/offer video**
   - Embedded Vimeo video: `Co Founder - Solomon (Automarkt Ninja)`, video ID `924678784`, duration 0:55, uploaded 2024-03-18 by Automarkt NINJA: <https://vimeo.com/924678784>.
   - Playback controls are available; the page does not expose a transcript or captions in its copy.

4. **First conversion CTA**
   - Main CTA: `Yes, I am interested!!`
   - Supporting urgency/qualification line: `We are looking for 5 motivated car detailers.. Who want to scale the business FAST!!`
   - Animated green double-chevron images flank the CTA on desktop and are hidden on mobile:
     - right-pointing: `https://storage.googleapis.com/msgsndr/yRngMA1XJQ9ATtJ605nA/media/f1fb7545-7196-4d6e-9103-fb0b44246e4c.gif`
     - left-pointing: `https://storage.googleapis.com/msgsndr/yRngMA1XJQ9ATtJ605nA/media/d94598f5-bfaf-41b2-bd49-3672672646aa.gif`
   - Interaction: the CTA does not navigate immediately; it opens the lead-capture popup documented below.

5. **Client results/social proof**
   - Section heading appears after the first two testimonial rows in the source/render order: `Checkout What Our Clients Says!!`
   - **Cain, Owner Of Blacksheep Auto Detailing**
     - Embedded Vimeo: `Cain review - Consistent Results`, video ID `913796541`, duration 1:03, uploaded 2024-02-16: <https://vimeo.com/913796541>.
     - Claim: `We helped Cain to scale from $20K/month to $50k/month in just 3 months.`
     - Service detail: `Our team was focused more on getting PPF and Ceramic Coating Jobs and all the closing by done by our team.`
   - **Harman, Owner Of Premier Auto Spa**
     - Embedded Vimeo: `Harman Review - Premier Auto Spa`, video ID `924669347`, duration 1:17, uploaded 2024-03-18: <https://vimeo.com/924669347>.
     - Claim: `In one year we scale his detailing shop from $100k/ Year to $400k/Year`.
   - **Williano , Owner Of Williano's Detailing**
     - Embedded Vimeo: `Williano Detailing`, video ID `924659562`, duration 1:19, uploaded 2024-03-18: <https://vimeo.com/924659562>.
     - Context: `Will Tried couple of marketing agencies before, but everyone put bad taste by making false promises. But here we go!!`
     - Claim: `In 4 weeks we got him $10k worth ceramic coatings.`
   - **Harpreet, Owner Of Premier Auto Werkz Salon**
     - Embedded Vimeo title: `Premier Works Auto Salon`, video ID `913796751`, duration 0:16, uploaded 2024-02-16: <https://vimeo.com/913796751>.
     - Claim: `In just 3 weeks we helped harpreet to get $15K worth of Ceramic Coating through our Ninja Appointment System.`
   - The page presents the text and videos as testimonials/results but does not show star ratings, dates of service, verification badges, source-platform links, or written client quotations independent of Automarkt Ninja's own Vimeo accounts.

6. **Second conversion CTA**
   - Main CTA: `Let Us Help You As Well`.
   - Scarcity line: `Every Month We Can Only Onboard 5 New Shops!!`
   - This CTA opens the same lead-capture popup as the first CTA.

7. **Reasons to work with Automarkt Ninja**
   - Heading: `Top 3 Reasons To Work With Us 👉`
   - Empathy line: `we are sorry if you already had bad experience in the past!!`
   - Reason 1: `No more chasing the leads by yourself:` followed by `We have a highly skilled SALES team for you, so that you can focus more on your detailing jobs.`
   - Reason 2: `We are always available for you:` followed by `You will have direct access to Co-Founders Numbers and you can call us whenever needed.`
   - Reason 3: `Innovation is in our blood:` followed by `We don't run boring ads, we believe attention is the king.`

8. **Footer**
   - Logo repeats.
   - Real links:
     - `Privacy Policy` → <https://www.automarktninja.com/privacy-policy>
     - visually broken `Terms Of Servic` plus an unlinked trailing `e` → <https://www.automarktninja.com/termsofservice>
   - Copyright: `Copyright 2024- Automarkt Ninja - All Rights Reserved`.

### Lead popup and form interaction

Both homepage CTAs open the same modal over a dark automotive-shop background image (`https://storage.googleapis.com/msgsndr/yRngMA1XJQ9ATtJ605nA/media/8f9418b8-4c5e-486d-8123-df385ae8ab56.jpg`). The modal identifies the flow as `Step 1 of 2...` and says `Enter The Details Below`.

Form source name: `YOUR OFFER Claim`. All four visible fields are required:

1. `Full Name` — text input, placeholder `Full Name`.
2. `Email` — email input, placeholder `Email`.
3. `Phone` — telephone input, placeholder `Phone`; the rendered country picker defaulted to India (+91) in the audit session while the source form configuration says country `US`.
4. `Business Name` — text input backed by the contact field `Shop Name`, placeholder `Enter Your Business Name`.

Submit CTA: `Let's GO!!`; subtext: `I am intersted to know more about this service`. The form is configured to create a `Lead` and then redirect to <https://www.automarktninja.com/freestratgeysession>. The audit inspected this configuration but did not submit fabricated contact data.

No price, setup fee, retainer, contract length, guarantee, refund policy, quantified appointment volume, territory restriction, or exact description of what the done-for-you system includes appears on this page.

### Reusable content candidates from this page

These are source assets/copy candidates, not recommendations:

- Clear niche definition: ceramic-coating, PPF, and window-tint installers.
- Strong offer distinction: booked appointments rather than unqualified leads, with sales-team follow-up/closing.
- Four named client stories, four videos, and the exact result/timeframe claims above.
- The three differentiators: sales-team support, co-founder access, and attention-oriented ad creative.
- Two-step conversion concept: short qualification form, then a free strategy-session booking step.
- Existing logo, founder video, testimonial videos, CTA chevrons, and modal workshop background.

## 2. Free strategy-session page — <https://www.automarktninja.com/freestratgeysession>

**Source facts**

- Browser/page title and metadata repeat the same unfinished `Reverse Squeeze Page`, `Your Name`, and placeholder description/keywords used on the homepage.
- Internal page name: `book the call`.
- Purpose: step two of the homepage conversion flow, asking the prospect to book a free strategy session after submitting lead details.

### Visual content order

1. Heading: `Step - 2`.
2. Offer copy: `Book A Free Strategy Session, where we will show how we are helping other car detailers to make 7 figures!!`
3. Automrkt Ninja logo.
4. Instruction: `Choose Date and Time Below`.
5. Embedded calendar/qualification widget documented below.
6. Green left/right animated chevrons appear around the booking area on desktop and are hidden on mobile.
7. Logo repeats in the footer.
8. Copyright: `Copyright 2023 - Automarkt Ninja - All Rights Reserved`.
9. Footer placeholders: `Terms of Service` and `Support` both point to `#` and remain on this page.

### Calendar and qualification interaction

- Source label: `Ninja Appointment System:`.
- Calendar ID: `o9kDHMNSM46WSdjHf0G5`.
- The visitor first chooses a date, time, and timezone.
- The subsequent contact/qualification form requests:
  1. full name
  2. email
  3. phone
  4. shop name
  5. address
  6. Instagram
  7. business setup, with choices `shop`, `mobile`, or `just starting`
  8. current revenue, with choices `under $5k`, `$5–10k`, `$10–20k`, or `$20k+`
  9. advertising experience, with choices `yes`, `no`, or `tried`
  10. services, with choices `ceramic`, `PPF`, `paint correction`, `detailing`, `tint/wrap`, or `other`
  11. three-month goal
  12. readiness to invest `$3k+`
- Final CTA: `Schedule Call`.
- The page configuration supplies no separate `visitWebsite` URL. The provider surface is the site's embedded LeadConnector/GoHighLevel calendar rather than an outbound booking-page link; therefore no external booking-provider page was crawled.

### Live-rendering observation

The booking route returned HTTP 200, but two live browser observations differed. One remained on an unlabeled loading spinner; the other rendered the calendar, timezone picker, and an available `11:30 PM` slot, then advanced successfully to the contact/qualification form after `Select`. No fabricated prospect data was submitted, so appointment duration, staff assignment, final submission handling, and post-booking confirmation were not tested. Treat the widget as intermittently reliable until the complete flow is verified with authorized test data.

### Media and reusable content candidates

- Reuses the logo and both green chevron animations from the homepage; it has no video or testimonial of its own.
- Source candidate: a distinct step-two message, date/time/timezone selection, and the detailed shop-qualification questions.
- Source claim needing substantiation before reuse: `helping other car detailers to make 7 figures`.

## 3. Privacy policy — <https://www.automarktninja.com/privacy-policy>

**Source facts**

- Browser/page title and metadata are the same unfinished `Reverse Squeeze Page` template metadata.
- A top line incorrectly reads `Terms Of Service`, followed by the logo, even though the page's actual heading is `Privacy Policy`.
- Purpose: describe personal-information collection, use, disclosure, advertising/tracking, and contact rights for site users.
- No effective date, legal-entity address, named privacy contact, jurisdiction, or direct contact method appears in the policy.

### Policy content in visual order

1. **Introduction and acceptance**
   - Says the company is committed to protecting and respecting privacy and that the policy covers users of its services and website.
   - Says using the site constitutes agreement; merely reviewing the policy does not constitute agreement unless the visitor makes further use of the site.
   - Says the policy may be updated from time to time.
   - Announces five topics: information collected, collection methods, uses, sharing, and contact.

2. **`INFORMATION WE COLLECT`**
   - Name, phone number, email address, and social-network profile information.
   - Technical/usage information: domain name, IP address, mobile-device model, ISP, access times, referring sites, and pages visited.
   - Information communicated through the site, social pages, or other means.

3. **`HOW WE COLLECT INFORMATION`**
   - Site forms, service subscriptions, surveys, posted material, and downloaded content.
   - Phone, email, text message, and social-messaging contact.
   - Public social-profile information and feedback.
   - Cookies, tracking pixels, and similar visitor technologies, with brief cookie/pixel definitions.

4. **`HOW WE USE THE INFORMATION COLLECTED`**
   - Operate, maintain, and improve the site; conduct analytics; process purchases; answer customer-service inquiries and social comments; communicate offers/services/promotions; develop and support services; enable interactive features; notify service changes; and conduct market research for targeted ads.
   - Contains a broken text/link join: `interest to [you.Help](http://you.Help) us develop...`.
   - Says cookies/pixels may support personalized online and offline advertising via email, display, video, and direct mail.
   - Refers to an opt-out link with `clicking here` but provides no working destination, and refers to `our Cookie Policy` without linking or exposing a Cookie Policy route.
   - Describes combining an IP address with de-identified data and aggregate data for advertising/market research.
   - Outbound opt-out references:
     - the AboutAds URL is malformed in the page source (`http://www.aboutads.info/` followed by a stray replacement character and `or`)
     - Network Advertising Initiative: <http://networkadvertising.org/>

5. **`HOW WE DISCLOSE THE INFORMATION COLLECTED`**
   - Sharing within the company group.
   - Sharing with service providers such as card processors, hosts, and email vendors.
   - Legal-process, compliance, fraud/crime prevention, agreement/policy enforcement, and protection-of-rights disclosures.
   - Sharing technical browsing/device data with service providers and advertising companies for targeting.

6. **`HOW TO CONTACT US`**
   - Only says to use `the contact information shown on our Site`; it does not provide contact details or a working support/contact link on this page.

7. **Footer**
   - Logo repeats.
   - `Copyright 2023 - Automarkt Ninja - All Rights Reserved`.
   - `Terms of Service` and `Support` both use `#` and do not navigate.

### Forms, media, and reusable content candidates

- No form or interactive control beyond links; no videos or testimonials.
- Media consists only of the repeated Automrkt Ninja logo.
- Source candidate: the broad inventory of data categories, collection methods, uses, and disclosures. It requires legal review and completion of the missing effective date, identity/contact details, opt-out links, and cookie-policy treatment before migration.

## 4. Terms and conditions — <https://www.automarktninja.com/termsofservice>

**Source facts**

- Browser/page title and metadata again use the unfinished `Reverse Squeeze Page` template values.
- Top line: `Terms Of Service`, followed by the logo.
- Main heading: `Terms and Conditions`.
- Last updated: `February 16, 2024`.
- Purpose: generic website terms covering access, third-party links, termination, liability, governing law, dispute handling, and SMS consent.

### Terms content in visual order

1. **Opening** — `Please read these terms and conditions carefully before using Our Service.`

2. **`Interpretation and Definitions`**
   - Interpretation says initially capitalized words retain their definitions in singular or plural.
   - Definitions include Affiliate; Country; Company; Device; Service; Terms and Conditions; Third-party Social Media Service; Website; and You.
   - Material identity/jurisdiction facts:
     - `Country` is `Texas, United States`.
     - `Company` is `Automarkt Ninja, Texas`.
     - `Service` is the Website.
     - `Website` is `automarktninja`, accessible from <https://www.automarktninja.com/>.
   - The terms disclose that the agreement was created with the external [Terms and Conditions Generator](https://www.termsfeed.com/terms-conditions-generator/).

3. **`Acknowledgment`**
   - Makes the terms the agreement governing use by visitors/users.
   - Conditions access/use on acceptance; disagreement means the visitor may not access the service.
   - Requires users to be over 18.
   - Also conditions use on acceptance of the privacy policy.

4. **`Links to Other Websites`**
   - Disclaims control and responsibility for third-party sites, content, privacy policies, and practices.
   - Advises visitors to review third-party terms and privacy policies.

5. **`Termination`**
   - Allows immediate termination or suspension without notice or liability for any reason, including breach; access ceases immediately.

6. **`Limitation of Liability`**
   - Caps the company's/suppliers' liability and the user's exclusive remedy at the amount paid through the service or USD 100 if nothing was purchased.
   - Disclaims special, incidental, indirect, and consequential damages to the maximum legal extent, with a state-law qualification.

7. **`"AS IS" and "AS AVAILABLE" Disclaimer`**
   - Disclaims warranties including merchantability, fitness, title, non-infringement, compatibility, uninterrupted/error-free operation, performance, accuracy/currency, and freedom from harmful code, subject to jurisdictional limits.

8. **`Governing Law`** — says the laws of the defined Country govern, excluding conflicts rules, while other laws may also apply.

9. **`Disputes Resolution`** — requires an informal resolution attempt by contacting the Company first.

10. **`For European Union (EU) Users`** — preserves mandatory consumer provisions of the user's country of residence.

11. **`United States Legal Compliance`** — user represents they are not in an embargoed/terrorism-supporting country and not on a prohibited/restricted-party list.

12. **`Severability and Waiver`**
    - Unenforceable provisions are adjusted toward their objective while remaining provisions continue.
    - Failure to enforce does not waive later enforcement; waiving one breach does not waive later breaches.

13. **`Translation Interpretation`** — if translated, the original English text prevails.

14. **`Changes to These Terms and Conditions`**
    - Reserves unilateral revision/replacement rights.
    - Promises reasonable efforts to provide at least 30 days' notice for a material revision, as determined by the Company.
    - Continued use constitutes acceptance; otherwise the user should stop using the service.

15. **`Contact Us`**
    - Contact email: `automrktninja@gmail.com` (shown as plain text, not a `mailto:` link).

16. **SMS/text provisions appended after Contact Us**
    - Says form opt-in expressly consents to automated SMS/text messages for appointment reminders, service updates, and promotions.
    - The named sender is not Automarkt Ninja: the text twice identifies `JLE Customs`.
    - `OPT-OUT (STOP)`: reply `STOP`; promises one confirmation and no further messages unless the user resubscribes.
    - `MESSAGE & DATA RATES`: rates may apply; consult the carrier plan.
    - `CARRIER LIABILITY DISCLAIMER`: says JLE Customs, carriers including T-Mobile, and delivery providers are not liable for delayed/undelivered messages.

17. **Footer**
    - Logo repeats.
    - `Copyright 2023 - Automarkt Ninja - All Rights Reserved`.
    - `Terms of Service` and `Support` both use `#` and do not navigate.

### Forms, media, and reusable content candidates

- No form or interactive feature beyond the homepage and external generator links; no videos or testimonials.
- Media consists only of the repeated logo.
- Source candidates: company/country identification, last-updated date, contact email, website-use provisions, and SMS opt-out/rate concepts. The generic generator language and incorrect `JLE Customs` identity require legal review rather than direct reuse.

## Cross-page content and implementation observations

These are source observations, not migration recommendations:

- All pages use the same generic funnel metadata. None has a descriptive SEO title/description, canonical link, useful author, or page-specific social metadata in the rendered source.
- Copyright years disagree: the homepage says 2024; the three other pages say 2023.
- The brand name varies among `Automarkt Ninja`, `Automrktninja`, `Automarkt NINJA`, `Automrkt Ninja`, and the visible logo text `AUTOMRKT NINJA`.
- The conversion flow is coherent at a high level—offer → required lead form → calendar and qualification form—but live booking-widget rendering was inconsistent across two observations.
- No pricing, package comparison, deliverable list, process/timeline, public eligibility rules beyond the target niche, FAQ, case-study methodology, guarantee, staff biographies, address, phone number, social-profile link, or working support/contact page was discovered. The booking form does privately ask about setup, revenue, advertising history, services, goals, and readiness to invest.

## Delta against the current local landing page

No current landing-page content was changed during this audit.

**Already migrated:** the booked-appointments positioning, founder video, four named testimonial videos and result claims, five-shops scarcity line, three reasons to work together, logo/green visual system, CTA chevron asset, automotive-shop texture, FAQ treatment, and footer links to the old legal pages. The local page also has a descriptive title and meta description that are better than the old template metadata.

**Still absent or unresolved:**

1. The explicit visual audience qualifier for ceramic-coating, PPF, and window-tint installers.
2. The homepage's short first-step lead form: full name, email, phone, and business name.
3. The embedded date/time/timezone scheduler and the detailed qualification form covering business setup, revenue, advertising history, services, three-month goal, and `$3k+` investment readiness.
4. A single conversion destination. The current local page mixes the old `/freestratgeysession` route with a separate Calendly URL.
5. Legally reviewed local Privacy and Terms pages. The current footer still links to the defective old legal pages.
6. Working support/contact information, normalized brand/legal identity, canonical/social metadata, and testimonial captions/transcripts.

The five Vimeo videos and their result summaries do not need to be imported again; they are already present in the current landing page. Any next implementation should focus on qualification/scheduling, legal/support cleanup, and the missing niche qualifier rather than duplicating migrated sections.

## Prioritized, deduplicated migration list

The following are **recommendations**, not claims about the source.

### Must add

1. **Preserve the core niche and offer distinction, but edit it professionally.** State that the service is for ceramic-coating, PPF, and window-tint shops and aims to produce booked appointments rather than raw leads. Do not introduce delivery details or guarantees absent from the source.
2. **Implement a working primary conversion path.** Use one consistent CTA, a concise qualification form, clear privacy/SMS consent language, and a tested booking step. Retain the source questions only if each is necessary, and explain why sensitive business/revenue/investment details are collected.
3. **Use the four named client stories only after substantiation and approval.** If verified, include client/shop identity, service type, result, timeframe, and the corresponding video: Cain ($20K/month to $50K/month in three months), Harman ($100K/year to $400K/year in one year), Williano ($10K of ceramic-coating work in four weeks), and Harpreet ($15K of ceramic-coating work in three weeks). Clearly define what revenue/result each number represents.
4. **Add working, legally reviewed Privacy Policy and Terms links.** Correct the company identity, jurisdiction, effective dates, contact method, cookie/advertising opt-outs, SMS sender identity, and every placeholder or broken link.
5. **Replace template metadata with page-specific brand metadata.** Supply accurate title, description, social preview, favicon/brand name, and canonical URL for the new page.
6. **Add a real contact/support route or direct contact mechanism.** Legal copy must not point to nonexistent `Support` or unspecified contact information.

### Should add

1. **Explain what the done-for-you system actually includes.** Clarify targeting/creative, campaign management, lead response, qualification, appointment setting, sales/closing responsibility, reporting, onboarding, and the client's responsibilities—only after confirming the real service scope.
2. **Convert the three reasons into credible differentiators.** Explain the sales team, actual availability/escalation path, and creative-testing approach instead of relying on all-caps slogans.
3. **Show an explicit process.** A short sequence such as qualification → strategy session → onboarding → campaign launch → sales follow-up → booked appointment would resolve the old site's missing operational detail, subject to confirmation.
4. **Make testimonial media accessible.** Provide captions/transcripts, descriptive titles, poster images, controls, and written summaries; obtain client permissions and avoid autoplay.
5. **Clarify fit and capacity.** If `5 new shops per month` is real, explain availability and qualification honestly rather than using unsupported perpetual scarcity.
6. **Add concise FAQ answers** for pricing model, contract length, geography/exclusivity, expected launch time, lead ownership, CRM/calendar integration, appointment qualification, reporting, cancellation, and what happens when an appointment no-shows.
7. **Normalize the brand system.** Choose one spelling/capitalization for the company name and align logo alt text, headings, legal identity, email, and copyright year.

### Optional

1. Reuse the founder video if current, accurate, captioned, and visually suitable; otherwise replace it with a tighter explanation of the offer.
2. Reuse the green visual identity and logo after confirming the approved master asset and brand spelling.
3. Reuse a restrained version of the automotive-shop background as supporting texture, provided contrast and performance remain strong.
4. Keep a two-step form/booking experience if it measurably improves completion and the handoff is reliable; otherwise embed scheduling directly after qualification.
5. Retain a brief empathy statement for shops burned by prior agencies, rewritten without attacking competitors or implying guarantees.

### Do not copy

1. Do not copy the unfinished `Reverse Squeeze Page`, `Your Name`, placeholder description, or `clickfunnels` metadata.
2. Do not copy grammatical errors, broken words/links, all-caps overload, repeated exclamation marks, or inconsistent brand/client spellings.
3. Do not copy nonfunctional `#` links, the broken AboutAds/`you.Help` links, the nonexistent Cookie Policy reference, or an unverified calendar state.
4. Do not copy the legal pages verbatim. They are generic generator text with missing privacy contacts/effective date and an unrelated `JLE Customs` SMS identity.
5. Do not present revenue figures, `7 figures`, booked-appointment language, closing claims, `5 shops` scarcity, direct co-founder access, or any implied outcome as fact until evidence, current operations, client consent, and legal review support them.
6. Do not copy decorative animated chevrons merely to manufacture urgency; use them only if they improve comprehension and meet motion/accessibility requirements.
7. Do not keep conflicting copyright years or an obsolete personal Gmail address without confirming ownership and intended public use.
