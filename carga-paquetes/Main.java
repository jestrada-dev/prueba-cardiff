import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {

	// Parámetros de configuración
	static final int espacioLibre = 30;
	
	public static void main(String[] args) {
		
		// Parámetros de entrada
		Integer paquetes[] = {10, 60, 40, 35, 20};
		Integer tamanioCamion = 90;
		
		// Se ordena el array de paquetes de mayor a menor
		Arrays.sort(paquetes, Collections.reverseOrder());
		
		// Se obtiene el espacio disponible de ese camión
		int espacioDisponible = tamanioCamion - espacioLibre;
		
		// Se realiza las validaciones y lógica de negocio
		List<Integer> paquetesCamion = new ArrayList();
		for ( Integer paquete1: paquetes) {
			for (Integer paquete2: paquetes) {
				if ((paquete1 != paquete2) && ((paquete1 + paquete2) == espacioDisponible)) {
					paquetesCamion.add(paquete1);
					paquetesCamion.add(paquete2);
					break;
				}
				if (!paquetesCamion.isEmpty()) {
					break;
				}
			}
			//System.out.println(paquete);
		}
		
		// Salida -> Se imprime el resultado
		for ( Integer paquete: paquetesCamion) {
			System.out.println(paquete);
		}
	}

}
