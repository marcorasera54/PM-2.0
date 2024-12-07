// assets
import packageJson from "package.json";

export const PlaneVersionNumber: React.FC = () => <span>Versione: v{packageJson.version}</span>;
