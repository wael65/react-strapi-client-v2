// Autocomplete
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const options = ["1", "2", "3", "4", "5"];

const [value, setValue] = useState(options[0]);
const [inputValue, setInputValue] = useState("");

<Autocomplete
  id="size-small-outlined"
  size="small"
  sx={{ width: 100, height: 30, mb: "1em" }}
  options={options}
  value={value}
  onChange={(e, newValue) => {
    setValue(newValue);
  }}
  inputValue={inputValue}
  onInputChange={(e, newInputValue) => {
    setInputValue(newInputValue);
  }}
  renderInput={(params) => <TextField {...params} label="Quantity" />}
/>;
