/**
 * Caso de uso: Eliminar un cliente existente.
 *
 * Esta clase forma parte de la capa de aplicación (use-cases) en una
 * arquitectura limpia (Clean Architecture). Su única responsabilidad es
 * orquestar la eliminación de un cliente, delegando la operación de
 * persistencia al repositorio correspondiente.
 */
export default class DeleteCuenta {
  /**
   * Inicializa el caso de uso con el repositorio de cuentas.
   *
   * @param {Object} cuentaRepository - Repositorio de cuentas que provee
   * las operaciones de acceso a datos.
   * Debe implementar un método `delete(id)` que elimine una cuenta.
   */
  constructor(cuentaRepository) {
    this.cuentaRepository = cuentaRepository;
  }

  /**
   * Ejecuta la acción de eliminar un cliente.
   *
   * @async
   * @param {string|number} id - Identificador único del cliente a eliminar.
   * @returns {Promise<boolean|Object>} Resultado de la operación de eliminación.
   * Puede ser un booleano (`true/false`) o un objeto con información
   * adicional, según la implementación del repositorio.
   *
   * @example
   * const deleteCliente = new DeleteCuenta(cuentaRepository);
   * const result = await deleteCliente.execute(101);
   *
   * if (result) {
   *   console.log("Cliente eliminado correctamente");
   * } else {
   *   console.log("Cliente no encontrado o no pudo eliminarse");
   * }
   */
  async execute(id) {
    return await this.cuentaRepository.delete(id);
  }
}
