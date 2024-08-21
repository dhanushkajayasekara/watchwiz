/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        defaultTheme: "dark",
        themes: {
            dark: {
                colors: {
                    background: "#121212", // Deep, dark gray for a sleek, modern background
                    surface: "#000814", // Very dark blue for surfaces, providing a subtle contrast
                    primary: "#001D3D", // Deep navy blue for primary elements, ensuring a strong visual impact
                    "primary-darken-1": "#000A1B", // Even darker shade of the primary color
                    secondary: "#003566", // Dark blue for secondary accents, harmonizing with the primary color
                    "secondary-darken-1": "#002C49", // Darker shade of the secondary color
                    error: "#FF5252", // Bright coral red for error states
                    info: "#29B6F6", // Vivid cyan blue for informational messages
                    success: "#69F0AE", // Bright mint green for success notifications
                    warning: "#FFD740", // Bold yellow for warnings
                },
            },
        },
    },
});
