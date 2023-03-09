FROM denoland/deno:alpine as builder

WORKDIR /app
ADD . .

RUN deno task build


FROM nginx:alpine

EXPOSE 8080

ADD ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/_site /var/www/html
