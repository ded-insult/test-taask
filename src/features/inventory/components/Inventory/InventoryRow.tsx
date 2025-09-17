import { type ReactNode } from "react";
import type { InventoryItem } from "../../model/types/inventoryItem";

type InventoryRowProps = {
  item: InventoryItem;
  children: ReactNode;
};

export const InventoryRow = ({ item, children }: InventoryRowProps) => (
  <tr className="border-b last:border-b-0">
    <td className="p-2">
      <img
        src={item.icon}
        alt={item.name}
        className="h-10 w-10 object-contain"
      />
    </td>
    <td className="p-2 font-medium">{item.name}</td>
    <td className="p-2 text-center">
      <div className="inline-flex items-center gap-2">
        <span className="min-w-8 text-center">{item.quantity}</span>
      </div>
    </td>
    <td className="p-2 text-center">{item.weight}</td>
    <td className="p-2 text-right">{children}</td>
  </tr>
);
