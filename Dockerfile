FROM node:16.1.0
WORKDIR /app
COPY package.json .
RUN if [ "$NODE_ENV" = "development" ];\
        then npm install; \
        else npm install --only=production; \
        fi
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]
