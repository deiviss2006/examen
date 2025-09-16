import { Router } from "express";
import { createCuenta, getCuenta, getCuentaById, updateCuenta, deleteCuenta, consignar, retirar } from "../controllers/cuentaController.js";

const router = Router();

/**
 * @module CuentaRoutes
 * @description Rutas para la gestión de cuentas del sistema (CRUD).
 */

/**
 * Crea una nueva cuenta.
 * @name POST /
 * @function
 * @memberof module:CuentaRoutes
 * @param {Object} req - Objeto de petición HTTP.
 * @param {Object} req.body - Datos de la cuenta.
 * @param {string} req.body.nombreCliente - Nombre del cliente.
 * @param {number} req.body.NumeroCuenta - Número de la cuenta.
 * @param {number} req.body.saldo - Saldo de la cuenta.
 * @returns {Object} Cuenta creada.
 */
router.post("/", createCuenta);

/**
 * Obtiene todas las cuentas.
 * @name GET /
 * @function
 * @memberof module:CuentaRoutes
 * @param {Object} req - Objeto de petición HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Array<Object>} Lista de cuentas.
 */
router.get("/", getCuenta);

/**
 * Obtiene una cuenta por su ID.
 * @name GET /:id
 * @function
 * @memberof module:CuentaRoutes
 * @param {Object} req - Objeto de petición HTTP.
 * @param {string} req.params.id - ID de la cuenta.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Cuenta encontrada o error 404 si no existe.
 */
router.get("/:id", getCuentaById);

/**
 * Actualiza una cuenta por su ID.
 * @name PUT /:id
 * @function
 * @memberof module:CuentaRoutes
 * @param {Object} req - Objeto de petición HTTP.
 * @param {string} req.params.id - ID de la cuenta a actualizar.
 * @param {Object} req.body - Datos a actualizar.
 * @param {string} [req.body.nombreCliente] - Nuevo nombre del cliente.
 * @param {string} [req.body.numeroCuenta] - Nuevo número de cuenta.
 * @param {number} [req.body.saldo] - Nuevo saldo de la cuenta.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Cuenta actualizada o error 404 si no existe.
 */
router.put("/:id", updateCuenta);

/**
 * Elimina una cuenta por su ID.
 * @name DELETE /:id
 * @function
 * @memberof module:CuentaRoutes
 * @param {Object} req - Objeto de petición HTTP.
 * @param {string} req.params.id - ID de la cuenta a eliminar.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Mensaje de confirmación o error 404 si no existe.
 */
router.delete("/:id", deleteCuenta);

router.post("/consignar/:id", consignar);

router.put("/retirar/:id", retirar);

export default router;
