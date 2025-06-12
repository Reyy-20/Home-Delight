const express = require('express'); 

const cors = require('cors'); 

const { initializeApp } = require('firebase/app'); 

const { getAuth } = require('firebase/auth'); 

const { getFirestore } = require('firebase/firestore'); 

const { getStorage } = require('firebase/storage'); 

 

const app = express(); 

app.use(cors()); 

app.use(express.json()); 

 

// Configura tus credenciales de Firebase aquí: 

const firebaseConfig = { 

  apiKey: "TU_API_KEY", 

  authDomain: "TU_AUTH_DOMAIN", 

  projectId: "TU_PROJECT_ID", 

  storageBucket: "TU_STORAGE_BUCKET", 

  messagingSenderId: "TU_MESSAGING_SENDER_ID", 

  appId: "TU_APP_ID" 

}; 

 

const firebaseApp = initializeApp(firebaseConfig); 

const auth = getAuth(firebaseApp); 

const db = getFirestore(firebaseApp); 

const storage = getStorage(firebaseApp); 

 

// Ejemplo de ruta 

app.get('/', (req, res) => { 

  res.send('¡Backend funcionando!'); 

}); 

 

// Aquí puedes agregar más rutas para auth, firestore, storage, etc. 

 

app.listen(3000, () => { 

  console.log('Backend corriendo en http://localhost:3000'); 

}); 