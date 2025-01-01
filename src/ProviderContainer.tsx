import QueryProvider from "./lib/ReactQueryProvider";
import { BrowserRouter } from "react-router-dom";
import { Tchildren } from "./types/App";
import { ConfigProvider } from "antd";
import ReduxT from "./lib/ReduxT";
import ToastProvider from "./lib/ToastProvider";

function ProviderContainer({ children }: Tchildren) {
  return (
    <BrowserRouter basename="/">
      <ReduxT>
        <ToastProvider>
          <QueryProvider>
            <ConfigProvider
              theme={{
                token:{
                  colorPrimary:"#eb671b"
                },
                components: {
                  Pagination: {
                    itemActiveBg: "#eb671b",
                  },
                },
              }}
            >
              {children}
            </ConfigProvider>
          </QueryProvider>
        </ToastProvider>
      </ReduxT>
    </BrowserRouter>
  );
}

export default ProviderContainer;
