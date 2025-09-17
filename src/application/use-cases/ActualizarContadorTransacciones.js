// src/application/use-cases/ActualizarContadorTransacciones.js

export default class ActualizarContadorTransacciones {
  constructor(cuentaRepository) {
    this.cuentaRepository = cuentaRepository;
  }

  async execute() {
    // Actualiza todas las cuentas que no tengan el campo contadorTransacciones
    return await this.cuentaRepository.actualizarContadorTransacciones();
  }
}
