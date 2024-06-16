import { createRouter, createWebHistory } from '@ionic/vue-router'; // Importación de funciones de enrutamiento de Ionic
import { RouteRecordRaw } from 'vue-router'; // Importación de interfaz para definir rutas en Vue Router
import TabsPage from '../views/TabsPage.vue'; // Importación del componente principal de pestañas (TabsPage)

// Definición de las rutas de la aplicación
const routes: Array<RouteRecordRaw> = [
  {
    path: '/', // Ruta raíz de la aplicación
    redirect: '/tabs/home' // Redirige automáticamente a la pestaña de inicio
  },
  {
    path: '/tabs/', // Ruta base para el uso de pestañas
    component: TabsPage, // Componente principal que contiene las pestañas
    children: [
      {
        path: '', // Ruta vacía dentro de /tabs/ (redirige a la pestaña de inicio por defecto)
        redirect: '/tabs/home'
      },
      {
        path: 'home', // Ruta para la pestaña de inicio
        component: () => import('@/views/Home.vue') // Componente importado para la pestaña de inicio
      },
      {
        path: 'canciones', // Ruta para la pestaña de canciones
        component: () => import('@/views/Canciones.vue') // Componente importado para la pestaña de canciones
      },
      {
        path: 'acercade', // Ruta para la pestaña "Acerca de"
        component: () => import('@/views/Acercade.vue') // Componente importado para la pestaña "Acerca de"
      }
    ]
  }
];

// Creación del enrutador utilizando Ionic y Vue Router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Configuración de la historia de navegación basada en el historial web
  routes // Lista de rutas definidas anteriormente
});

export default router; // Exportación del enrutador para su uso en la aplicación
