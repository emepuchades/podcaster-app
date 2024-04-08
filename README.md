<div align="center">

![image](https://github.com/emepuchades/prueba-podcasts-musicales/assets/100128850/33b8adaf-6cd9-416b-aa1b-04496ed73e03)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
[![GitLab tags](https://badgen.net/gitlab/tags/NickBusey/HomelabOS/)](https://github.com/emepuchades/prueba-podcasts-musicales/tags)

</div>

## Tabla de contenido
- [Información básica](#info-básica)
- [Setup](#setup)
- [Inicialización del proyecto](#especificación-técnica)
- [Configuración de entorno](#configuracion-entorno)
- [Especificación](#especificación)
  - [1 - Vista principal](#1---vista-principal)
  - [2 - Detalles de un podcast](#2---detalles-podcast)
  - [3 - Detalles de un capítulo de un podcast](#3---detalles-capitulo-podcast)


## Información básica
Creación de una mini-aplicación para escuchar podcasts musicales.

## Setup

Clonar repositorio
```
git clone https://github.com/emepuchades/prueba-podcasts-musicales.git
```

Instalar dependencias
```
npm install
```

Iniciar en modo development (assets sin minimizar)
```
npm run dev
```

Iniciar en modo production (assets minimizados)
```
npm run prod
```

## Inicialización del proyecto
[feat: create react app with webpack](https://github.com/emepuchades/prueba-podcasts-musicales/commit/8d2b46c4f8898eb6f83e70239356dc1d27631bb8)
  - Creé la app de React desde cero usando el comando: `npm init -y`.
  - Creé el archivo de configuración de Webpack por defecto y añadí el script de inicio.

## Configuración de entorno
[feat: differentiated configuration for development and production environments in webpack and package](https://github.com/emepuchades/prueba-podcasts-musicales/commit/8e9eea31f18bc80fa1a02863750831df25b680c7)
  - Configuré el archivo de Webpack para diferenciar entre desarrollo y producción.
  - Añadí los scripts en el package.json para desarrollo y producción.

## Vista principal
[feat: add function to get the list of podcasts](https://github.com/emepuchades/prueba-podcasts-musicales/commit/b429c4f27c5aa6d27356829d6e4ffdb6e06b9e70)
  - Creé la estructura de la card en un componente.
  - Implementé la llamada a la API de get podcast en getPodcast.js.
    
[feat: add styles to the podcast card](https://github.com/emepuchades/prueba-podcasts-musicales/commit/08b5a36725b46562a901a6088925a78141c6f390)
  - Añadí estilos a la card.

[feat: add store and slice to manage podcast list](https://github.com/emepuchades/prueba-podcasts-musicales/commit/d36580e01559d86a2b085e0728028809c9d120f2)
  - Configuré el podcast para que se guarde y no realice la petición nuevamente hasta dentro de 24 horas. Implementado con slice de redux.

[feat: add filtering in podcast list](https://github.com/emepuchades/prueba-podcasts-musicales/commit/cee46b5ab131d244d64649d0cf99f0de6216498a)
  - Creado el filtro para el listado de podcast.

## Detalles podcast
[feat: add routes and podcast details page](https://github.com/emepuchades/prueba-podcasts-musicales/commit/654367331fda10709f6af18347dc851c6be4d465)
  - Implementé el Router para la navegación a los detalles del podcast y cree un componente para el header.
    
[feat: create podcast details with styling and functions for date and time calculation](https://github.com/emepuchades/prueba-podcasts-musicales/commit/8ff488e8ae83a770b77dc7532da700b984d6f15c)
  - Creado el podcast details con todos los estilos y mostrando la información. Con un componente para la card donde estan la información del podcast y otro componente para la tabla de listado de episodios.
  - Implementadas funciones para cambiar el formato de la fecha y calcular el tiempo.

## Detalles capitulo podcast
[feat: add link episode to player and functionality](https://github.com/emepuchades/prueba-podcasts-musicales/commit/3f16da241bd7fe22b124b572d4ec3351555c53f4)
  - Añadido un enlace en el episodio para acceder al reproductor.
  - Implementados estilos y funciones del reproductor. Y utilice el componente de card hecho anteriormente para la vista de detalles podcast.
