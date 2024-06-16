<template>
  <!-- Página principal -->
  <ion-page>
    <!-- Encabezado de la página -->
    <ion-header :translucent="true">
      <!-- Barra de herramientas del encabezado -->
      <ion-toolbar>
        <!-- Título del encabezado -->
        <ion-title>Acerca de</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenido principal de la página -->
    <ion-content :fullscreen="true" class="ion-padding">
      <!-- Encabezado colapsable -->
      <ion-header collapse="condense">
        <ion-toolbar>
          <!-- Título grande del encabezado colapsado -->
          <ion-title size="large">Acerca de</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Contenido del 'Acerca de' -->
      <div class="about-content">
        <!-- Logo de la aplicación -->
        <img src="@/assets/logo_perenxisa.png" alt="IES Serra Perenxisa Logo" class="logo">
        <!-- Título principal -->
        <h1>Acerca de</h1>
        <!-- Texto introductorio -->
        <p class="intro-text">
          Esta aplicación ha sido creada por Sergi García para el taller de introducción a Ionic.
        </p>
        <!-- Detalles del proyecto -->
        <p class="details-text">
          <strong>Sobre este proyecto:</strong>
          <!-- Lista de detalles -->
          <ul>
            <li>Desarrollado utilizando Ionic y Vue.</li>
            <li>Proporciona una interfaz intuitiva para la gestión de canciones.</li>
            <li>Permite a los usuarios agregar, editar y eliminar canciones.</li>
            <li>Es un proyecto educativo diseñado para enseñar los conceptos básicos de desarrollo móvil con Ionic.</li>
          </ul>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>

<style scoped>
/* Estilos CSS con ámbito limitado al componente */

/* Estilos para el encabezado */
ion-header {
  --background: #3880ff; /* Color de fondo del encabezado */
  --color: #ffffff; /* Color del texto del encabezado */
}

/* Estilos para el título */
ion-title {
  font-weight: bold; /* Establece la negrita para el título */
}

/* Estilos para el contenido principal */
.about-content {
  display: flex; /* Usa el modelo de caja flexible para alinear elementos */
  flex-direction: column; /* Dirección de columnas para los elementos hijos */
  align-items: center; /* Centra los elementos horizontalmente */
  justify-content: center; /* Centra los elementos verticalmente */
  height: 100%; /* Altura completa del contenido */
  text-align: center; /* Alineación del texto al centro */
  padding: 16px; /* Espaciado interno */
}

/* Estilos para el logo */
.logo {
  width: 150px; /* Ancho fijo */
  height: auto; /* Altura automática para mantener la proporción */
  margin-bottom: 20px; /* Margen inferior */
}

/* Estilos para el título principal */
h1 {
  font-size: 28px; /* Tamaño de fuente */
  font-weight: bold; /* Negrita */
  color: #333; /* Color de texto */
  margin-bottom: 16px; /* Margen inferior */
}

/* Estilos para el texto introductorio */
.intro-text {
  font-size: 18px; /* Tamaño de fuente */
  color: #555; /* Color de texto */
  margin-bottom: 20px; /* Margen inferior */
  max-width: 600px; /* Ancho máximo */
}

/* Estilos para el texto de detalles */
.details-text {
  font-size: 16px; /* Tamaño de fuente */
  color: #555; /* Color de texto */
  text-align: left; /* Alineación izquierda */
  max-width: 600px; /* Ancho máximo */
}

/* Estilos para la lista de detalles */
.details-text ul {
  padding-left: 20px; /* Sangría izquierda */
}

/* Estilos para los elementos de lista */
.details-text li {
  margin-bottom: 10px; /* Margen inferior */
}
</style>
