FROM nginx:1.28-alpine

LABEL org.opencontainers.image.source="https://github.com/Sachita007/automarkt-ninja-landing"
LABEL org.opencontainers.image.description="Automarkt Ninja static landing page"

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index-v2.html /usr/share/nginx/html/index.html
COPY index-v2.html /usr/share/nginx/html/index-v2.html
COPY index-dark.html /usr/share/nginx/html/index-dark.html
COPY booking.html /usr/share/nginx/html/booking.html
COPY privacy-policy.html /usr/share/nginx/html/privacy-policy.html
COPY terms-of-service.html /usr/share/nginx/html/terms-of-service.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY stage.css /usr/share/nginx/html/stage.css
COPY landing-v2.css /usr/share/nginx/html/landing-v2.css
COPY landing-dark.css /usr/share/nginx/html/landing-dark.css
COPY pages.css /usr/share/nginx/html/pages.css
COPY script.js /usr/share/nginx/html/script.js
COPY assets/ /usr/share/nginx/html/assets/

RUN nginx -t

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/healthz || exit 1
