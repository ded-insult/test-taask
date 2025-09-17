import type { InventoryAction } from "../../model/types/InventoryActions";
import { DecreaseButton } from "./DecreaseButton";
import { DeleteButton } from "./DeleteButton";
import { IncreaseButton } from "./IncreaseButton";

type InventoryActionButtonProps =
  | ({ actionType: "increase" } & InventoryAction<"increase">)
  | ({ actionType: "decrease" } & InventoryAction<"decrease">)
  | ({ actionType: "delete" } & InventoryAction<"delete">);

export const InventoryActionButton = (props: InventoryActionButtonProps) => {
  switch (props.actionType) {
    case "increase":
      return <IncreaseButton item={props.item} onIncrease={props.onIncrease} />;
    case "decrease":
      return <DecreaseButton item={props.item} onDecrease={props.onDecrease} />;
    case "delete":
      return <DeleteButton item={props.item} onDelete={props.onDelete} />;
  }
};
