DELIMITER //

CREATE PROCEDURE ActualizarEstadosPrestamos()
BEGIN
    UPDATE prestamos 
    SET estado = 'vencido'
    WHERE estado = 'activo' 
    AND fecha_devolucion_esperada < CURRENT_DATE;
END //

CREATE PROCEDURE ObtenerEstadisticasUsuario(IN usuario_id INT)
BEGIN
    SELECT 
        COUNT(*) as total_prestamos,
        SUM(CASE WHEN estado = 'activo' THEN 1 ELSE 0 END) as prestamos_activos,
        SUM(CASE WHEN estado = 'vencido' THEN 1 ELSE 0 END) as prestamos_vencidos
    FROM prestamos
    WHERE usuario_id = usuario_id;
END //

DELIMITER ;