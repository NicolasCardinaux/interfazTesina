# Trabajo Final: Interfaz Hombre-Máquina
## Diseño Centrado en el Usuario aplicado a BizLens AI

---

### 1. Introducción

El presente documento expone la justificación teórica y metodológica del diseño de la interfaz gráfica de usuario (GUI) de **BizLens AI**, una plataforma web concebida bajo el modelo de Software como Servicio (SaaS). 

- **Descripción general del sistema completo:** BizLens AI es una herramienta integral de inteligencia de negocios asistida por Inteligencia Artificial (IA), diseñada para unificar datos financieros y operativos en un entorno visualmente rico e intuitivo.
- **Objetivo de la aplicación:** Democratizar el acceso a los datos complejos, mitigando la sobrecarga cognitiva que generan los sistemas corporativos tradicionales (ERPs), y permitiendo a los tomadores de decisiones actuar de manera informada y rápida.
- **Arquitectura y pantallas del sistema:** El software es un ecosistema robusto compuesto por 18 vistas principales que cubren las necesidades de gestión, monitoreo y configuración corporativa, agrupadas en las siguientes áreas:
  - *Adquisición y Acceso:* Landing de ventas, Login y Registro corporativo.
  - *Módulos Core (Operativos y Financieros):* Dashboard General, Operaciones, Finanzas e Ingesta de datos.
  - *Monitoreo y Trazabilidad:* Centro de Alertas, Auditoría y Archivos (Gestor documental).
  - *Módulos de Inteligencia Artificial:* Reportes IA, Chat interactivo con IA, Administración de IA y Configuraciones de modelos.
  - *Configuración y Administración del Sistema:* Parámetros generales, Gestión de usuarios, Mi Perfil y Preferencias, y Consola técnica (Historial de logs).
- **Pantalla principal elegida:** Aunque el diseño abarca todo el sistema, este documento hará especial foco en el **"Dashboard General"**, dado que representa el núcleo interactivo y de valor primario para el usuario final.

---

### 2. Metodología de Diseño Centrado en el Usuario (DCU)

#### 2.1 Análisis
- **Tipo de usuarios:** Gerentes, directores financieros y supervisores de planta. Son usuarios de negocio, con tiempo limitado, que requieren información procesada de manera clara sin necesidad de conocimientos técnicos avanzados en bases de datos.
- **Necesidades principales:** Conocer el estado general de la operación en cuestión de segundos, identificar anomalías de manera proactiva y contar con herramientas ágiles para generar reportes.
- **Problemas que resuelve:** Resuelve el problema de la fragmentación de la información (finanzas por un lado, producción por otro) y la curva de aprendizaje pronunciada de herramientas de *Business Intelligence* tradicionales.
- **Contexto de uso:** Entorno de oficina o planta corporativa, principalmente mediante navegadores web de escritorio, con sesiones de uso de corta a mediana duración, altamente enfocadas en tareas analíticas.

#### 2.2 Diseño
- **Decisiones generales del sistema:** Se optó por una estructura de "Panel de Administración" (*Dashboard/Admin UI*). La navegación principal se resuelve mediante una barra lateral (*Sidebar*) persistente que garantiza el conocimiento constante de la ubicación dentro del sistema. Se priorizó un diseño limpio, moderno e inmersivo (con soporte para modo oscuro o paletas corporativas profundas).
- **Justificación:** La persistencia de la navegación reduce la carga de memoria de trabajo. El estilo minimalista enfoca la atención del usuario en los datos (*Data-ink ratio* alto), evitando distracciones superfluas.

#### 2.3 Prototipo
- **Baja fidelidad:** El proceso de diseño inició mapeando la totalidad del ecosistema (las 18 pantallas mencionadas) mediante *wireframes* conceptuales. Esto permitió definir la arquitectura de la información a gran escala, conectando lógicamente los flujos de usuario desde el ingreso (Login) hasta la configuración de cuenta (Mi Perfil) y gestión técnica (Logs, Configuración IA) mediante disposiciones estructurales en bloques en blanco y negro (sin diseño estético).
- **Alta fidelidad:** Sobre esta base estructural, se desarrollaron *mockups* visuales y posteriormente el sistema interactivo en código frontend, aplicando el sistema de diseño, paletas definitivas e interacciones complejas en todas las vistas del aplicativo.
- **Evolución:** La iteración permitió descubrir la necesidad de microinteracciones (*tooltips*) para no sobrecargar de texto estático la pantalla principal, logrando el equilibrio entre simplicidad visual y profundidad de información.

#### 2.4 Evaluación
- **Evaluación heurística general:** El sistema cumple con la heurística de "Control y libertad del usuario" (navegación clara entre pantallas), "Consistencia y estándares" (uso de iconografía universal) y "Visibilidad del estado del sistema" (indicadores de carga y estados vacíos).
- **Posibles mejoras detectadas:** Incorporación de "Deshacer" (*Undo*) en la gestión de alertas, y mayor personalización en la disposición de los gráficos del Dashboard a gusto de cada usuario.

---

### 3. Objetivos de Usabilidad

Aplicados al sistema en general y al **Dashboard General** en particular:

- **Eficiencia:** Un usuario puede conocer el estado de sus ingresos frente a costos en menos de 5 segundos gracias al gran gráfico central.
- **Eficacia:** Las tareas críticas (ej. descargar un resumen ejecutivo o navegar al Centro de Alertas desde un KPI en estado crítico) se completan sin errores gracias a botones claramente etiquetados y objetivos de clic amplios (*Ley de Fitts*).
- **Facilidad de aprendizaje:** Las interacciones son predecibles. Un botón en la barra lateral siempre cambiará la vista completa, mientras que un botón secundario activará modales o descargas.
- **Memorabilidad:** El uso de una distribución estándar en "L" invertida (cabecera superior y barra lateral izquierda) aprovecha los modelos mentales existentes, facilitando el retorno al uso tras períodos de inactividad.
- **Satisfacción:** Animaciones fluidas, retroalimentación inmediata (*feedback*) visual y una estética premium generan una experiencia de uso placentera que fomenta la adopción de la herramienta.

---

### 4. Aspectos Visuales

- **Color:** La paleta del sistema combina tonos neutros (como la escala *slate* o grises) para las superficies y la estructura general, reservando colores semánticos de alta saturación para la información crítica: rojo (`#EF4444`) para costos o alertas, verde para métricas positivas y un color primario corporativo para acciones principales.
- **Contraste y legibilidad:** Se aplican estrictas reglas de contraste entre el color del texto principal y el fondo de las tarjetas (*Cards*), asegurando que los datos numéricos destaquen nítidamente y sean legibles incluso en monitores con mala calibración.
- **Profundidad (Jerarquía visual):** Se utiliza el eje Z (profundidad) mediante sombras controladas (`shadow-card`, `shadow-lg`). Las ventanas emergentes, menús desplegables y *tooltips* proyectan una sombra mayor que el contenido base, indicando visualmente que se encuentran en un nivel interactivo superior.
- **Distribución visual:** El escaneo visual se dirige en un patrón en forma de "Z" u "F", ubicando los KPIs fundamentales en la franja superior izquierda, fluyendo hacia los gráficos en el centro y terminando en tablas de datos granulares en la sección inferior.

---

### 5. Organización de los elementos

- **Figura y fondo:** Existe una clara delimitación entre los módulos funcionales (tarjetas blancas o de fondo sólido) y el *canvas* o fondo general de la aplicación, facilitando la segregación de la información.
- **Jerarquía visual:** La información se escala por importancia: títulos de pantalla grandes (ej. *24px*), seguidos por números de KPIs masivos, y finalmente texto descriptivo menor (*12-14px*).
- **Gestalt - Proximidad:** Elementos funcionalmente relacionados se agrupan espacialmente. Por ejemplo, los botones de "Descargar (PDF)" y "Generar reporte desde IA" están contiguos, formando un clúster de acciones globales.
- **Gestalt - Similitud:** Todas las tarjetas de KPIs en el Dashboard tienen exactamente la misma estructura (título, valor, tendencia, ícono), indicando al usuario que todas son métricas de primer nivel.
- **Gestalt - Continuidad y Cierre:** Se emplean gráficos de línea continuos y bordes redondeados que permiten al usuario percibir formas completas y fluidas, reduciendo la brusquedad visual de las cajas rígidas.

---

### 6. Interacción de la interfaz

- **Navegación entre pantallas:** El cambio de contextos (ej. de Dashboard a Configuración IA) se realiza a través de la barra de navegación lateral. Las rutas internas son claras e inmediatas sin recargar por completo el navegador, generando sensación de inmediatez.
- **Comportamiento de botones y componentes:** Los elementos interactivos revelan su estado dinámicamente. Al posicionar el cursor (*hover*) sobre las tarjetas de KPI del Dashboard, estas se elevan sutilmente (`-translate-y-1`), invitando al clic.
- **Feedback visual:** Cada acción tiene una reacción. Al hacer clic en descargar, o al interactuar con gráficos de torta (donde cada segmento se ilumina o expande al pasar el mouse), el usuario recibe confirmación de que el sistema registró su comando.
- **Ejemplos concretos:** El gráfico principal interactivo ("Evolución Ingresos vs Costos") muestra una guía en cruz (*crosshair*) y un *tooltip* consolidado al pasar el ratón, cruzando instantáneamente el dato temporal del eje X con los valores del eje Y.

---

### 7. Accesibilidad

- **Navegación por teclado:** La estructura de los componentes y las etiquetas HTML semánticas permiten el recorrido secuencial de la aplicación mediante el uso de la tecla `Tab` para usuarios que no utilicen periféricos de puntero.
- **Legibilidad:** Tipografía moderna, escalable (ej. uso de unidades relativas como `rem`) y sin serifas (sans-serif), que evita el empastado visual en resoluciones bajas.
- **Contraste:** Prevención del error común de "gris sobre gris". Cumplimiento de ratios mínimos (WCAG) diferenciando textos primarios de secundarios.
- **Consideraciones básicas:** Los elementos no dependen exclusivamente del color para comunicar estado. Las alertas de error o críticas, además de ser rojas, incluyen iconografía específica de advertencia e identificadores textuales (ej. un *badge* que dice "Crítico").

---

### 8. Internacionalización

- **Soporte multilingüe:** El diseño modular y la separación del texto de la lógica del componente permiten la fácil integración de archivos de diccionarios de idiomas (ej. `es.json`, `en.json`).
- **Integración en la interfaz:** Se contempla un menú de selección de idioma en el área de perfil de usuario. 
- **Impacto en el diseño:** Los componentes UI han sido estructurados utilizando *Flexbox* y dimensiones relativas. Esto asegura que si se cambia de español a un idioma con palabras típicamente más largas (como el alemán), las cajas de texto y botones se expandan de manera fluida sin quebrar ("romper") el diseño del *layout*.

---

### 9. Estandarización

- **Frameworks UI utilizados:** El diseño del sistema se basó en el motor de estilos CSS **Tailwind CSS**, complementado con componentes visuales inspirados en **Material Design 3** y bibliotecas de iconografía estandarizada como **Lucide React**. Para la visualización de datos, se confió en el estándar de **Recharts**.
- **Justificación de uso:** Tailwind CSS, al ser un framework de utilidades, permite un control granular de la interfaz mientras mantiene una escala de diseño matemática y rigurosa (ej. la escala de espaciados de 4px). Esto impide la aparición de estilos ad-hoc desordenados.
- **Consistencia del diseño:** Gracias al uso de estas librerías, los radios de los bordes, la caída de las sombras, la densidad y peso de los íconos, y los tiempos de animación se mantienen idénticos a lo largo de las múltiples pantallas del sistema.

---

### 10. Conclusión

El frontend desarrollado para **BizLens AI** demuestra el enorme valor de aplicar la metodología de Diseño Centrado en el Usuario (DCU). Al enfocarse primero en las necesidades del usuario de negocio, se ha logrado transformar información corporativa densa y compleja en una experiencia digerible, estética e interactiva.

Se han cumplido con creces los objetivos de usabilidad: el sistema es eficiente para tareas rutinarias de monitoreo y fácil de aprender desde el primer uso. El cuidadoso respeto por principios universales (como Gestalt), sumado a las convenciones de jerarquía visual y accesibilidad, culminan en una interfaz no solo funcional, sino que aporta directamente al valor estratégico del producto final.
