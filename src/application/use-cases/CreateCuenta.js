/**
 * Caso de uso: Crear un nuevo cliente.
 *
 * Descripción:
 * Esta clase pertenece a la capa de "application/use-cases"
 * en una arquitectura limpia (Clean Architecture).
 *
 * Su responsabilidad es orquestar la acción de crear un cliente,
 * delegando la persistencia al repositorio de clientes.
 */
export default class CreateCuenta {
  /**
   * Constructor de la clase CreateCuenta.
   *
   * @param {Object}  cuentaRepository - Repositorio de clientes.
   * El repositorio debe implementar un método `create(cuentaData)`.
   */
  constructor( cuentaRepository) {
    this. cuentaRepository =  cuentaRepository;
  }

  /**
   * Ejecuta el caso de uso: crear un nuevo cliente.
   *
   * @async
   * @function
   * @param {Object} cuentaData - Datos del cliente a crear.
   * @param {number|string} cuentaData.id - Identificador único del cliente.
   * @param {string|number} cuentaData.NombreCliente - Documento de identidad del cliente.
   * @param {number} cuentaData.NumeroCuenta - Nombre completo del cliente.
   * @param {string} cuentaData.fechaNacimiento - Fecha de nacimiento (formato ISO: YYYY-MM-DD).
   * @param {string} cuentaData.direccion - Dirección de residencia del cliente.
   * @param {string} cuentaData.whatsapp - Número de WhatsApp para contacto.
   *
   * @returns {Promise<Object>} - Retorna el cliente creado.
   *
   * @example
   * const createCliente = new CreateCuenta( cuentaRepository);
   * const nuevoCliente = await createCliente.execute({
   *   id: 1,
   *   documento: "123456789",
   *   nombreCompleto: "Ana Gómez",
   *   fechaNacimiento: "1995-04-20",
   *   direccion: "Calle 123 #45-67",
   *   whatsapp: "+57 3001234567"
   * });
   * console.log(nuevoCliente);
   */
  async execute(cuentaData) {
    return await this. cuentaRepository.create(cuentaData);
  }
}
