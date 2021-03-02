FROM nginx:alpine

COPY dist /usr/share/nginx/html/

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
RUN sed -i "s|API_URL|'"$API_URL"' |g" /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]