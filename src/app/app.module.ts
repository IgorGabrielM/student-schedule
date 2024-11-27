import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"student-schedule-3c9e8","appId":"1:289815405562:web:a79fe039522041c93f3a43","storageBucket":"student-schedule-3c9e8.firebasestorage.app","apiKey":"AIzaSyACsbD5OqutQwTx4_BXXkG-IRWX91L50bk","authDomain":"student-schedule-3c9e8.firebaseapp.com","messagingSenderId":"289815405562","measurementId":"G-4J58T1HKST"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging())],
  bootstrap: [AppComponent],
})
export class AppModule {}
