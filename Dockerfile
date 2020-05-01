FROM node:alpine
WORKDIR /app
# Copy package.json and package-lock.json
COPY package* ./
# Install dependencies
RUN npm install --production
# Copy source
COPY . .
# Run in production mode
ENV NODE_ENV=production
# Start command
CMD ["npm","start"]