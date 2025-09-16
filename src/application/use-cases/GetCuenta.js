/**
 * Caso de uso: Obtener todos los clientes.
 *
 * Esta clase pertenece a la capa de aplicación (use-cases) en una
 * arquitectura limpia (Clean Architecture). Su responsabilidad es
 * orquestar la obtención de todos los clientes desde el repositorio,
 * delegando la lógica de persistencia a la capa de infraestructura.
 */
export default class GetCuenta {
  /**
   * Constructor de la clase GetCuentaUseCase.
   *
   * @param {Object} cuentaRepository - Repositorio de cuentas encargado
   * de la comunicación con la base de datos. Debe implementar el método `findAll()`.
   */
  constructor(cuentaRepository) {
    this.cuentaRepository = cuentaRepository;
  }

  /**
   * Ejecuta el caso de uso: obtener todos los clientes registrados.
   *
   * @async
   * @returns {Promise<Array<Object>>} Lista de clientes disponibles
   * en el repositorio. Retorna un arreglo vacío si no existen clientes.
   *
   * @example
   * const getClientes = new GetClientesUseCase(cuentaRepository);
   * const clientes = await getClientes.execute();
   *
   * console.log("Clientes encontrados:", clientes);
   */
  async execute() {
    return await this.cuentaRepository.findAll();
  }
}
