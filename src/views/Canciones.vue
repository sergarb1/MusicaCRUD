<template>
  <ion-page>
    <!-- Encabezado de la página -->
    <ion-header :translucent="true">
      <ion-toolbar color="success"> <!-- Cambiado a color verde -->
        <ion-title>Gestor de Canciones</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenido principal de la página -->
    <ion-content :fullscreen="true" class="ion-padding">
      <!-- Formulario de añadir/editar canción -->
      <ion-card class="form-card">
        <ion-card-header>
          <!-- Título del formulario dinámico según si se está editando o añadiendo una canción -->
          <ion-card-title>{{ editingSong !== null ? 'Editar Canción' : 'Añadir Nueva Canción' }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <!-- Campos de entrada para título y artista -->
          <ion-item>
            <ion-input v-model="newSong.titulo" label-placement="floating">
              <div slot="label">Título de la canción</div>
            </ion-input>
          </ion-item>
          <ion-item>
            <ion-input v-model="newSong.artista" label-placement="floating">
              <div slot="label">Artista</div>
            </ion-input>
          </ion-item>
          <!-- Botón para añadir o actualizar canción -->
          <ion-button expand="block" @click="addOrUpdateSong" color="success"> <!-- Cambiado a color verde -->
            {{ editingSong !== null ? 'Actualizar' : 'Añadir' }} Canción
          </ion-button>
        </ion-card-content>
      </ion-card>

      <!-- Lista de canciones -->
      <ion-card class="list-card">
        <ion-card-header>
          <ion-card-title>Lista de Canciones</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <!-- Lista de ion-items para mostrar las canciones -->
          <ion-list>
            <ion-item v-for="song in songs" :key="song.id" class="song-item">
              <!-- Etiquetas para mostrar título y artista de la canción -->
              <ion-label>
                <h2>{{ song.titulo }}</h2>
                <p>{{ song.artista }}</p>
              </ion-label>
              <!-- Botones de acción para editar y eliminar -->
              <ion-buttons slot="end">
                <ion-button size="small" @click="editSong(song)" color="secondary">Editar</ion-button>
                <ion-button size="small" @click="deleteSong(song.id)" color="danger">Eliminar</ion-button>
              </ion-buttons>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/vue';

// Define la interfaz para una canción
interface Song {
  id: number;
  titulo: string;
  artista: string;
}

export default {
  name: 'Canciones',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput
  },
  data() {
    return {
      // Datos reactivos: nueva canción, lista de canciones y canción en edición
      newSong: {
        titulo: '',
        artista: ''
      },
      songs: [] as Song[],  // Arreglo de canciones inicializado como vacío
      editingSong: null as number | null  // Variable para almacenar el ID de la canción en edición
    };
  },
  methods: {
    // Método para obtener canciones desde almacenamiento
    async getSongs() {
      const storedSongs = await this.$storage.get('songs');
      this.songs = storedSongs || [];  // Asigna las canciones almacenadas o un arreglo vacío si no hay datos
    },
    // Método para añadir o actualizar una canción
    async addOrUpdateSong() {
      if (this.editingSong !== null) {
        // Si está editando, encuentra la canción por ID y actualiza sus datos
        const index = this.songs.findIndex(song => song.id === this.editingSong);
        this.songs[index] = { id: this.editingSong, ...this.newSong };
      } else {
        // Si no está editando, genera un nuevo ID y agrega una nueva canción
        const newId = this.songs.length ? this.songs[this.songs.length - 1].id + 1 : 1;
        this.songs.push({ id: newId, ...this.newSong });
      }

      // Almacena los datos de canciones como objetos planos en almacenamiento
      await this.$storage.set('songs', JSON.parse(JSON.stringify(this.songs)));

      // Limpia los campos del formulario y resetea la canción en edición
      this.newSong.titulo = '';
      this.newSong.artista = '';
      this.editingSong = null;
    },
    // Método para editar una canción seleccionada
    editSong(song: Song) {
      this.newSong = { ...song };  // Asigna la canción a los campos del formulario para edición
      this.editingSong = song.id;  // Establece el ID de la canción en edición
    },
    // Método para eliminar una canción por ID
    async deleteSong(id: number) {
      this.songs = this.songs.filter(song => song.id !== id);  // Filtra las canciones excluyendo la que se va a eliminar
      await this.$storage.set('songs', JSON.parse(JSON.stringify(this.songs)));  // Actualiza el almacenamiento
    }
  },
  // Método de ciclo de vida para cargar las canciones al montar el componente
  mounted() {
    this.getSongs();
  }
};
</script>

<style scoped>
/* Estilos CSS con ámbito limitado al componente */

/* Establece el color base del tema a verde */
ion-header {
  --ion-color-base: #10dc60; /* Verde para el encabezado */
}

/* Estilos para las tarjetas de formulario y lista */
.form-card,
.list-card {
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Estilos para el encabezado de las tarjetas */
.form-card ion-card-header,
.list-card ion-card-header {
  background-color: var(--ion-color-success); /* Fondo verde para el encabezado */
  color: #fff; /* Texto blanco para el encabezado */
}

/* Estilos para los campos de entrada de formulario */
.form-card ion-item,
.list-card ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
}

/* Estilos para los elementos de canción en la lista */
.song-item ion-label {
  display: block;
  margin-bottom: 4px;
}

/* Estilos para los botones de acción */
ion-button {
  --padding-start: 16px;
  --padding-end: 16px;
}

/* Establece el color de fondo para los botones según su atributo color */
ion-button[color="success"] {
  --background: var(--ion-color-success); /* Fondo verde para el botón Añadir/Actualizar */
}

ion-button[color="secondary"] {
  --background: var(--ion-color-secondary); /* Fondo secundario para el botón Editar */
}

ion-button[color="danger"] {
  --background: var(--ion-color-danger); /* Fondo rojo para el botón Eliminar */
}
</style>
