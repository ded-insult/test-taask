import { Inventory } from "@/features/inventory";
import "./styles/tailwind.css";

export const App = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <Inventory />
    </main>
  );
};
