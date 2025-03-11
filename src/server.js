import app from "./app.js";
import { PORT } from "./Config/serverconfig.js";


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
