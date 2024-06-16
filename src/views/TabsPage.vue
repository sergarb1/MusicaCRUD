<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/canciones">
          <ion-icon aria-hidden="true" :icon="mic" />
          <ion-label>Canciones</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/acercade">
          <ion-icon aria-hidden="true" :icon="informationCircleOutline" />
          <ion-label>Acerca de</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, informationCircleOutline, mic } from 'ionicons/icons';</script>
