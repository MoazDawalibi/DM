import { store } from "../Redux/store";
import { Provider } from "react-redux";
import { TChildren } from "../types/App";

function ReduxT({ children }: TChildren) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxT;
