<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


const firebaseConfig = {
apiKey: "AIzaSyA0Tv7E-6tmvvXR5_8YutEDogi1TngjE4k",
authDomain: "fspo-ffacf.firebaseapp.com",
databaseURL: "https://fspo-ffacf-default-rtdb.firebaseio.com",
projectId: "fspo-ffacf",
storageBucket: "fspo-ffacf.firebasestorage.app",
messagingSenderId: "319463993206",
appId: "1:319463993206:web:50983d2c717beadc86d457",
measurementId: "G-SVYH07LHE5"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
</script>
