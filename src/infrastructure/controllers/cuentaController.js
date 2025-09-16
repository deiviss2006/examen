import CreateCuenta from "../../application/use-cases/CreateCuenta.js";
import GetCuenta from "../../application/use-cases/GetCuenta.js";
import GetCuentaById from "../../application/use-cases/GetCuentaById.js";
import UpdateCuenta from "../../application/use-cases/UpdateCuenta.js";
import DeleteCuenta from "../../application/use-cases/DeleteCuenta.js";
import CuentaRepositoryMongo from "../repositories/CuentaRepositoryMongo.js";

const cuentaRepository = new CuentaRepositoryMongo();

/**
 * Controlador para crear un nuevo cliente.
 *
 * @async
 * @function createCliente
 * @param {import("express").Request} req - Objeto de la solicitud HTTP (body con documento, nombreCompleto, fechaNacimiento, direccion, whatsapp).
 * @param {import("express").Response} res - Objeto de la respuesta HTTP.
 * @returns {Promise<void>} Retorna el cliente creado en formato JSON.
 *
 * @example
 * // POST /clientes
 * // Body: { "documento": "12345678", "nombreCompleto": "Juan Pérez", "fechaNacimiento": "1990-05-10", "direccion": "Calle 10 #20-30", "whatsapp": "3001234567" }
 */
export const createCuenta = async (req, res) => {
  try {
    const useCase = new CreateCuenta(cuentaRepository);
    const cuenta = await useCase.execute(req.body);
    res.status(201).json(cuenta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Controlador para obtener todos los clientes.
 *
 * @async
 * @function getCuenta
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<void>} Retorna un arreglo de cuentas en formato JSON.
 *
 * @example
 * // GET /clientes
 */
export const getCuenta = async (req, res) => {
  try {
    const useCase = new GetCuenta(cuentaRepository);
    const cuenta = await useCase.execute();
    res.json(cuenta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Controlador para obtener un cliente por su ID.
 *
 * @async
 * @function getCuentaById
 * @param {import("express").Request} req - Debe contener `params.id`.
 * @param {import("express").Response} res
 * @returns {Promise<void>} Retorna un cliente o un error 404 si no existe.
 *
 * @example
 * // GET /clientes/:id
 */
export const getCuentaById = async (req, res) => {
  try {
    const useCase = new GetCuentaById(cuentaRepository);
    const cuenta = await useCase.execute(req.params.id);
    if (!cuenta) return res.status(404).json({ message: "Cuenta no encontrada" });
    res.json(cuenta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Controlador para actualizar un cliente por su ID.
 *
 * @async
 * @function updateCuenta
 * @param {import("express").Request} req - Debe contener `params.id` y `body` con los datos nuevos.
 * @param {import("express").Response} res
 * @returns {Promise<void>} Retorna la cuenta actualizada o un error 404 si no existe.
 *
 * @example
 * // PUT /clientes/:id
 * // Body: { "direccion": "Nueva dirección 123", "whatsapp": "3019876543" }
 */
export const updateCuenta = async (req, res) => {
  try {
    const useCase = new UpdateCuenta(cuentaRepository);
    const cuenta = await useCase.execute(req.params.id, req.body);
    if (!cuenta) return res.status(404).json({ message: "Cuenta no encontrada" });
    res.json(cuenta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Controlador para eliminar un cliente por su ID.
 *
 * @async
 * @function deleteCuenta
 * @param {import("express").Request} req - Debe contener `params.id`.
 * @param {import("express").Response} res
 * @returns {Promise<void>} Retorna un mensaje de éxito o un error 404 si no existe.
 *
 * @example
 * // DELETE /clientes/:id
 */
export const deleteCuenta = async (req, res) => {
  try {
    const useCase = new DeleteCuenta(cuentaRepository);
    const result = await useCase.execute(req.params.id);
    if (!result) return res.status(404).json({ message: "Cuenta no encontrada" });
    res.json({ message: "Cuenta eliminada correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const consignar = async (req, res) => {
  try {
    const { id } = req.params;
    const { monto } = req.body;
    const useCase = new ConsignarCuenta(cuentaRepository);
    const cuenta = await useCase.execute(id, { monto });
    if (!cuenta) return res.status(404).json({ message: "Cuenta no encontrada" });
    res.json(cuenta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const retirar = async (req, res) => {
  try {
    const { id } = req.params;
    const { monto } = req.body;
    const useCase = new RetirarCuenta(cuentaRepository);
    const cuenta = await useCase.execute(id, { monto });
    if (!cuenta) return res.status(404).json({ message: "Cuenta no encontrada" });
    res.json(cuenta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
