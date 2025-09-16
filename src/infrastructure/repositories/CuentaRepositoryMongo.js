import mongoose from "mongoose";

/**
 * Esquema de cliente para MongoDB.
 *
 * Define la estructura que tendrán los documentos de cliente en la colección.
 * Cada cliente contiene:
 * - `documento`: Documento de identidad único del cliente.
 * - `nombreCompleto`: Nombre y apellidos del cliente.
 * - `fechaNacimiento`: Fecha de nacimiento del cliente.
 * - `direccion`: Dirección de residencia.
 * - `whatsapp`: Número de contacto por WhatsApp.
 */
const CuentaSchema = new mongoose.Schema({
  nombreCliente: { type: String, unique: true, required: true },
  NumeroCuenta: { type: Number, required: true },
  saldo: { type: Number, required: true }
});

/**
 * Modelo de cliente basado en el esquema `ClienteSchema`.
 * Permite interactuar con la colección `cuentas` en MongoDB.
 */
const CuentaModel = mongoose.model("Cuenta", CuentaSchema);

/**
 * Repositorio de cuentas usando MongoDB.
 *
 * Implementa las operaciones CRUD para la entidad `Cuenta`,
 * siguiendo el patrón **Repository**.
 */
class CuentaRepositoryMongo {
  /**
   * Crea un nuevo cliente en la base de datos.
   *
   * @async
   * @param {Object} cuentaData - Datos de la cuenta a crear.
   * @param {string} cuentaData.nombreCliente - Nombre del cliente.
   * @param {number} cuentaData.NumeroCuenta - Número de la cuenta.
   * @param {number} cuentaData.saldo - Saldo de la cuenta.
   * @returns {Promise<Object>} El documento de la cuenta creada.
   */
  async create(cuentaData) {
    const cuenta = new CuentaModel(cuentaData);
    return await cuenta.save();
  }

  /**
   * Obtiene todos los clientes de la base de datos.
   *
   * @async
   * @returns {Promise<Array<Object>>} Lista de clientes.
   */
  async findAll() {
    return await CuentaModel.find();
  }

  /**
   * Busca un cliente por su ID.
   *
   * @async
   * @param {string} id - Identificador único del cliente.
   * @returns {Promise<Object|null>} El cliente encontrado o `null` si no existe.
   */
  async findById(id) {
    return await CuentaModel.findById(id);
  }

  /**
   * Actualiza un cliente existente.
   *
   * @async
   * @param {string} id - Identificador único del cliente.
   * @param {Object} cuentaData - Datos a actualizar.
   * @returns {Promise<Object|null>} El cliente actualizado o `null` si no existe.
   */
  async update(id, cuentaData) {
    return await CuentaModel.findByIdAndUpdate(id, cuentaData, { new: true });
  }

  /**
   * Elimina un cliente por su ID.
   *
   * @async
   * @param {string} id - Identificador único del cliente.
   * @returns {Promise<Object|null>} El cliente eliminado o `null` si no existe.
   */
  async delete(id) {
    return await CuentaModel.findByIdAndDelete(id);
  }
}

export default CuentaRepositoryMongo;
