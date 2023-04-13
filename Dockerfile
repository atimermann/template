# Imagem base
FROM node:hydrogen

# Dependencias debian
RUN apt-get update -y && apt-get upgrade -y && apt-get install -y htop

# Diretório de trabalho
WORKDIR /app

# Copiar o package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do aplicativo
RUN npm install --production

# Copiar todo o código do aplicativo para o diretório de trabalho
COPY . .

# Porta em que o aplicativo vai escutar
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [ "npm", "start" ]
