FROM node:latest  
# Selecionando a imagem do Docker,
# para saber as imagens desponíveis dentro do docker, é so acessar hub.docker.com/search.

WORKDIR /usr/app
# no momento da criação do nosso container, nós conseguimos criar esse diretório de informações.
# quando rodarmos a criação do nosso container, precisamos passar o diretório onde irá ficar as nossas informações
# contidas. 

COPY package.json ./
# copiando todos os arquivos

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]