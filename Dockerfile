# Usa la imagen oficial de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Expón el puerto en el que se ejecuta la aplicación Vue
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["npm", "run", "serve"]
