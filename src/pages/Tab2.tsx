import React, { useState } from 'react';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';


const Tab2: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  
  // snip - rest of code
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2 My Lolali</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonGrid>
    <IonRow>
      
      {photos.map((photo, index) => (
        <IonCol size="6" key={photo.filepath}>
          
          <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonActionSheet
  isOpen={!!photoToDelete}
  buttons={[
    {
      text: 'Delete',
      role: 'destructive',
      icon: trash,
      handler: () => {
        if (photoToDelete) {
          deletePhoto(photoToDelete);
          setPhotoToDelete(undefined);
        }
      },
    },
    {
      text: 'Cancel',
      icon: close,
      role: 'cancel',
    },
  ]}
  onDidDismiss={() => setPhotoToDelete(undefined)}
/>
      </IonContent>
      
    </IonPage>
  );
};

export default Tab2;