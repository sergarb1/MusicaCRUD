// Importa la clase Storage del paquete @ionic/storage
import { Storage } from '@ionic/storage';

// Crea una instancia de Storage
const storage = new Storage();

// Llama al método create() en la instancia de Storage.
// Este método puede ser asíncrono y podría estar configurando el almacenamiento subyacente.
storage.create();

// Exporta la instancia de Storage como el módulo por defecto.
export default storage;
