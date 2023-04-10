import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "./styles.css";
import { useState } from "react";
import { FirstVisual } from "./FirstVisual";
import { SecondVisual } from "./SecondVisual";
import { ThirdVisual } from "./ThirdVisual";
import { FourthVisual } from "./FourthVisual";
import { NoVisual } from "./NoVisual";
import Button from "@mui/material/Button";

export default function App() {
  const [selectedVisual, setSelectedVisual] = useState(0);

  function renderVisual(selectedVisual) {
    switch (selectedVisual) {
      case 1:
        return <FirstVisual />;

      case 2:
        return <SecondVisual />;

      case 3:
        return <ThirdVisual />;

      case 4:
        return <FourthVisual />;
      default:
        return <NoVisual />;
    }
  }

  return (
    <div className="App">
      <Menu menuButton={<Button variant="contained">Menu for Visuals</Button>}>
        <MenuItem onClick={() => setSelectedVisual(1)}>
          Country vs Sum of Sales
        </MenuItem>
        <MenuItem onClick={() => setSelectedVisual(2)}>
          Year vs Sum of Sales
        </MenuItem>
        <MenuItem onClick={() => setSelectedVisual(3)}>
          Industrial Sector vs Sum of Profits
        </MenuItem>
        <MenuItem onClick={() => setSelectedVisual(4)}>
          Year vs Sum of Sales / Sum of Capex / Sum of Profits/ Sum of
          MarketCaps
        </MenuItem>
      </Menu>
      <div className="visualContainer">{renderVisual(selectedVisual)}</div>
    </div>
  );
}
