/**
 * Caso de uso: Obtener un cliente por su ID.
 *
 * Esta clase pertenece a la capa de aplicación (use-cases) en una
 * arquitectura limpia (Clean Architecture). Su responsabilidad es
 * orquestar la búsqueda de un cliente en el repositorio, delegando
 * la lógica de persistencia a la capa de infraestructura.
 */
export default class GetCuentaById {
  /**
   * Constructor de la clase GetCuentaByIdUseCase.
   *
   * @param {Object} cuentaRepository - Repositorio de clientes encargado
   * de la comunicación con la base de datos. Debe implementar el
   * método `findById(id)`.
   */
  constructor(cuentaRepository) {
    this.cuentaRepository = cuentaRepository;
  }

  /**
   * Ejecuta el caso de uso: buscar un cliente por su identificador único.
   *
   * @async
   * @param {string|number} id - Identificador único del cliente.
   * @returns {Promise<Object|null>} El objeto del cliente si existe,
   * o `null` si no se encuentra en el repositorio.
   *
   * @example
   * const getClienteById = new GetClienteByIdUseCase(cuentaRepository);
   * const cliente = await getClienteById.execute(101);
   *
   * if (cliente) {
   *   console.log("Cliente encontrado:", cliente);
   * } else {
   *   console.log("Cliente no existe en la base de datos");
   * }
   */
  async execute(id) {
    return await this.cuentaRepository.findById(id);
  }
}
